# 포팅 매뉴얼

### 1. 개요

- ##### 프로젝트 개요
  
  - 

- ##### 프로젝트 사용 도구
  
  - 이슈관리 : JIRA
  
  - 형상관리 : Gitlab
  
  - 커뮤니케이션 : Notion, Mattermost, Discord
  
  - 디자인 : Figma
  
  - UCC : Adobe Premiere Pro 2023

- ##### 개발환경
  
  - React : ^18.2.21
  
  - Next : 13.4.19
  
  - three : ^0.155.0
  
  - react-three/drei : ^9.83.4
  
  - react-three/fiber : ^8.14.1
  
  - react-three/postprocessing : ^2.15.1
  
  - html2canvas : ^1.4.1
  
  - maath : ^0.7.0
  
  - react-dom : 18.2.0
  
  - react-lottie-player : ^1.5.5
  
  - styled-components : ^6.0.7
  
  - axios : ^1.5.0
  
  - zustand : ^4.4.1
  
  - VS Code : 1.18.1
  
  - IntelliJ : 2023.1.3
  
  - Springboot : 3.1.3
  
  - Lombok
  
  - Spring Data Redis(lecttuce)
  
  - Spring Web
  
  - Spring WebSocket

  - Neovisionaries WebSocket
  
  - Django : 4.2.5

  - Django ASGI : 3.7.2

  - daphne : 4.0.0

  - OpenCV-Python : 4.8.0.76

  - ffmpeg : 6.0

  - Ultralytics : 8.0.170
  
  - Node.js : 18.16.1
  
  - SERVER : Ubuntu 22.04. LTS

  - Pytorch : 2.0.1+cuda117

  - CUDA : 11.7

  - CuDnn : 8.4

- ##### 외부 서비스
  
  - Naver OpenApi CLOVA OCR : InteractionServiceImpl2 의 apiURL, secretKey

  - GPU Server 등록 : GPU 자원 확장을 위한 GPU 서버 엔드 포인트 application.yml 에 설정

  - 

- ##### git ignore
  
  - Next : .env
  
  - Spring : application.yml

## 2. 빌드

- ##### 환경변수 형태
  
  - .env
    
    ```
    - NEXT_PUBLIC_SOCKET_API_URL="소켓 통신 베이스 URL"
    - NEXT_PUBLIC_OCR_API_URL="OCR 이벤트 URL"
    - NEXT_PUBLIC_OX_API_URL="OX퀴즈 이벤트 URL"
    - NEXT_PUBLIC_MOTION_URL="모션 이벤트 URL"
    ```
  
  - application-local.yml
    
    ```
    server:
      port: 8080

    django:
      endpoint:
        gpu-server-1: 127.0.0.1:7070
      protocol: http
    ```
  
  - application-deploy.yml
    
    ```
    server:
      port: 8080


    django:
      endpoint:
        gpu-server-1: 70.12.130.121:17070
      protocol: http
    ```

- ##### 빌드하기
  
  1. Front: Next
     
     1. npm install
     
     2. npm run build
  
  2. Back : Spring

     1. gradle build
    
     2. gradlew bootjar

- ##### 배포하기
  
  1. GPU Server 환경 설정

  2. Spring 에서 GPU Server Endpoint 설정

  3. Django ASGI daphne로 실행

  4. Spring Jar 실행


- ##### 서비스 이용 방법

1. GPU Server 환경 실행
    1. PyTorch 버전에 맞는 CUDA, CuDnn 설치 후 PyTorch 설치
   ```bash
   pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117
   ```
   2. OS에 맞는 ffmpeg 수동설치 후 경로 환경변수에 추가
   3. OpenAI Whisper Package 설치
   ```bash
   pip install git+https://github.com/openai/whisper.git 
   ```
   4. python package pip install로 설치
   5. 열어야 하는 엔드포인트 포트 settings.py에 등록
   6. Django 서버 실행
   ```bash
    daphne -p 7070 pythonserver.asgi:application
    ```
2. Spring Boot 애플리케이션 실행
3. React 서버 실행