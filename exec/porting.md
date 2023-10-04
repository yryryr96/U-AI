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
  
  - 아래는 백엔드 부분 예시니까 추가할 부분 추가하고 지울꺼 지우시면 됩니다. 다 쓰시면 이 글은 지워주세요.
  
  - IntelliJ : 11.0.19
  
  - Springboot : 2.7.13
  
  - Lombok
  
  - Spring Data JPA
  
  - Spring Data Redis(lecttuce)
  
  - Spring Web
  
  - Springdoc-openapi-ui 1.6.11
  
  - Oauth2
  
  - Swagger 3.0.0
  
  - SSL
  
  - CertBot(CA Certificates)
  
  - Node.js : 18.16.1
  
  - SERVER : AWS EC2 Ubuntu 20.04.6 LTS
  
  - DB : MySQL 8.0.34, Redis

- ##### 외부 서비스
  
  - 추가할 부분 추가하고 지울꺼 지우시면 됩니다. 다 쓰시면 이 글은 지워주세요.
  
  - AI 부분 적으시면 될듯
  
  - Kakao OAuth2 : application-oauth.yml에 설정
  
  - AWS S3 : application-local과 application-prod에 로컬과 배포 서버를 따로 설정
  
  - FCM :14.6.4

- ##### git ignore
  
  - Next : .env
  
  - 추가할 부분 추가하고 지울꺼 지우시면 됩니다. 다 쓰시면 이 글은 지워주세요.
  
  - Spring : application-jwt.yml, application-local.yml, application-prod.yml, application-oauth.yml(\src\main\resources에 위치)

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
    spring:
      datasource:
        url: <MySQL DB 주소>
        username: <유저 이름>
        password: <유저 비밀번호>
        driver-class-name: com.mysql.cj.jdbc.Driver
    
      jpa:
        hibernate:
          ddl-auto: create
        properties:
          hibernate:
            show_sql: true
            format_sql: true
    
    cloud:
      aws:
        s3:
          bucket: <S3 버킷 이름>
        credentials:
          access-key: <S3 버킷 access-key>
          secret-key: <S3 버킷 secret-key>
        region:
          static: ap-northeast-2
          auto: false
        stack:
          auto: false
    ```
  
  - application-prod.yml
    
    ```
    spring:
      datasource:
        url: <MySQL DB 주소>
        username: <유저 이름>
        password: <유저 비밀번호>
        driver-class-name: com.mysql.cj.jdbc.Driver
    
      jpa:
        hibernate:
          ddl-auto: validate
        properties:
          hibernate:
            show_sql: true
            format_sql: true
      redis:
        lettuce:
          pool:
            max-active: '5'
            max-idle: '5'
            min-idle: '2'
        host: <host ip 주소>
        port: <사용할 포트 번호>
        password: <redis 비밀번호>
    
    cloud:
      aws:
        s3:
          bucket: <S3 버킷 이름>
        credentials:
          access-key: <S3 버킷 access-key>
          secret-key: <S3 버킷 secret-key>
        region:
          static: ap-northeast-2
          auto: false
        stack:
          auto: false
    ```
  
  - application-oauth.yml
    
    ```
    spring:
      security:
        oauth2:
          client:
            registration:
              kakao:
                client-id: <Kakao Developers REST API키>
                client-secret: <Kakao Developers Client Secret 코드>
                redirect-uri: <Kakao Developers에 설정한 Redirect url>
                client-authentication-method: POST
                authorization-grant-type: authorization_code
                scope:
                  - profile_nickname
                  - account_email
                  - gender
                  - profile_image
                client-name: Kakao
            provider:
              kakao:
                authorization-uri: https://kauth.kakao.com/oauth/authorize
                token-uri: https://kauth.kakao.com/oauth/token
                user-info-uri: https://kapi.kakao.com/v2/user/me
                user-name-attribute: id
    ```
  
  - application-jwt.yml
    
    ```
    jwt:
      secretKey: <설정하고자 하는 JWT secretKey>
    
      access:
        expiration: 1800000 # 30분
        header: Authorization
    
      refresh:
        expiration: 1209600000 # 2주
        header: Authorization_refresh
    ```

- ##### 빌드하기
  
  1. Front: Next
     
     1. npm install
     
     2. npm run build
  
  2. 추가할 부분 추가하고 지울꺼 지우시면 됩니다. 다 쓰시면 이 글은 지워주세요.
  
  3. Back: Spring
     
     1. Gradle 실행

- 배포하기(추가할 부분 추가하고 지울꺼 지우시면 됩니다. 다 쓰시면 이 글은 지워주세요.)
  
  1. Nginx 설정
  
  2. 도커
  
  3. MySQL
     
     1. 원하는 스키마명으로 스키마 생성
     
     2. DumpSsafy_first.sql 실행

- ##### 서비스 이용 방법
  
  - 추가할 부분 추가하고 지울꺼 지우시면 됩니다. 다 쓰시면 이 글은 지워주세요.
  
  - 여기는 프론트 부분 없고 아마 AI 사용한 부분 넣으면 될것 같습니다 밑은 예시
  
  - FCM
  
  ###### - Firebase 비공개 키 생성

Spring boot에서 푸시 알림을 firebase에 요청하기 위해서는 firebase의 비공개 키 파일이 필요하다. firebase 콘솔에서 아래 절차대로 비공개 키를 생성할 수 있다.

1. 아래 링크로 firebase에 들어간다
   
   [Firebase | Google’s Mobile and Web App Development Platform](https://firebase.google.com/?hl=ko)

2. 시작하기
   
   ![Untitled](porting_assets/6d2654360cf537f5c6914652578426e19b6d22a3.png)

3. 프로젝트 추가를 누르고 프로젝트 이름을 작성하여 새로운 프로젝트를 만들어준다.
   
   ![Untitled](porting_assets/93a2e1230695f3f7ce3a751d9cd2870e7c793dd2.png)

4. 앱을 추가해준다. Blooming은 안드로이드 앱을 추가했다.
   
   ![Untitled](porting_assets/0b099070c22122bbe9c247cf81da8e4c40151715.png)

5. 이제 Android 앱에 Firebase를 추가해야 한다.
   
   1. 앱 등록 시 패키지 이름을 프로젝트의 안드로이드 앱 이름으로 맞춰주어야 한다. 이 외에는 자유롭게 작성한다.
      
      ![Untitled](porting_assets/ac3f312794de2c6780e68efde4566b59c0801cb1.png)
   
   2. 앱 등록 후 **“google-services.json”** 구성 파일은 다운하여 app 루트 디렉터리에 넣어준다.
      
      ![Untitled](porting_assets/9d7980ed2b07492abf60983814964bcf38d18a56.png)
   
   3. 공식 설명에 따라 추가해준다.
      
      ![Untitled](porting_assets/561c46af68f9f926ee847dcca4f5e62bd5f7cc2e.png)
   
   이렇게 하면 Android 앱에 Firebase 추가하는 과정은 끝이다. 콘솔로 이동한다.
   
   ![Untitled](porting_assets/79cf73134e87da4f8140bbdd08d18dc51dd18da5.png)

6. Spring boot에 FCM
   
   1. 프로젝트 설정으로 들어간다
      
      ![Untitled](porting_assets/6ac6489de736110f15855b0ec424891cd1555cae.png)
   
   2. 서비스 계정 → JAVA → 새 비공개 키 생성
      
      ![Untitled](porting_assets/f146313cc3c877d6e42bd56368cab3f32c2b3959.png)
      
      파일이 다운된다.
      
      ![Untitled](porting_assets/2af914dcc60bf24064cfe169a7dc774bd96e9074.png)
   
   3. 다운된 파일을 spring 프로젝트 > resources/firebase 하위 폴더를 만들어 넣어준다.
      
      ![Untitled](porting_assets/d102571d305908f3b6e32027139f35baa0392334.png)
   
   4. build.gradle파일의 dependency에 의존성을 추가하고 반영해준다.
      
      ![Untitled](porting_assets/04bd01bb31b68ed187dfc34731bf969c52175e15.png)
