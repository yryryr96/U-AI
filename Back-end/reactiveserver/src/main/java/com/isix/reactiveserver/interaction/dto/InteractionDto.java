package com.isix.reactiveserver.interaction.dto;

import lombok.*;

public class InteractionDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Event{
        private String eventName;
        private String sessionId;
        private int numChild;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MotionResponse{
        private int numOk;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class OcrResponse{
        private String inferText;
        private double[] x;
        private double[] y;
    }
}
