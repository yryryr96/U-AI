package com.ssafy.clova.domain.multiocr.dto;


import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OcrResultDto {
    MultipartFile image;
}
