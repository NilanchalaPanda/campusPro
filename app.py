from langchain_community.tools.tavily_search import TavilySearchResults
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import FAISS
from langchain_cohere import CohereEmbeddings
from langchain.agents import AgentExecutor
from langchain_cohere.react_multi_hop.agent import create_cohere_react_agent
from langchain_core.prompts import ChatPromptTemplate
from langchain_cohere.chat_models import ChatCohere
from flask import Flask, request, jsonify
import os
os.environ["COHERE_API_KEY"] = ""

COHERE_API_KEY = ""

from langchain_community.tools.tavily_search import TavilySearchResults

os.environ["TAVILY_API_KEY"] =  "tvly-"

internet_search = TavilySearchResults()
internet_search.name = "internet_search"
internet_search.description = "Returns a list of relevant document snippets for a textual query retrieved from the internet."
internet_search.include_domains = [
                                   "https://www.shiksha.com/engineering/colleges/b-tech-colleges-rajasthan",
                                   "https://collegedunia.com/btech/rajasthan-colleges",
                                   "https://engineering.careers360.com/colleges/list-of-be-btech-colleges-in-rajasthan",
                                   "https://www.jagranjosh.com/colleges/btech-colleges-in-rajasthan",
                                   "https://zollege.in/btech/rajasthan-colleges",
                                   "https://www.shiksha.com/university/vivekananda-global-university-jaipur-42525",
                                   # TODO: Add more domains
                                   ]


from langchain_core.pydantic_v1 import BaseModel, Field
class TavilySearchInput(BaseModel):
    query: str = Field(description="Query to search the internet with")
internet_search.args_schema = TavilySearchInput

embd = CohereEmbeddings(model='embed-english-v3.0')

llm = ChatCohere(model="command-r-plus", temperature=0.3)

preamble = """
You are an expert who answers the user's question with the most relevant datasource. you search on internet and provide the answer. you analyize the content and give most relevant
answers
"""

# Prompt template
prompt = ChatPromptTemplate.from_template("{input}")

# Create the ReAct agent
agent = create_cohere_react_agent(
    llm=llm,
    tools=[internet_search],
    prompt=prompt,
)

agent_executor = AgentExecutor(agent=agent, tools=[internet_search], verbose=True)

app = Flask(__name__)

@app.route('/search', methods=['POST'])
def search_colleges():
    data = request.json
    input_query = data.get("input", "")

    response = agent_executor.invoke({
        "input": input_query,
        "preamble": preamble,
    })

    return jsonify({"output": response['output']})

@app.route('/', methods=['GET'])
def home():
    return "API is working"


if __name__ == '__main__':
    app.run(debug=True)

