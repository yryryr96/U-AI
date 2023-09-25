package com.isix.reactiveserver.socket.dto;

import lombok.*;

public class SessionDto {

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @ToString
    public static class Info{
        private long usage;
        private long total;
    }
}
