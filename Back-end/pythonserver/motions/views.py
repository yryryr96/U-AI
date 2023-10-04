from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ultralytics import YOLO
from sock.image_process import process_image

import cv2

import sock.consumer
from src.classification_keypoint import KeypointClassification
from src.detection_keypoint import DetectKeypoint

import time

import json

# Create your views here.

dataset_root = './models'

detection_keypoint = DetectKeypoint()
classification_keypoint = KeypointClassification(
    f'{dataset_root}/pose_classification.pt'
)

factor = 0.5


@api_view(['POST'])
@csrf_exempt
def recognize_motion(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    target = body['targetPose']
    child = body['numOfChild']
    limit = body['limit']

    print('check')
    print(child, factor*child)

    start_time = time.time()  # 현재 시간 기록
    frame = 0

    while True:
        # print('?????')
        session_id = request.headers['Session-Id']

        if session_id not in sock.consumer.received_images:
            response = {
                'result': -1
            }

            return JsonResponse(response)

        source = sock.consumer.received_images[session_id]
        #source = sock.consumer.received_image
        if source is not None:
            # print('??')
            res = {}
            results = detection_keypoint(source)

            # print(results.keypoints)
            idx = 0

            # print(results_classification)

            ## Visualise Keypoint
            height, width = source.shape[:2]

            image_draw = results.plot(boxes=False)
            for xys in results.boxes.xyxy:
                x_min, y_min, x_max, y_max = xys.cpu().numpy()

                results_keypoint = detection_keypoint.get_xy_keypoint(results, idx)

                input_classification = results_keypoint[0:]
                # print('input_classification')
                # print(input_classification)
                results_classification = classification_keypoint(input_classification)

                # image_draw = cv2.rectangle(
                #     image_draw,
                #     (int(x_min), int(y_min)), (int(x_max), int(y_max)),
                #     (0, 0, 255), 2
                # )
                # (w, h), _ = cv2.getTextSize(
                #     results_classification.upper(),
                #     cv2.FONT_HERSHEY_SIMPLEX, 0.5, 2
                # )
                # image_draw = cv2.rectangle(
                #     image_draw,
                #     (int(x_min), int(y_min) - 20), (int(x_min) + w, int(y_min)),
                #     (0, 0, 255), -1
                # )
                # cv2.putText(image_draw,
                #             f'{results_classification.upper()}',
                #             (int(x_min), int(y_min) - 4),
                #             cv2.FONT_HERSHEY_SIMPLEX,
                #             0.5, (255, 255, 255),
                #             thickness=2
                #             )
                idx += 1

                # print(f'Keypoint classification : {results_classification}')

                if f'{results_classification}' not in res:
                    res[f'{results_classification}'] = 1
                else:
                    res[f'{results_classification}'] = res[f'{results_classification}'] + 1

            frame += 1

            annotated_frame = image_draw
            # print(res)
            # cv2.imshow("YOLOv8 Inference", annotated_frame)
            if target in res:
                if res[target] >= factor * child:
                    response = {
                        'result': res[target],
                        'target': target
                    }
                    current_time = time.time()  # 현재 시간 갱신
                    elapsed_time = current_time - start_time  # 경과한 시간 계산
                    print(elapsed_time)

                    process_image(session_id,source)

                    return JsonResponse(response)
            cv2.waitKey(10)

        current_time = time.time()  # 현재 시간 갱신
        elapsed_time = current_time - start_time  # 경과한 시간 계산

        if elapsed_time >= limit:  # 경과한 시간이 5초 이상인 경우 반복문 종료
            break
    response = {
        'result': -1,
    }
    print(frame)

    return JsonResponse(response)
