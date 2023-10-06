package com.isix.reactiveserver.file.service;

import com.isix.reactiveserver.file.dto.FileDto;
import com.isix.reactiveserver.socket.handler.MultiSocketHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
@RequiredArgsConstructor
public class FileService {
    private final MultiSocketHandler multiSocketHandler;


    public String[] getImageList(String sessionId) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("session-id", sessionId);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<FileDto.ImageList> response = restTemplate.exchange(multiSocketHandler.getGpuServerEndpoint(sessionId) + "/sockets/images/getlist/",
                HttpMethod.GET, entity, FileDto.ImageList.class);
        if (null != response.getBody()) return response.getBody().getList();
        else return null;


    }

    public byte[] getImage(String sessionId, String fileName){

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("session-id", sessionId);
        headers.add("file-name", fileName);

        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<byte[]> response = restTemplate.exchange(multiSocketHandler.getGpuServerEndpoint(sessionId) + "/sockets/images/getimage/",
                HttpMethod.GET, entity, byte[].class);
        return response.getBody();
    }

}
