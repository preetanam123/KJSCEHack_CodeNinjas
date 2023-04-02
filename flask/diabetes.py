import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score
import pickle
from sklearn.metrics import confusion_matrix

diabetes_pred = pd.read_csv('diabetes.csv')

print(diabetes_pred.head())

print(diabetes_pred.shape)

print(diabetes_pred['Outcome'].value_counts())

print(diabetes_pred.groupby('Outcome').mean())

X = diabetes_pred.drop(columns = 'Outcome', axis=1)
Y = diabetes_pred['Outcome']

scaler = StandardScaler()
scaler.fit(X)

standard_data = scaler.transform(X)

X = standard_data
Y = diabetes_pred['Outcome']

X_train , X_test , Y_train ,Y_test = train_test_split(X,Y,test_size=0.2,random_state=1)

classifier = svm.SVC(kernel='linear')

classifier.fit(X_train,Y_train)

X_train_prediction = classifier.predict(X_train)
training_data_accuracy = accuracy_score(X_train_prediction,Y_train)

print(training_data_accuracy)
confusion_matrix = confusion_matrix(X_train_prediction,Y_train)
print(confusion_matrix)

def dib(input_data):

  input_data_as_numpy_array = np.asarray(input_data)

  input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)


  std_data = scaler.transform(input_data_reshaped)

  prediction = classifier.predict(std_data)

  if (prediction[0] == 0):
    return ' You are diabetic'
  else:
    return 'You are pre diabetic'


filename = 'diabetes.pkl'
pickle.dump(classifier,open(filename,'wb'))


loaded_model = pickle.load(open('diabetes.pkl', 'rb'))

