import cv2
import numpy as np
from PIL import Image
from src.detection_keypoint import DetectKeypoint
from src.classification_keypoint import KeypointClassification

dataset_root = './datasets/Motions'

detection_keypoint = DetectKeypoint()
classification_keypoint = KeypointClassification(
    f'{dataset_root}/pose_classification.pt'
)

image = cv2.imread('./image/test5.jpg')
results = detection_keypoint(image)

print(results.keypoints)


results_keypoint = detection_keypoint.get_xy_keypoint(results)

input_classification = results_keypoint[10:]
print('input_classification')
print(input_classification)
results_classification = classification_keypoint(input_classification)
print(results_classification)

## Visualise Keypoint
height, width = image.shape[:2]

image_draw = results.plot(boxes=False)

x_min, y_min, x_max, y_max = results.boxes.xyxy[0].cpu().numpy()
image_draw = cv2.rectangle(
                image_draw,
                (int(x_min), int(y_min)),(int(x_max), int(y_max)),
                (0,0,255), 2
            )
(w, h), _ = cv2.getTextSize(
        results_classification.upper(),
        cv2.FONT_HERSHEY_SIMPLEX, 0.5, 2
    )
image_draw = cv2.rectangle(
                image_draw,
                (int(x_min), int(y_min)-20),(int(x_min)+w, int(y_min)),
                (0,0,255), -1
            )
cv2.putText(image_draw,
            f'{results_classification.upper()}',
            (int(x_min), int(y_min)-4),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.5, (255, 255, 255),
            thickness=2
        )

print(f'Keypoint classification : {results_classification}')
# Image.fromarray(cv2.cvtColor(image_draw, cv2.COLOR_BGR2RGB))
annotated_frame = image_draw

cv2.imshow("prediction",annotated_frame)
cv2.waitKey(0)
cv2.destroyAllWindows()
