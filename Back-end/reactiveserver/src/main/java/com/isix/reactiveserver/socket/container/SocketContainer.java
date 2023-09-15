package com.isix.reactiveserver.socket.container;

import com.isix.reactiveserver.socket.dto.SocketDto;
import org.springframework.stereotype.Component;

import java.net.Socket;
import java.util.HashMap;
import java.util.Map;

@Component
public class SocketContainer {
    private Map<String, Socket> sessionSockets = new HashMap<>();

    public String openSocket(SocketDto.SendInfo sendInfo){

        sendInfo.getMacAdd()
    }


}
