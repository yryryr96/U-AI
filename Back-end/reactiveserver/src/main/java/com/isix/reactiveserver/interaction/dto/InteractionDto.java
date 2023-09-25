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
        private int limit;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class OxResponse{
        private int result;
        private int left;
        private int right;
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

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @ToString
    public static class MotionRequest{
        private String sessionId;
        private String targetPose;
        private int numOfChild;
        private int limit;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class MotionResponse{
        private String target;
        private int result;
    }
}
