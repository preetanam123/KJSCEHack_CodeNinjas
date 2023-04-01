# import streamlit as st
import pickle
# import mongo

lin_model = pickle.load(open('model1.pkl','rb'))
log_model = pickle.load(open('model2.pkl','rb'))
svc_model = pickle.load(open('model3.pkl','rb'))

def classify(num):
    if num < 0.5:
        return 'Dengue'
    elif num < 1.5:
        return 'Typhoid'
    else :
        return 'Anemia'