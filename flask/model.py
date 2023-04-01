import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression,LogisticRegression
from sklearn.svm import SVC
import pickle

df = pd.read_csv('iris.csv')


disease_mappings = {'Dengue':0,'Typhoid':1,'Anemia':2}
df["Disease"] = df["Disease"].map(disease_mappings)


X = df[['lymphocytes', 'platelets','RBCs', 'haemoglobin']].values
Y = df[['Disease']].values






X_train,X_test,Y_train,Y_test = train_test_split(X,Y)

model1 = LinearRegression()
model2 = LogisticRegression()
model3 = SVC()

linear_reg = model1.fit(X_train,Y_train)
log_reg = model2.fit(X_train,Y_train)
svc = model3.fit(X_train,Y_train)

print(linear_reg.score(X_test,Y_test))
print(log_reg.score(X_test,Y_test))
print(svc.score(X_test,Y_test))

pickle.dump(linear_reg,open('model1.pkl','wb'))
pickle.dump(log_reg,open('model2.pkl','wb'))
pickle.dump(svc,open('model3.pkl','wb'))


