package com.isix.reactiveserver.exception;

import lombok.Getter;

public enum ExceptionCode {

    INVALID_REFRESH_TOKEN(400,"Invalid Refresh Token"),
    INVALID_ACCESS_TOKEN(401,"Invalid Access Token"),
    MEMBER_UNAUTHORIZED(403,"Member Unauthorized"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    FAILED_TO_UPDATE_MEMBER(500, "Failed Update Member"),
    FAILED_TO_DELETE_MEMBER(500, "Failed Delete Member"),
    FAILED_TO_UPDATE_FILE(500, "Failed Update File"),
    WRONG_PASSWORD(400,"Wrong Password"),
    NOT_ALLOWED_FILES(405,"Cannot upload Multi Image File"),
    NOT_AUTHORIZED_USER(403,"Not Authorized User"),
    UNACCEPTABLE_EXTENSION(403,"Unacceptable Extension"),

    POST_NOT_FOUND(404, "Post Not Found"),
    FILE_NOT_FOUND(404, "File Not Found"),
    LIKE_NOT_FOUND(404, "Like Not Found");



    @Getter
    private final int status;

    @Getter
    private final String message;

    ExceptionCode(int code, String message){
        this.status = code;
        this.message = message;
    }

}
