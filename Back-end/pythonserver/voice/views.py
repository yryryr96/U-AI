from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import whisper

fire_answer = ['불이야', '부리야', '부리아', '후리아']
"""
    일시 : 2023/09/11(월)
    개발 메소드 : voice_recognition
    개발 내용 : 프론트에서 전달받은 mp3 파일을 whisper.ai를 통해 분석하여 정답을 판정한 뒤 정답유무에 따른 Response 개발 완료
    특이사항 : 모든 api 개발 완료 이후에 정확도를 좀 더 높이는 방법을 생각해보면 좋을 듯 
"""
@csrf_exempt
def voice_recognition(request):
    if request.method == 'POST':
        mp3_file = request.FILES.get('mp3File')
        type = request.POST.get('type')
        print("--------------- 음성 인식 api 호출 -----------------")
        print(mp3_file, type)

        #MP3 파일 저장
        file_path = os.path.join('media', 'mp3', mp3_file.name)
        with open(file_path, 'wb') as destination:
           for chunk in mp3_file.chunks():
               destination.write(chunk)
        print("----------------- ai 처리중 -------------------")
        # MP3 파일 AI 로 처리하여 인식된 텍스트 출력
        # model은 whisper중 base 모델 사용
        model = whisper.load_model("base")
        result = model.transcribe("media/mp3/" + mp3_file.name, fp16=False, language='ko')
        recognition_text = result["text"]
        print(recognition_text)

        # text_data가 fire인 경우 list 설정
        # 다른 경우에도 설정해줄 수 있음
        answer_list = []
        if type == 'fire':
            answer_list = fire_answer

        check = False
        for answer in answer_list:
            if answer in recognition_text:
                check = True
                break

        if check:
            return JsonResponse({'result': 1, 'message': '인식 성공'})

        return JsonResponse({'result': -1, 'message' : '인식 실패'})
    else:
        return JsonResponse({'error': 'Invalid request or missing MP3 file.'}, status=400)