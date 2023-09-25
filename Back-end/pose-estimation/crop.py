import cv2
import numpy as np

# Load the input image
input_image = cv2.imread('./image/2018_Shibuya_Crossing.jpg')  # Replace 'input_image.jpg' with your image file

# Define the list of rectangular regions (pairs of upper-left and lower-right coordinates)
rectangles = [((100, 100), (300, 400)),  # Example rectangles, replace with your own
              ((400, 200), (600, 500))]

# Create an empty white image with the same dimensions as the input image
height, width, _ = input_image.shape
output_image = np.ones_like(input_image) * 255  # 255 represents white color

# Iterate through the rectangles and copy the necessary parts from the input image
for (x1, y1), (x2, y2) in rectangles:
    output_image[y1:y2, x1:x2] = input_image[y1:y2, x1:x2]

# Save or display the result
cv2.imwrite('output_image.jpg', output_image)  # Save the result to a file
cv2.imshow("Prediction_with_NN",output_image)
cv2.waitKey(0)  # Wait for a key press to close the window (you can remove this line if not needed)
cv2.destroyAllWindows()  # Close all OpenCV windows (you can remove this line if not needed)