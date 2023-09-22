import json
from channels.generic.websocket import AsyncWebsocketConsumer
import numpy as np

import cv2

received_image = None
class CustomConsumer(AsyncWebsocketConsumer):


    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def websocket_receive(self, message):
        global received_image
        # print(message)
        # Access the received message from text_data
        # if isinstance(text_data, bytes):
        if "text" not in message:
            image_array = np.frombuffer(message['bytes'], dtype=np.uint8)
            received_image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)
            # if received_image is not None:
            #     cv2.imshow("show", received_image)
            # cv2.waitKey(1)
