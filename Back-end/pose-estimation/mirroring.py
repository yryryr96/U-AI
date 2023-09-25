from PIL import Image
import os

# Define the input and output folders
input_folder = './datasets/Motions/evacuatefire'  # Replace with the path to your input folder containing images
output_folder = './datasets/Motions/evacuatefire/mirror'  # Replace with the path to your output folder

# Create the output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Get a list of all image files in the input folder
image_files = [f for f in os.listdir(input_folder) if f.endswith(('.jpg', '.jpeg', '.png', '.gif'))]

# Loop through each image file and create a mirrored version
for image_file in image_files:
    # Open the image
    image_path = os.path.join(input_folder, image_file)
    image = Image.open(image_path)

    # Mirror the image horizontally
    mirrored_image = image.transpose(Image.FLIP_LEFT_RIGHT)

    # Save the mirrored image to the output folder
    output_path = os.path.join(output_folder, f'mirrored_{image_file}')
    mirrored_image.save(output_path)

print("Mirroring complete. Mirrored images are saved in the output folder.")