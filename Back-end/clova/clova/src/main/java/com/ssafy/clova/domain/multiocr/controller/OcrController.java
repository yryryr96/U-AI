package com.ssafy.clova.domain.multiocr.controller;

import com.ssafy.clova.domain.multiocr.service.OcrService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class OcrController {

    private final OcrService ocrService;
    @GetMapping("/multiOcr")
    public ResponseEntity multiOcr() throws FileNotFoundException {
        String result = ocrService.apiCall();
        return new ResponseEntity(result, HttpStatus.OK);
    }
}
