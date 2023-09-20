package com.isix.reactiveserver.response;


import com.isix.reactiveserver.interaction.dto.InteractionDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MultiOcrResponse {
    int result;
    List<InteractionDto.OcrResponse> ocrDtoList;
}
