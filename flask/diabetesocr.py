# from pdf2image import convert_from_path
import cv2
from PIL import Image
import pytesseract
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# pdfs = r"report.pdf"
# pages = convert_from_path(pdfs, 350)

# i = 1
# for page in pages:
#     image_name = "Page_" + str(i) + ".jpg"  
#     page.save(image_name, "JPEG")
#     i = i+1  

def report(filename):
    ans = pytesseract.image_to_string(Image.open(filename))
    # print(ans)
    l=[]
    for i in range(len(ans)):
        if(ans[i:i+7] == 'Glucose'):
            print(ans[i:i+10])
            l.append(ans[i:i+10])
        if(ans[i:i+14] == 'Blood Pressure'):
            print(ans[i:i+16])
            l.append(ans[i:i+16])
        if(ans[i:i+14] == 'Skin Thickness'):
            print(ans[i:i+16])
            l.append(ans[i:i+16])
        if(ans[i:i+7] == 'Insulin'):
            print(ans[i:i+9])
            l.append(ans[i:i+9])
        if(ans[i:i+3] == 'BMI'):
            print(ans[i:i+6])
            l.append(ans[i:i+6])
        if(ans[i:i+24] == "DiabetesPedigreeFucntion"):
            print(ans[i:i+28])
            l.append(ans[i:i+28])
    print(l)
    return l

# report('diabetes2.png')
