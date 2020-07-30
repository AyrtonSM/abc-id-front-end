from flask import Flask
from flask_cors import CORS
from flask import request
from server.controller.LunaController import LunaController

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Hello world"

@app.route("/prediction", methods=["GET"])
def prediction():
    lunaController = LunaController()
    result = lunaController.predict(request.values)
    
    if(not result == None):
        return result
    else:
        return {}