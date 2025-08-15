from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv
from pathlib import Path

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] =

@app.route("/api/quotes")
def send_quotes():
    #get data from postgresDB

    return jsonify() # return it to React
