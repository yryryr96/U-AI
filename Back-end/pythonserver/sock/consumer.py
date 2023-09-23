import json
from channels.generic.websocket import AsyncWebsocketConsumer
import numpy as np

import cv2

received_image = None
received_images = {}
sessions = []
class CustomConsumer(AsyncWebsocketConsumer):


    async def connect(self):
        headers = dict(self.scope['headers'])  # Get the headers.

        # Headers are in byte format, so they need to be decoded.
        session_id = headers[b'session-id'].decode('utf-8') if b'session-id' in headers else None
        sessions.append(session_id)
        print(sessions)
        received_images[session_id] = None
        await self.accept()

    async def disconnect(self, close_code):
        headers = dict(self.scope['headers'])  # Get the headers.

        # Headers are in byte format, so they need to be decoded.
        session_id = headers[b'session-id'].decode('utf-8') if b'session-id' in headers else None
        sessions.remove(session_id)
        received_images[session_id] = None
        print(sessions)

        pass

    async def websocket_receive(self, message):
        global received_image
        global received_images
        # print(message)
        # Access the received message from text_data
        # if isinstance(text_data, bytes):
        if "text" not in message:
            image_array = np.frombuffer(message['bytes'], dtype=np.uint8)
            received_image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

            headers = dict(self.scope['headers'])  # Get the headers.

            # Headers are in byte format, so they need to be decoded.
            session_id = headers[b'session-id'].decode('utf-8') if b'session-id' in headers else None

            received_images[session_id] = received_image
            # if received_image is not None:
            #     cv2.imshow("show", received_image)
            # cv2.waitKey(1)
        # else:
        #     print(message)
