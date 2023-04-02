import numpy as np
import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

heart_data = pd.read_csv('HeartPred.csv')
print(heart_data)

heart_data['target'].value_counts()

X = heart_data.drop(columns='target', axis=1)
Y = heart_data['target']

print(X)

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)
print(X.shape, X_train.shape, X_test.shape)

model = LogisticRegression()
model.fit(X_train,Y_train)


X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(X_train_prediction,Y_train)
print(training_data_accuracy)

X_test_prediction = model.predict(X_test)
test_data_accuracy = accuracy_score(X_test_prediction, Y_test)

print(test_data_accuracy)

def predict(input_data):
    input_data_as_numpy_array= np.asarray(input_data)

    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    prediction = model.predict(input_data_reshaped)
    if (prediction[0]== 0):
      return 'The Person does not have a Heart Disease'
    else:
      return 'The Person has a Heart Disease'

filename = 'heart_prediction.pkl'
pickle.dump(model,open(filename,'wb'))


loaded_model = pickle.load(open('heart_prediction.pkl', 'rb'))

