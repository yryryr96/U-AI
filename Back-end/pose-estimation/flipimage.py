import os
from PIL import Image


def flip_images(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg") or filename.endswith(".png"):  # 이미지 확장자에 따라 필요한 확장자를 추가하거나 수정하세요.
            img_path = os.path.join(folder_path, filename)
            img = Image.open(img_path)
            flipped_img = img.transpose(Image.FLIP_LEFT_RIGHT)  # 수직 대칭. FLIP_TOP_BOTTOM을 사용하여 수평 대칭 가능.

            flipped_img.save(os.path.join(folder_path, "flipped_" + filename))  # 변환된 이미지 저장


flip_images('C:/Users/SSAFY/AppData/Roaming/PotPlayer64/Capture/evacuatefire')