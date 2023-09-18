package com.ssafy.clova.domain.multiocr.controller;

import com.ssafy.clova.domain.multiocr.dto.OcrResultDto;
import com.ssafy.clova.domain.multiocr.service.OcrService;
import com.ssafy.clova.domain.multiocr.service.OcrServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class OcrController {

    private final OcrServiceImpl ocrServiceImpl;
    @PostMapping("/review")
    public ResponseEntity<OcrResultDto> multiOcr(@RequestParam("file") MultipartFile image) throws IOException {
        System.out.println("--------------- multiOcr 컨트롤러 -------------------");
        OcrResultDto ocrResultDto = ocrServiceImpl.multiOcr(image);
        return ResponseEntity.ok().body(ocrResultDto);
    }
}
