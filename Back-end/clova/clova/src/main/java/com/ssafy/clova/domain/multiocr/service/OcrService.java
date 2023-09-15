package com.ssafy.clova.domain.multiocr.service;

import com.ssafy.clova.domain.multiocr.dto.OcrResultDto;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.UUID;
public interface OcrService {
    public OcrResultDto multiOcr(MultipartFile image) throws IOException;
}

