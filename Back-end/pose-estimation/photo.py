import cv2
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation
from ultralytics import YOLO
from pydantic import BaseModel

from ultralytics import YOLO

# Load a pretrained YOLOv8n model
model = YOLO('yolov8n.pt')

# Define path to the image file
source = './image/test5.jpg'

input_image = cv2.imread(source)

# Run inference on the source
results = model.predict(input_image, classes=[0, 1])  # list of Results objects

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


cv2.imshow("YOLOv8 Inference", output_image)
print(results)
cv2.waitKey(0)
cv2.destroyAllWindows()
