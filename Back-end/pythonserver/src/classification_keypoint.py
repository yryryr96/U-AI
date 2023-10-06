import torch
import torch.nn as nn

dataset_root = './models'

class NeuralNet(nn.Module):
    def __init__(
        self, 
        input_size = 34,
        hidden_size = 2048,
        num_classes = 3
    ):
        super(NeuralNet, self).__init__()
        self.l1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.l2 = nn.Linear(hidden_size, num_classes)
        
    def forward(self, x):
        out = self.l1(x)
        out = self.relu(out)
        out = self.l2(out)
        return out
    
class KeypointClassification:
    def __init__(self, path_model):
        self.path_model = path_model
        self.classes = ['evacuatefire', 'sit', 'stand']
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.load_model()

    def load_model(self):
        self.model = NeuralNet()
        self.model.load_state_dict(
            torch.load(self.path_model, map_location=self.device)
        )
    def __call__(self, input_keypoint):
        if not type(input_keypoint) == torch.Tensor:
            input_keypoint = torch.tensor(
                input_keypoint, dtype=torch.float32
            )
        out = self.model(input_keypoint)
        _, predict = torch.max(out, -1)
        label_predict = self.classes[predict]
        return label_predict

if __name__ == '__main__':
    keypoint_classification = KeypointClassification(
        path_model=f'{dataset_root}/pose_classification.pt'
    )
    dummy_input = torch.randn(23)
    classification = keypoint_classification(dummy_input)
    # print(classification)



    