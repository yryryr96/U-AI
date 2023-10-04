package com.isix.reactiveserver.file.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class FileDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ImageList{
        String[] list;
    }

}
