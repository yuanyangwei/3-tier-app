from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app) # Allows your frontend to talk to this API securely

# Read the database URI dynamically from the Docker Compose environment
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/myapp")
client = MongoClient(MONGO_URI)
db = client.get_database()

@app.route('/api/data', methods=['GET'])
def get_data():
    # Insert a dummy record to prove MongoDB lazy-creation works!
    db.tracker.insert_one({"status": "Connected to MongoDB inside Docker!"})
    
    return jsonify({
        "message": "Hello from the Python Backend!",
        "database_status": "Success! Data saved to Mongo automatically."
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
