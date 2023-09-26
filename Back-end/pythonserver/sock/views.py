from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import subprocess


def get_gpu_memory_info():
    command = "nvidia-smi --query-gpu=memory.total,memory.used --format=csv,noheader,nounits"
    output = subprocess.check_output(command.split()).decode().strip()
    memory_info = [x.split(',') for x in output.split('\n')]
    return memory_info


@csrf_exempt
@api_view(['GET'])
def monitor(request):
    memory_info = get_gpu_memory_info()

    total_memory = None
    used_memory = None
    for info in memory_info:
        total_memory, used_memory = map(int, info)
        print(f"Total Memory: {total_memory} MiB")
        print(f"Used Memory: {used_memory} MiB")

    response = {
        'total':total_memory,
        'usage':used_memory
    }

    return JsonResponse(response)
