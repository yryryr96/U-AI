import cv2
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation
from ultralytics import YOLO
from pydantic import BaseModel

# start webcam
cap = cv2.VideoCapture(0)
cap.set(3, 1280)
cap.set(4, 720)

# model set
model = YOLO('yolov8n-pose.pt')

# print source resolution
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

print(f"Resolution: {width}x{height}")


class GetKeypoint(BaseModel):
    NOSE: int = 0
    LEFT_EYE: int = 1
    RIGHT_EYE: int = 2
    LEFT_EAR: int = 3
    RIGHT_EAR: int = 4
    LEFT_SHOULDER: int = 5
    RIGHT_SHOULDER: int = 6
    LEFT_ELBOW: int = 7
    RIGHT_ELBOW: int = 8
    LEFT_WRIST: int = 9
    RIGHT_WRIST: int = 10
    LEFT_HIP: int = 11
    RIGHT_HIP: int = 12
    LEFT_KNEE: int = 13
    RIGHT_KNEE: int = 14
    LEFT_ANKLE: int = 15
    RIGHT_ANKLE: int = 16


get_keypoint = GetKeypoint()

while cap.isOpened():
    success, frame = cap.read()

    if success:
        results = model.predict(frame, save=False, conf=0.8)

        annotated_frame = results[0].plot()

        # print(results[0].orig_img.shape)
        # print(results[0].keypoints[0])

        tensor_data = results[0].keypoints[0].data.cpu().numpy()[0]
        # tensor_data = results[0].keypoints.xyn.cpu().numpy()[0]

        tensor_data_shape = tensor_data.shape
        print(tensor_data_shape)
        if tensor_data_shape[0] == 17:
            right_shoulder_x, right_shoulder_y, right_shoulder_z = tensor_data[get_keypoint.RIGHT_SHOULDER]

            text = f'value : ({right_shoulder_x}, {right_shoulder_y}, {right_shoulder_z})'
            print(text)
            org = (0, 20)
            font = cv2.FONT_HERSHEY_SIMPLEX
            cv2.putText(annotated_frame, text, org, font, 1, (255, 0, 0), 2)

        # Extract x, y, z coordinates
        # x = tensor_data[0, :, 0]
        # y = tensor_data[0, :, 1]
        # z = tensor_data[0, :, 2]

        # Create a 3D scatter plot
        cv2.imshow("YOLOv8 Inference", annotated_frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    else:
        break
cap.release()
