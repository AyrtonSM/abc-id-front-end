from flask import Flask
from flask_cors import CORS
from flask import request
from controller.LunaController import LunaController

app = Flask(__name__)
CORS(app)

response_obj = {
    "code": 0,
    "message": None
}


@app.route("/")
def index():
    return "Hello world"


@app.route("/prediction", methods=["GET"])
def prediction():

    lunaController = LunaController()
    result = lunaController.predict(request.values)

    if (result):
        response_obj["code"] = 200
        response_obj["message"] = result
        print(response_obj)
        return response_obj

    response_obj["code"] = 500
    response_obj["message"] = "Sorry, something bad happened with the server"

    return response_obj
