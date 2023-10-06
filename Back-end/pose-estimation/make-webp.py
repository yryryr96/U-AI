import os
from PIL import Image


def process_images_and_create_webp(src_folder, target_rgb, tolerance=5, duration=100):
    images = []
    idx = 0
    size = len(os.listdir(src_folder))
    for filename in sorted(os.listdir(src_folder)):
        print(f'{idx} / {size}')
        idx += 1
        if filename.endswith(".png") or filename.endswith(".jpg"):
            img = Image.open(os.path.join(src_folder, filename)).convert("RGBA")

            # Crop the top part of the image (100 pixels)
            width, height = img.size
            img = img.crop((0, 100, width, height))

            datas = img.getdata()

            newData = []
            for item in datas:
                if all([abs(item[i] - target_rgb[i]) <= tolerance for i in range(3)]):
                    newData.append((item[0], item[1], item[2], 0))
                else:
                    newData.append(item)

            img.putdata(newData)

            images.append(img)

    if images:
        images[0].save(os.path.join(src_folder, 'output.webp'),
                       save_all=True,
                       append_images=images[1:],
                       duration=duration,
                       loop=0,
                       format='WEBP')


# usage example
process_images_and_create_webp('C:/Users/plus1/AppData/Roaming/PotPlayer64/Capture/processed/Capture', (25, 167, 60), 60, 20)
