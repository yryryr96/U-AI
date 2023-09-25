package com.isix.reactiveserver.interaction.controller;

import com.isix.reactiveserver.interaction.dto.InteractionDto;
import com.isix.reactiveserver.interaction.service.InteractionService;
import com.isix.reactiveserver.response.MultiOcrResponse;
import com.isix.reactiveserver.socket.handler.MultiSocketHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")
public class InteractionController {

    private final InteractionService interactionService;

    @PostMapping("/events/motion")
    public ResponseEntity<InteractionDto.MotionResponse> recognizeMultipleMotion(
            @RequestBody InteractionDto.Event requestBody
    ){

        InteractionDto.MotionResponse response =
                interactionService.checkMotionOk(
                        requestBody.getSessionId(),
                        requestBody.getEventName(),
                        requestBody.getNumChild(),
                        requestBody.getLimit()
                );

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/events/multiocr")
    public ResponseEntity<MultiOcrResponse> recognizeBoardAndOcr(
            @RequestBody InteractionDto.Event requestBody
    ){
        MultiOcrResponse response = interactionService.recogBoardAndOcr(requestBody.getSessionId(), requestBody.getNumChild());

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PostMapping("/events/ox")
    public ResponseEntity<InteractionDto.OxResponse> oxQuiz(
            @RequestBody InteractionDto.Event requestBody
    ){
        InteractionDto.OxResponse response = interactionService.checkOx(requestBody.getSessionId(), requestBody.getNumChild());

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    /*@GetMapping("/multiOcr")
    public ResponseEntity<OcrResultDto> multiOcr(@RequestParam("file") MultipartFile image) throws IOException {
        System.out.println("--------------- multiOcr 컨트롤러 -------------------");
        OcrResultDto ocrResultDto = ocrServiceImpl.multiOcr(image);
        return ResponseEntity.ok().body(ocrResultDto);
    }*/


}
