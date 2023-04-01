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
        if(ans[i:i+11] == 'Haemoglobin'):
            print(ans[i:i+17])
            l.append(ans[i:i+17])
        if(ans[i:i+3] == 'RBC'):
            print(ans[i:i+8])
            l.append(ans[i:i+8])
        if(ans[i:i+8] == 'Platelet'):
            print(ans[i:i+13])
            l.append(ans[i:i+13])
        if(ans[i:i+3] == 'LYM'):
            print(ans[i:i+9])
            l.append(ans[i:i+9])
    print(l)
    return l

# report('Page_2.png')
