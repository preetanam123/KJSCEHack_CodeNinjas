import cv2
from PIL import Image
import pytesseract
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def report(filename):
    ans = pytesseract.image_to_string(Image.open(filename))
    print(ans)
    l=[]
    for i in range(len(ans)):
        if(ans[i:i+22] == 'Resting Blood Pressure'):
            print(ans[i:i+28])
            l.append(ans[i:i+25])
        if(ans[i:i+19] == 'Fasting Blood Sugar'):
            print(ans[i:i+20])
            l.append(ans[i:i+20]) 
        if(ans[i:i+11] == 'Cholesterol'):
            print(ans[i:i+14])
            l.append(ans[i:i+14])
        if(ans[i:i+10] == 'ECG Result'):
            print(ans[i:i+11])
            l.append(ans[i:i+11])
        if(ans[i:i+14] == 'Max Heart Rate'):
            print(ans[i:i+17])
            l.append(ans[i:i+17])
        if(ans[i:i+11] == "Thalassemia"):
            print(ans[i:i+12])
            l.append(ans[i:i+12])
    print(l)
    return l

report("heart456.png")