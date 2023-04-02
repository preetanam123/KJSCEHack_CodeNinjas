import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pickle
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix

plt.rcParams['figure.figsize'] = (5, 5)

brain_data = pd.read_csv('healthcare-dataset-stroke-data.csv')

print(brain_data)

brain_data['bmi'].fillna(brain_data['bmi'].mean(),inplace=True)

print(brain_data.isnull().sum())



X=brain_data.drop('stroke',axis=1)
Y=brain_data['stroke']

print(X.head())

enc=LabelEncoder()
smoking_status=enc.fit_transform(brain_data['smoking_status'])

brain_data['smoking_status']=smoking_status

print(brain_data.head())


X=brain_data.drop('stroke',axis=1)
Y = brain_data['stroke']

X_train, X_test, Y_train, Y_test=train_test_split(X,Y,test_size=0.2,random_state=10)
print(X_train)

std=StandardScaler()

X_train_std=std.fit_transform(X_train)
X_test_std=std.transform(X_test)


dt=DecisionTreeClassifier()
dt.fit(X_train_std,Y_train)

Y_pred=dt.predict(X_test_std)

print(Y_pred)

ac_dt=accuracy_score(Y_test,Y_pred)
print(ac_dt)

def predict(input_data): 
    input_data_as_numpy_array = np.asarray(input_data)

    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)


    std_data = std.transform(input_data_reshaped)

    prediction = dt.predict(std_data)
    print(prediction)
    if (prediction[0] == 0):
      
      
      return 'You might suffer from brainstroke'
    else:
      
      return 'You are safe !!'


filename = 'brainstroke.pkl'
pickle.dump(dt,open(filename,'wb'))


loaded_model = pickle.load(open('brainstroke.pkl', 'rb'))

