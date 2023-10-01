import os
import cv2
import uuid
from multiprocessing import Process


def save_image(session_id, source):
    temp_folder = 'temp'
    if not os.path.exists(temp_folder):
        os.makedirs(temp_folder)

    folder_name = session_id
    folder_path = os.path.join(temp_folder, folder_name)
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

    image_filename = str(uuid.uuid4()) + '.jpg'
    image_path = os.path.join(folder_path, image_filename)

    cv2.imwrite(image_path, source)


def process_image(session_id, source):
    p = Process(target=save_image, args=(session_id, source))
    p.start()
