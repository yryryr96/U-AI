package com.isix.reactiveserver.interaction.service;

import com.isix.reactiveserver.interaction.dto.InteractionDto;
import com.isix.reactiveserver.response.MultiOcrResponse;
import org.springframework.stereotype.Service;

public interface InteractionService {
   InteractionDto.MotionResponse checkMotionOk(String sessionId, String eventName ,int numChild, int limit);
   MultiOcrResponse recogBoardAndOcr(String sessionId, int numChild);
   InteractionDto.OxResponse checkOx(String sessionId, int numChild);
}
