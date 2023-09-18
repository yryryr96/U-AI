from django.http import FileResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from ultralytics import YOLO
import cv2
import numpy as np
import time
@api_view(['POST'])
@csrf_exempt
def review(request):
    upload_file = request.FILES['file']
    image_data = upload_file.read() # .read() 함수를 통해 이미지를 바이트 형식으로 읽어온다.

    #Load a pretrained YOLOv8n model
    model = YOLO('yolov8n.pt')

    input_image = cv2.imdecode(np.frombuffer(image_data, np.uint8), -1)  # 바이너리 이미지 데이터를 읽습니다.
    # classes=[63, 67]
    # Run inference on the source
    results = model.predict(input_image)  # list of Results objects

    annotated_frame = results[0].plot()

    # rectangles = []

    height, width, _ = input_image.shape
    output_image = np.ones_like(input_image) * 255
    for xys in results[0].boxes.xyxy:
        print(xys)

        x_min, y_min, x_max, y_max = xys.cpu().numpy()

        x_min = round(x_min)
        y_min = round(y_min)
        y_max = round(y_max)
        x_max = round(x_max)

        print(x_min, y_min, x_max, y_max)

        output_image[y_min:y_max, x_min:x_max] = input_image[y_min:y_max, x_min:x_max]

    output_path = "media/jpg/output.jpg"
    cv2.imwrite(output_path, output_image)
    # 저장된 이미지 파일을 읽어서 HttpResponse로 반환

    image_file = open(output_path, "rb")
    response = FileResponse(image_file)

    return response

