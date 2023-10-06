package com.ssafy.clova.domain.multiocr.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OcrDto {
    String inferText;
    double[] x;
    double[] y;
}
