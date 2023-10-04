import os
from PIL import Image


def process_images(src_folder, dest_folder, target_rgb, tolerance=60):
    for filename in os.listdir(src_folder):
        if filename.endswith(".png") or filename.endswith(".jpg"):
            img = Image.open(os.path.join(src_folder, filename)).convert("RGBA")
            datas = img.getdata()

            newData = []
            for item in datas:
                # change all white (also shades of whites)
                # pixels to yellow
                if all([abs(item[i] - target_rgb[i]) <= tolerance for i in range(3)]):
                    newData.append((255, 255, 255, 0))  # make it transparent (also shades of transparency)
                else:
                    newData.append(item)

            img.putdata(newData)

            if not os.path.exists(dest_folder):
                os.makedirs(dest_folder)

            img.save(os.path.join(dest_folder, filename), "PNG")


# usage example
process_images('C:/Users/SSAFY/Desktop/ㅍ0ㅐㄴ더/processed', 'C:/Users/SSAFY/Desktop/ㅍ0ㅐㄴ더/processed/trans', (25, 167, 60))