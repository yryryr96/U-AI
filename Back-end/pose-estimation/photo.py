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
source = '2567-6-21.jpg'

# Run inference on the source
results = model.predict(source, classes=[0, 1])  # list of Results objects

annotated_frame = results[0].plot()

cv2.imshow("YOLOv8 Inference", annotated_frame)
print(results)
cv2.waitKey(0)
cv2.destroyAllWindows()
