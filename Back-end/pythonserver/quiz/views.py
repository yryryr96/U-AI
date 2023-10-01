import cv2
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ultralytics import YOLO
import sock.consumer
from sock.image_process import process_image


# def get_cached_yolo_model():
#     yolo_model = cache.get('yolo_model')
#     if yolo_model is None:
#         yolo_model = YOLO('yolov8n.pt')
#         # 모델을 캐시에 저장, None은 캐시가 만료되지 않음을 의미
#         cache.set('yolo_model', yolo_model, None)
#     return yolo_model

source = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
model = YOLO('yolov8n.pt')
# results = AIModel().predict(source,classes=[0,1],)

model.predict(source,classes=[0,1],)

@csrf_exempt
@api_view(['GET'])
def ox_quiz(request):
    # 욜로 모델 로드
    # 판단할 이미지 소스 경로
    session_id = request.headers['Session-Id']

    if session_id not in sock.consumer.received_images:
        response = {
            'result': -1,
            'left': 0,
            'right': 0,
        }

        return JsonResponse(response)

    source = sock.consumer.received_images[session_id]

    process_image(session_id,source)

    # Run inference on the source
    results = model.predict(source,classes=[0,1],)

    # annotated_frame = results[0].plot() # 이부분은 전달된 사진 출력해볼 때 사용
    image = source
    # 화면 중앙 x 좌표
    image_x = image.shape[1] / 2
    persons = []
    # print(results)
    for result in results:
        for i in range(results[0].boxes.xyxy.shape[0]):
            x = int((result.boxes.xyxy[i][0].item() + result.boxes.xyxy[i][2].item()) / 2)
            y = int((result.boxes.xyxy[i][1].item() + result.boxes.xyxy[i][3].item()) / 2)
            persons.append( (x, y) )
            # cv2.circle(image, (x, y), 20, (0, 255, 255), -1)  # 빨간색 원 그리기 (5는 원의 반지름, (0, 0, 255)는 BGR 색상)

    # cv2.line(image, ( int(image.shape[1] / 2), 0), ( int(image.shape[1] / 2), image.shape[0]), (0, 0, 255), thickness=5)
    left_side_person_cnt, right_side_person_cnt = 0, 0
    for person in persons:
        person_x = person[0]

        if person_x < image_x:
            left_side_person_cnt += 1
        elif person_x > image_x:
            right_side_person_cnt += 1

    print("left_side_person_cnt = ", left_side_person_cnt)
    print("right_side_person_cnt = ", right_side_person_cnt)

    # cv2.imshow("YOLOv8 Inference", image)
    # # cv2.imshow("YOLOv8 Inference", annotated_frame)
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()

    response = {
        'result' : 1,
        'left' : right_side_person_cnt,
        'right' : left_side_person_cnt,
    }
    return JsonResponse(response)
