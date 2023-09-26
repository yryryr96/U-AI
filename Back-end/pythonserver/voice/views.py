from django.core.files.storage import default_storage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import whisper
from rest_framework.decorators import api_view

fire_answer = ['불이야', '부리야', '부리아', '후리아']
"""
    일시 : 2023/09/11(월)
    개발 메소드 : voice_recognition
    개발 내용 : 프론트에서 전달받은 mp3 파일을 whisper.ai를 통해 분석하여 정답을 판정한 뒤 정답유무에 따른 Response 개발 완료
    특이사항 : 모든 api 개발 완료 이후에 정확도를 좀 더 높이는 방법을 생각해보면 좋을 듯 
"""
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
        file_path = default_storage.save('media/mp3/' + mp3_file.name, mp3_file)
        print(f"File is saved at: {file_path}")

    print("이름이름")
    print(mp3_file.name)

    print("----------------- ai 처리중 -------------------")
        # MP3 파일 AI 로 처리하여 인식된 텍스트 출력
        # model은 whisper중 base 모델 사용
    model = whisper.load_model("base")
    result = model.transcribe("./media/mp3/" + mp3_file.name, fp16=False, language='ko')
    recognition_text = result["text"]

    print(recognition_text)
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
            if recognition not in answer_list:
                answer_list.append(recognition)
            if answer == recognition:
               check = True
               break
        if check:
            break
    print(answer_list)

    if check:
        return JsonResponse({'result': 1, 'message': '인식 성공'})

    return JsonResponse({'result': -1, 'message' : '인식 실패'})