# Third-party imports
import openai
from fastapi import FastAPI, Form
from decouple import config
from pymongo.errors import PyMongoError

# Internal imports
from models import insert_conversation  # Import the insert_conversation function from model.py
from utils import send_message, logger

app = FastAPI()
# Set up the OpenAI API client
openai.api_key = config("OPENAI_API_KEY")
whatsapp_number = config("TO_NUMBER")

@app.post("/message")
async def reply(Body: str = Form()):
    # Call the OpenAI API to generate text with GPT-3.5
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=Body,
        max_tokens=200,
        n=1,
        stop=None,
        temperature=0.5,
    )

    # The generated text
    chat_response = response.choices[0].text.strip()

    # Store the conversation in the database
    try:
        insert_conversation(sender=whatsapp_number, message=Body, response=chat_response)
        logger.info("Conversation stored in database")
    except PyMongoError as e:
        logger.error(f"Error storing conversation in database: {e}")

    send_message(whatsapp_number, chat_response)
    return ""
