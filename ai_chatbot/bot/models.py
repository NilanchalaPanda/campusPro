from pymongo import MongoClient
from decouple import config

# MongoDB connection URL
mongo_url = f"mongodb+srv://{config('DB_USER')}:{config('DB_PASSWORD')}@cluster0.j1yq5.mongodb.net/CampusPro?retryWrites=true&w=majority&appName=Cluster0"

# Create a MongoClient
client = MongoClient(mongo_url)

# Access the database
db = client.CampusPro

# Define the collection
conversations = db.conversations

# Example of inserting a document into the collection
def insert_conversation(sender, message, response):
    conversation = {
        "sender": sender,
        "message": message,
        "response": response
    }
    conversations.insert_one(conversation)

# Example of finding documents
def find_conversations():
    return list(conversations.find())

# Example usage
if __name__ == "__main__":
    # Insert a sample conversation
    insert_conversation("user1", "Hello", "Hi there!")

    # Retrieve and print all conversations
    all_conversations = find_conversations()
    print(all_conversations)
