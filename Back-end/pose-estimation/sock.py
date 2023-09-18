import socket
import cv2
import numpy as np
from pydantic import BaseModel
import threading

from ultralytics import YOLO

# Create a socket server to continuously receive and draw images
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('0.0.0.0', 8888))  # Bind to the same port as the Java sender
server_socket.listen(1)

print("Waiting for a connection...")
client_socket, addr = server_socket.accept()
print("Accepted connection from", addr)

model = YOLO('yolov8n-pose.pt')


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

while True:
    # Receive the image data
    image_data = client_socket.recv(100000)  # You may need to adjust the buffer size

    # Deserialize the received data into a NumPy array
    image_array = np.frombuffer(image_data, dtype=np.uint8)
    # print(image_array.shape)

    # Decode the image (assuming it's in JPEG format)
    received_image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)
    if(received_image is not None):
        results = model.predict(received_image, save=False, conf=0.8, verbose=False)
        annoated_frame = annotated_frame = results[0].plot()

        tensor_data = results[0].keypoints[0].data.cpu().numpy()[0]

        tensor_data_shape = tensor_data.shape
        print(tensor_data_shape)
        if tensor_data_shape[0] == 17:
            right_shoulder_x, right_shoulder_y, right_shoulder_z = tensor_data[get_keypoint.RIGHT_SHOULDER]

            text = f'value : ({right_shoulder_x}, {right_shoulder_y}, {right_shoulder_z})'
            print(text)
            org = (0, 20)
            font = cv2.FONT_HERSHEY_SIMPLEX
            cv2.putText(annotated_frame, text, org, font, 1, (255, 0, 0), 2)

        cv2.imshow("YOLOv8 Inference", annotated_frame)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cv2.destroyAllWindows()
client_socket.close()
