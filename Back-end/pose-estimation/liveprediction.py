import cv2
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation
from ultralytics import YOLO
from pydantic import BaseModel

from src.detection_keypoint import DetectKeypoint
from src.classification_keypoint import KeypointClassification

# start webcam
cap = cv2.VideoCapture(0)
cap.set(3, 1280)
cap.set(4, 720)

# model set

# print source resolution
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

print(f"Resolution: {width}x{height}")


dataset_root = './datasets/Motions'

detection_keypoint = DetectKeypoint()
classification_keypoint = KeypointClassification(
    f'{dataset_root}/pose_classification.pt'
)


while cap.isOpened():
    success, frame = cap.read()

    if success:
        results = detection_keypoint(frame)

        # print(results.keypoints)

        results_keypoint = detection_keypoint.get_xy_keypoint(results)

        input_classification = results_keypoint[0:]
        # print('input_classification')
        # print(input_classification)
        results_classification = classification_keypoint(input_classification)
        # print(results_classification)

        ## Visualise Keypoint
        height, width = frame.shape[:2]

        image_draw = results.plot(boxes=False)

        x_min, y_min, x_max, y_max = results.boxes.xyxy[0].cpu().numpy()
        image_draw = cv2.rectangle(
            image_draw,
            (int(x_min), int(y_min)), (int(x_max), int(y_max)),
            (0, 0, 255), 2
        )
        (w, h), _ = cv2.getTextSize(
            results_classification.upper(),
            cv2.FONT_HERSHEY_SIMPLEX, 0.5, 2
        )
        image_draw = cv2.rectangle(
            image_draw,
            (int(x_min), int(y_min) - 20), (int(x_min) + w, int(y_min)),
            (0, 0, 255), -1
        )
        cv2.putText(image_draw,
                    f'{results_classification.upper()}',
                    (int(x_min), int(y_min) - 4),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.5, (255, 255, 255),
                    thickness=2
                    )

        if(results_classification=='sit'):
            print('!!!')
        print(f'Keypoint classification : {results_classification}')
        # Image.fromarray(cv2.cvtColor(image_draw, cv2.COLOR_BGR2RGB))
        annotated_frame = image_draw
        cv2.imshow("YOLOv8 Inference", annotated_frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    else:
        break
cap.release()
