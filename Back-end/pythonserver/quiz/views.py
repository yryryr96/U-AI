import cv2
from ultralytics import YOLO
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.cache import cache

def get_cached_yolo_model():
    yolo_model = cache.get('yolo_model')
    if yolo_model is None:
        yolo_model = YOLO('yolov8n.pt')
        # 모델을 캐시에 저장, None은 캐시가 만료되지 않음을 의미
        cache.set('yolo_model', yolo_model, None)
    return yolo_model
@csrf_exempt
def ox_quiz(request):
    if request.method == 'GET':
        # 욜로 모델 로드
        model = YOLO('yolov8n.pt')
        # 판단할 이미지 소스 경로
        source = 'media/jpg/단체.jpg'

        # Run inference on the source
        results = model.predict(source,classes=[0,1])   # list of Results objects

        annotated_frame = results[0].plot()

        image = cv2.imread(source)  # 이미지 파일 경로를 지정하세요

        for result in results:
            for i in range(results[0].boxes.xyxy.shape[0]):
                x = (result.boxes.xyxy[i][0].item() + result.boxes.xyxy[i][2].item()) / 2
                y = (result.boxes.xyxy[i][1].item() + result.boxes.xyxy[i][3].item()) / 2
                cv2.circle(image, (int(x), int(y)), 20, (0, 255, 255), -1)  # 빨간색 원 그리기 (5는 원의 반지름, (0, 0, 255)는 BGR 색상)

        cv2.imshow("YOLOv8 Inference", image)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

        return JsonResponse({'result' : 1, 'left' : 10, 'right' : 11})
    else:
        return JsonResponse({'error': 'Invalid request.'}, status=400)