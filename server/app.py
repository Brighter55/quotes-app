from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from dotenv import load_dotenv


app = Flask(__name__)
CORS(app)
# load key from .env file in root directory
current_dir = os.path.dirname(os.path.abspath(__file__))
dotenv_path = os.path.join(current_dir, "..", ".env")
load_dotenv(dotenv_path)
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("POSTGRESDB_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
class User(db.Model):
    __tablename__ = "quotes"
    id = db.Column(db.Integer, primary_key=True)
    quote = db.Column(db.String(500), nullable=False)
    author = db.Column(db.String(255))

with app.app_context():
    db.create_all()

@app.route("/api/quotes")
def send_quotes():
    #get data from postgresDB
    User_objects = db.session.execute(db.select(User)).scalars().all()
    quotes = []
    for quote in User_objects:
        quotes.append({"quote": quote.quote, "author": quote.author})
    return jsonify(quotes) # return it to React



if __name__ == "__main__":
    app.run(debug=True)
