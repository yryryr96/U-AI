import asyncio
import glob
import json
import os

from channels.generic.websocket import AsyncWebsocketConsumer
import numpy as np

import cv2
import configparser

received_image = None
received_images = {}
sessions = []

config = configparser.ConfigParser()
config.read('config.ini', encoding='UTF8')

folder_root = config.get('SERVER_CONFIG', 'image_folder_root')


async def delete_all_files_in_folder(folder_path):
    # folder_path 내의 모든 파일에 대해
    if not os.path.isdir(folder_path):
        return
    for filename in glob.glob(os.path.join(folder_path, '*')):
        # 파일인 경우 삭제
        if os.path.isfile(filename):
            await asyncio.get_event_loop().run_in_executor(None, os.remove, filename)

    os.rmdir(folder_path)


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
        del received_images[session_id]
        print(sessions)
        # print(os.getcwd())
        # print(os.path.join(folder_root, session_id))
        await delete_all_files_in_folder(os.path.join(folder_root, session_id))

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
