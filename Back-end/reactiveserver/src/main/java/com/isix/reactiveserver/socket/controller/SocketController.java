package com.isix.reactiveserver.socket.controller;

import com.isix.reactiveserver.socket.dto.SocketDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequiredArgsConstructor
@RequestMapping("/api")
public class SocketController {

    @PostMapping("/session/make")
    public ResponseEntity makeSession(@RequestBody SocketDto.SendInfo requestBody){


        return new ResponseEntity("hi", HttpStatus.CREATED);
    }

}
