package com.isix.reactiveserver.interaction.service;

import com.isix.reactiveserver.response.MultiOcrResponse;
import org.springframework.stereotype.Service;

public interface InteractionService {
   int checkMotionOk(String sessionId,int numChild);
   MultiOcrResponse recogBoardAndOcr(String sessionId, int numChild);
}
