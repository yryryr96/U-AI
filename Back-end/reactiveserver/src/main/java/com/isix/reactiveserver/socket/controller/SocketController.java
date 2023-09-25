package com.isix.reactiveserver.socket.controller;

import com.isix.reactiveserver.config.GpuServerConfig;
import com.isix.reactiveserver.socket.dto.SocketDto;
import com.isix.reactiveserver.socket.handler.MultiSocketHandler;
import com.isix.reactiveserver.socket.service.SocketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.socket.TextMessage;

import java.io.IOException;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class SocketController {
    private final MultiSocketHandler multiSocketHandler;
    private final GpuServerConfig gpuServerConfig;
    private final SocketService socketService;


    @PostMapping("/session/make")
    public ResponseEntity makeSession(@RequestBody SocketDto.SendInfo requestBody) throws IOException {
        System.out.println(requestBody.toString());
        String socketId = requestBody.getSocketId();
        if(multiSocketHandler.getSession(socketId).isOpen()) {
            multiSocketHandler.getSession(socketId).sendMessage(new TextMessage("HTTP"));
        }
        return new ResponseEntity("OK", HttpStatus.CREATED);
    }

    @GetMapping("/session/check")
    public ResponseEntity getMessage(@RequestBody SocketDto.SendInfo requestBody) throws Exception{
        byte[] temp = multiSocketHandler.getByteMessage(requestBody.getSocketId());

        String response = new String(temp);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);

        return new ResponseEntity(temp,headers,HttpStatus.OK);
    }

    @GetMapping("/session/servers")
    public ResponseEntity<Map<String,String>> getServer(){
        for(String str :  gpuServerConfig.getEndpoint().values()){
            System.out.println(str);
        }
        System.out.println(gpuServerConfig.getProtocol());
        socketService.getGpuFreeResources();
        return new ResponseEntity<>(gpuServerConfig.getEndpoint(),HttpStatus.OK);
    }
}
