########################
# Server
import base64

from PIL import Image
import asyncio  # 웹 소켓 모듈을 선언한다.
import websockets  # 클라이언트 접속이 되면 호출된다.
from io import BytesIO
import numpy as np

import cv2

async def accept(websocket, path):
    while True:
        image_data = await websocket.recv()
        # print(type(image_data))
        if isinstance(image_data, bytes):
            image_array = np.frombuffer(image_data, dtype=np.uint8)
            received_image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)
            if (received_image is not None):
                cv2.imshow("show",received_image)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
        # await websocket.send("ws_srv send data = " + data);  # 클라인언트로 echo를 붙여서 재 전송한다.
cv2.destroyAllWindows()

# "0.0.0.0" => 서버 pc에 ip 주소를 입력해준다.
# 0000 => 서버 pc에 포트를 입력 해 준다.
start_server = websockets.serve(accept, "127.0.0.1", 8888);

# 비동기로 서버를 대기한다.
asyncio.get_event_loop().run_until_complete(start_server);
asyncio.get_event_loop().run_forever();