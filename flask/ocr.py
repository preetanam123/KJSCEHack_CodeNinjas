from pdf2image import convert_from_path
import cv2
from PIL import Image
import pytesseract
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def report(filename): 
    pdfs = filename
    pages = convert_from_path(pdfs, 350)

    i = 1
    for page in pages:
        image_name = "Page_" + str(i) + ".jpg"  
        page.save(image_name, "JPEG")
        i = i+1  


    ans = pytesseract.image_to_string(Image.open('Page_1.jpg'))
    l=[]
    # print(ans)
    for i in range(len(ans)):
        if(ans[i:i+10] == 'Hemoglobin'):
            print(ans[i:i+16])
            l.append(ans[i:i+16])
        if(ans[i:i+3] == 'RBC'):
            print(ans[i:i+8])
            l.append(ans[i:i+8])
        if(ans[i:i+7] == 'Platlet'):
            print(ans[i:i+12])
            l.append(ans[i:i+12])
        if(ans[i:i+3] == 'LYM'):
            print(ans[i:i+9])
            l.append(ans[i:i+9])
    return l

report("report.pdf")
