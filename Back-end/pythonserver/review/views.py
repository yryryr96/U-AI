from django.http import FileResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from ultralytics import YOLO
import cv2
import numpy as np
import sock.consumer
import time

import os

os.environ["CUDA_DEVICE_ORDER"] = "PCI_BUS_ID"
os.environ["CUDA_VISIBLE_DEVICES"] = "6,7"

source = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
model = YOLO('models/whiteboard_v8l.pt')
# results = AIModel().predict(source,classes=[0,1],)
model.predict(source, classes=[0, 1], )


@api_view(['GET'])
@csrf_exempt
def review(request):
    session_id = request.headers['Session-Id']

    if session_id not in sock.consumer.received_images:
        return HttpResponse(status=500)

    image_data = sock.consumer.received_images[session_id]

    # image_data = sock.consumer.received_image

    # input_image = cv2.imdecode(np.frombuffer(image_data, np.uint8), -1)  # 바이너리 이미지 데이터를 읽습니다.
    # classes=[63, 67]
    # Run inference on the source
    results = model.predict(image_data, device=6, conf=0.15, imgsz=[768, 1280])  # list of Results objects

    annotated_frame = results[0].plot()

    # rectangles = []

    height, width, _ = image_data.shape

    print(height, width)
    output_image = np.ones_like(image_data) * 255
    for xys in results[0].boxes.xyxy:
        print(xys)

        x_min, y_min, x_max, y_max = xys.cpu().numpy()

        x_min = round(x_min)
        y_min = round(y_min)
        y_max = round(y_max)
        x_max = round(x_max)

        print(x_min, y_min, x_max, y_max)

        output_image[y_min:y_max, x_min:x_max] = image_data[y_min:y_max, x_min:x_max]

    output_path = "media/jpg/output.jpg"
    cv2.imwrite(output_path, output_image)
    # 저장된 이미지 파일을 읽어서 HttpResponse로 반환

    image_file = open(output_path, "rb")
    response = FileResponse(image_file)

    return response
