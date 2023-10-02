import mimetypes

from django.utils.encoding import smart_str
from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponse, FileResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
import subprocess
import configparser
import os

import sock.consumer

config = configparser.ConfigParser()
config.read('config.ini', encoding='UTF8')

folder_root = config.get('SERVER_CONFIG', 'image_folder_root')


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
        'total': total_memory,
        'usage': used_memory
    }

    return JsonResponse(response)


@csrf_exempt
@api_view(['GET'])
def imagelist(request):
    session_id = request.headers['Session-Id']

    if session_id not in sock.consumer.received_images:
        return HttpResponse(status=500)

    file_list = []
    for root, dirs, files in os.walk(folder_root + '/' + session_id):
        for file_name in files:
            # file_path = os.path.join(root, file_name)
            file_list.append(file_name)
    response = {
        'list': file_list
    }
    return JsonResponse(response)


@csrf_exempt
@api_view(['GET'])
def getimage(request):
    session_id = request.headers['Session-Id']
    file_name = request.headers['file-name']

    if session_id not in sock.consumer.received_images:
        return HttpResponse(status=500)

    folder_path = os.path.join(folder_root, session_id, file_name)

    print(folder_path)

    if not os.path.isfile(folder_path):
        return HttpResponse(status=500)

    def file_iterator(file_path):
        with open(file_path, 'rb') as f:
            while True:
                data = f.read(8192)  # 8KB씩 읽어옴
                if not data:
                    break
                yield data

    content_type, _ = mimetypes.guess_type(file_name)

    response = StreamingHttpResponse(file_iterator(folder_path), content_type=content_type)

    response['Content-Disposition'] = f'attachment; filename="{smart_str(file_name)}"'

    return response
