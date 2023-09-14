package com.isix.reactiveserver.socket.dto;

import lombok.*;

import java.time.LocalDateTime;

public class SocketDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class SendInfo{
        private String macAdd;
        private LocalDateTime startTime;
        private String kindergartenName;
        private String className;
        private int numChild;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Response{
        private String macAdd;
        private LocalDateTime startTime;
    }
}
