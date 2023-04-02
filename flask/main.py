from flask import Flask,request,jsonify
from flask_cors import CORS
import json
import pandas as pd
import predict
import pickle
import numpy as np
from io import BytesIO
import ocr4
import heart_predict
import diabetes_predict
import Brainstroke
import diabetesocr
import heartocr

lin_model = pickle.load(open('model1.pkl','rb'))
log_model = pickle.load(open('model2.pkl','rb'))
svc_model = pickle.load(open('model3.pkl','rb'))

app = Flask(__name__)
{
    CORS(app)
}

@app.route('/')
def hellow_world():
    return "<p>Hello, world </p>"

@app.route('/rec', methods=['POST'])    
def rec():
    jsonData = request.get_json()
    l=[]
    l.append(jsonData['value1'])
    l.append(jsonData['value2'])
    l.append(jsonData['value3'])
    l.append(jsonData['value4'])
    arr = np.array(l, dtype = float)
    print(arr)

    arr2 = arr.reshape(1,-1).astype(np.float32)
    # arr3 = arr2.astype(np.float)
    print(arr2)

    ans = predict.classify(log_model.predict(arr2))
    print(log_model.predict(arr2))
    return ans

@app.route('/diabetes', methods=['POST'])
def diabetes():
    jsonData = request.get_json()
    l=[]
    l.append(jsonData['glucose'])
    l.append(jsonData['bp'])
    l.append(jsonData['st'])
    l.append(jsonData['insulin'])
    l.append(jsonData['bmi'])
    l.append(jsonData['dpf'])

    arr = np.array(l, dtype = float)
    print(arr)

    arr2 = arr.reshape(1,-1).astype(np.float32)
    # arr3 = arr2.astype(np.float)
    print(arr2)

    ans = diabetes_predict.dib(arr2)
    print(ans)
    return ans
@app.route('/heart', methods=['POST'])
def heart():
    jsonData = request.get_json()
    l=[]
    l.append(jsonData['cp'])
    l.append(jsonData['rbs'])
    l.append(jsonData['cholestrol'])
    l.append(jsonData['fbs'])
    l.append(jsonData['ecg'])
    l.append(jsonData['mhr'])
    l.append(jsonData['thala'])

    arr = np.array(l, dtype = float)
    print(arr)

    arr2 = arr.reshape(1,-1).astype(np.float32)
    # arr3 = arr2.astype(np.float)
    print(arr2)

    ans = heart_predict.predict(arr2)
    print(ans)
    return ans
    
@app.route('/brain', methods=['POST'])
def brain():
    jsonData = request.get_json()
    l=[]
    l.append(jsonData['hypert'])
    l.append(jsonData['hd'])
    l.append(jsonData['agl'])
    l.append(jsonData['bmi'])
    l.append(jsonData['smoking'])
    arr = np.array(l, dtype = float)
    print(arr)

    arr2 = arr.reshape(1,-1).astype(np.float32)
    # arr3 = arr2.astype(np.float)
    print(arr2)
    ans = Brainstroke.predict(arr2)
    print(ans)
    return ans

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file_from_react']
    filename = file.filename
    output = ocr4.report(filename)
    return output

@app.route('/dupload', methods=['POST'])
def dupload():
    file = request.files['file_from_react']
    filename = file.filename
    output = diabetesocr.report(filename)
    return output

@app.route('/hupload', methods=['POST'])
def hupload():
    file = request.files['file_from_react']
    filename = file.filename
    output = heartocr.report(filename)
    return output



if __name__=='__main__':
    app.run(port = 8000, debug = True)