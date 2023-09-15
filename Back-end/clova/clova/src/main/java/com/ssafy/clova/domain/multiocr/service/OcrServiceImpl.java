package com.ssafy.clova.domain.multiocr.service;

import com.google.gson.Gson;
import com.ssafy.clova.domain.multiocr.dto.OcrResultDto;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.util.UUID;

@Service
public class OcrServiceImpl implements OcrService{
    @Override
    public OcrResultDto multiOcr(MultipartFile image) throws IOException {

        MultiValueMap<String, Object> requestBody = new LinkedMultiValueMap<>();
        requestBody.add("file", image.getResource());
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(requestBody);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<byte[]> response = restTemplate.exchange("http://127.0.0.1:8000/review/api/review/", HttpMethod.POST, requestEntity, byte[].class);
        if (response.getStatusCode().is2xxSuccessful()) {
            // Process the responseData
            byte[] bytes = response.getBody();
            File tempFile = File.createTempFile("temp", ".tmp");

            // Write the byte array to the temporary file
            assert bytes != null;
            Files.write(tempFile.toPath(), bytes);

            // Now you have a File object representing the in-memory file

            return ocrResultDto;
        } else {
            System.out.println("안됨");
        }

        ocrResultDto = new OcrResultDto();
        return ocrResultDto;
    }

    private String apiURL = "https://pn1cviln5o.apigw.ntruss.com/custom/v1/25019/43cb75334f4b833fbad3ade5fea79ae61eb36111a883f491554027d696426ec9/general";
    private String secretKey = "aFBtU09YS2JCQ09TVGJlaE1Qa2NLVlVZUGVyd2FxRFc=";
    private String imageFile = "C:\\Users\\SSAFY\\S09P22E104\\Back-end\\clova\\clova\\src\\main\\resources\\static\\goldenbell.JPG";
    public String apiCall(){
        try {
            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setUseCaches(false);
            con.setDoInput(true);
            con.setDoOutput(true);
            con.setReadTimeout(30000);
            con.setRequestMethod("POST");
            String boundary = "----" + UUID.randomUUID().toString().replaceAll("-", "");
            con.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
            con.setRequestProperty("X-OCR-SECRET", secretKey);

            JSONObject json = new JSONObject();
            json.put("version", "V2");
            json.put("requestId", UUID.randomUUID().toString());
            json.put("timestamp", System.currentTimeMillis());
            JSONObject image = new JSONObject();
            image.put("format", "jpg");
            image.put("name", "demo");
            JSONArray images = new JSONArray();
            images.put(image);
            json.put("images", images);
            String postParams = json.toString();

            con.connect();
            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            long start = System.currentTimeMillis();
            File file = new File(imageFile);
            writeMultiPart(wr, postParams, file, boundary);
            wr.close();

            int responseCode = con.getResponseCode();
            BufferedReader br;
            if (responseCode == 200) {
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();

            System.out.println(response);

            return response.toString();
        } catch (Exception e) {
            System.out.println(e);
            return "요청 실패";
        }
    }

    public void writeMultiPart(OutputStream out, String jsonMessage, File file, String boundary) throws
            IOException {
        StringBuilder sb = new StringBuilder();
        sb.append("--").append(boundary).append("\r\n");
        sb.append("Content-Disposition:form-data; name=\"message\"\r\n\r\n");
        sb.append(jsonMessage);
        sb.append("\r\n");

        out.write(sb.toString().getBytes("UTF-8"));
        out.flush();

        if (file != null && file.isFile()) {
            out.write(("--" + boundary + "\r\n").getBytes("UTF-8"));
            StringBuilder fileString = new StringBuilder();
            fileString
                    .append("Content-Disposition:form-data; name=\"file\"; filename=");
            fileString.append("\"" + file.getName() + "\"\r\n");
            fileString.append("Content-Type: application/octet-stream\r\n\r\n");
            out.write(fileString.toString().getBytes("UTF-8"));
            out.flush();

            try (FileInputStream fis = new FileInputStream(file)) {
                byte[] buffer = new byte[8192];
                int count;
                while ((count = fis.read(buffer)) != -1) {
                    out.write(buffer, 0, count);
                }
                out.write("\r\n".getBytes());
            }

            out.write(("--" + boundary + "--\r\n").getBytes("UTF-8"));
        }
        out.flush();
    }
}
