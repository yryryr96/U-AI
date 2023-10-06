from django.core.files.storage import default_storage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import whisper
from rest_framework.decorators import api_view

fire_answer = ['불이야', '불이아', '부리야', '부리아', '후리아', '우리야', '우리아', '푸리아', '푸리야']
@csrf_exempt
@api_view(['POST'])
def voice_recognition(request):
    mp3_file = request.FILES.get('mp3File')  # 변경된 부분
    sessionId = request.POST.get('session-id')
    type = request.POST.get('type')
    print("--------------- 음성 인식 api 호출 -----------------")
    print(mp3_file, sessionId, type)

    # MP3 파일 저장
    if mp3_file:  # 파일이 있을 경우만 처리
        file_path = default_storage.save('media/mp3/' + sessionId+'.mp3', mp3_file)
        print(f"File is saved at: {file_path}")

        print("----------------- ai 처리중 -------------------")
        # MP3 파일 AI 로 처리하여 인식된 텍스트 출력
        # model은 whisper중 base 모델 사용
        model = whisper.load_model("base")
        result = model.transcribe("media/mp3/" + sessionId+'.mp3', fp16=False, language='ko')
        recognition_text = result["text"]

        print("인식된 음성 = ", recognition_text)
        # text_data가 fire인 경우 list 설정
        # 다른 경우에도 설정해줄 수 있음
        answer_list = []
        if type == 'fire':
            answer_list = fire_answer
        recognition_text_list = recognition_text.split(' ')
        print("recognition_text_list = ", recognition_text_list)
        print("answer_list = ", answer_list)
        check = False
        for answer in answer_list:
            for recognition in recognition_text_list:
                print("answer = ", answer, " recognition = ", recognition)
                if answer == recognition:
                    check = True
                    break
            if check:
                break

        if check:
            return JsonResponse({'result': 1, 'message': '인식 성공'})
        else:
            return JsonResponse({'result': -1, 'message': '인식 실패'})
    else:
        return JsonResponse({'result': -1, 'message' : '인식 실패'})