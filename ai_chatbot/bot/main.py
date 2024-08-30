import os
import logging
from fastapi import FastAPI, Request, Form
from pydantic import BaseModel, Field
from twilio.rest import Client
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import FAISS
from langchain_cohere import CohereEmbeddings
from langchain.agents import AgentExecutor
from langchain_cohere.react_multi_hop.agent import create_cohere_react_agent
from langchain_core.prompts import ChatPromptTemplate
from langchain_cohere.chat_models import ChatCohere
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Fetch all credentials from environment variables
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_NUMBER = os.getenv("TWILIO_NUMBER")
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")
TO_NUMBER = os.getenv("TO_NUMBER")

# Set environment variables for API keys in the application
os.environ["COHERE_API_KEY"] = COHERE_API_KEY
os.environ["TAVILY_API_KEY"] = TAVILY_API_KEY

# Initialize the Twilio client
client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize LangChain components
internet_search = TavilySearchResults()
internet_search.name = "internet_search"
internet_search.description = "Returns a list of relevant document snippets for a textual query retrieved from the internet."
internet_search.include_domains = [
    "https://www.shiksha.com/engineering/colleges/b-tech-colleges-rajasthan",
    "https://collegedunia.com/btech/rajasthan-colleges",
    "https://engineering.careers360.com/colleges/list-of-be-btech-colleges-in-rajasthan",
    "https://engineering.careers360.com/articles/rajasthan-btech-admission",
    "https://www.jagranjosh.com/colleges/btech-colleges-in-rajasthan",
    "https://zollege.in/btech/rajasthan-colleges",
    "https://www.shiksha.com/university/*",
    "https://engineering.careers360.com/articles/reap-cutoff",
    "https://engineering.careers360.com/articles/jee-main-cutoff-for-top-gftis",
    "https://drive.google.com/file/d/1B4iL3qmGEmdp6LfNp5zTBHCOKcOv7Uto/view",
    "https://www.getmyuni.com/articles/reap-rank-wise-colleges-list",
    "https://www.collegedekho.com/articles/reap-cutoff/"
]

# Define input schema for the internet search
class TavilySearchInput(BaseModel):
    query: str = Field(description="Query to search the internet with")

internet_search.args_schema = TavilySearchInput

# Set up language model and embeddings
embd = CohereEmbeddings(model='embed-english-v3.0')
llm = ChatCohere(model="command-r-plus", temperature=0.3)

# Preamble for the agent
preamble = """
You are an expert college advisor. You help students find engineering colleges in Rajasthan based on student marks, percentile, and other queries.
You use internet search to find answers to user queries.
"""

# Prompt template
prompt = ChatPromptTemplate.from_template("{input}")

# Create the ReAct agent
agent = create_cohere_react_agent(
    llm=llm,
    tools=[internet_search],
    prompt=prompt,
)

# Set up the agent executor
agent_executor = AgentExecutor(agent=agent, tools=[internet_search], verbose=True)

# Function to send a WhatsApp message using Twilio
def send_message(to_number, body_text):
    try:
        message = client.messages.create(
            from_=f"whatsapp:{TWILIO_NUMBER}",
            body=body_text,
            to=f"whatsapp:{to_number}"
        )
        logger.info(f"Message sent to {to_number}: {message.body}")
    except Exception as e:
        logger.error(f"Error sending message to {to_number}: {e}")

# Initialize FastAPI app
app = FastAPI()

# Define route for the WhatsApp webhook
@app.post('/whatsapp')
async def whatsapp_webhook(request: Request):
    form = await request.form()
    incoming_msg = form.get('Body', '').strip()
    sender_number = form.get('From', '').strip().replace('whatsapp:', '')
    
    if incoming_msg:
        # Process input using the LangChain agent
        response = agent_executor.invoke({
            "input": incoming_msg,
            "preamble": preamble,
        })

        # Extract the output from the response
        output_text = response['output']
        
        # Send the output back to the user on WhatsApp
        send_message(sender_number, output_text)
    
    return {"status": "success"}

# Define a simple home route
@app.get('/')
def home():
    return {"message": "API is working"}

# Run the FastAPI app
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000, log_level='info')
