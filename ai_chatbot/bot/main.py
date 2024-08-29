from flask import Flask, request, jsonify
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import FAISS
from langchain_cohere import CohereEmbeddings
from langchain.agents import AgentExecutor
from langchain_cohere.react_multi_hop.agent import create_cohere_react_agent
from langchain_core.prompts import ChatPromptTemplate
from langchain_cohere.chat_models import ChatCohere
import os
from pymongo.errors import PyMongoError
from models import insert_conversation  # Import the insert_conversation function
from utils import send_message, logger

# Set up environment variables for API keys
os.environ["COHERE_API_KEY"] = "YOOsSYgTNPXqJ4ZO5uz9P8uO08SWNxlzUQJ6tYHF"
os.environ["TAVILY_API_KEY"] = "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"

# Initialize TavilySearchResults for internet search functionality
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

# Define the schema for Tavily search input
from langchain_core.pydantic_v1 import BaseModel, Field
class TavilySearchInput(BaseModel):
    query: str = Field(description="Query to search the internet with")
internet_search.args_schema = TavilySearchInput

# Set up Cohere embeddings and language model
embd = CohereEmbeddings(model='embed-english-v3.0')
llm = ChatCohere(model="command-r-plus", temperature=0.3)

# Define the preamble and prompt template
preamble = """
you are an expert college advisor. you help students to find engineering colleges in rajasthan based on student marks, percentile and other queries.
you use internet search to find answers of user queries
"""
prompt = ChatPromptTemplate.from_template("{input}")

# Create the ReAct agent
agent = create_cohere_react_agent(
    llm=llm,
    tools=[internet_search],
    prompt=prompt,
)

# Initialize AgentExecutor
agent_executor = AgentExecutor(agent=agent, tools=[internet_search], verbose=True)

# Set up Flask application
app = Flask(__name__)

@app.route('/search', methods=['POST'])
def search_colleges():
    # Get input query from request data
    data = request.json
    input_query = data.get("input", "")
    whatsapp_number = data.get("whatsapp_number", "")  # Get WhatsApp number from request

    # Validate input
    if not input_query:
        logger.error("No input query provided")
        return jsonify({"error": "Input query is missing."}), 400

    # Invoke the agent executor with the input query
    try:
        response = agent_executor.invoke({
            "input": input_query,
            "preamble": preamble,
        })

        # Extract the output from the response
        output = response.get('output', "No output available.")
        
        # Store the conversation in the database
        try:
            insert_conversation(sender="user", message=input_query, response=output)
            logger.info("Conversation stored in database")
        except PyMongoError as e:
            logger.error(f"Database error: {e}")
        
        # Send the response back to the user via WhatsApp
        if whatsapp_number:
            try:
                send_message(whatsapp_number, output)
                logger.info("Response sent via WhatsApp")
            except Exception as e:
                logger.error(f"Error sending WhatsApp message: {e}")
        
        return jsonify({"output": output})

    except KeyError as e:
        logger.error(f"KeyError: {e}")
        return jsonify({"error": "A KeyError occurred."}), 500
    except ValueError as e:
        logger.error(f"ValueError: {e}")
        return jsonify({"error": "A ValueError occurred."}), 500
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        return jsonify({"error": "An unexpected error occurred."}), 500

@app.route('/', methods=['GET'])
def home():
    return "API is working"

# Run Flask application
if __name__ == '__main__':
    app.run(debug=True)
