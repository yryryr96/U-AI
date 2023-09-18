package com.isix.reactiveserver.videostream.handler;

import org.springframework.lang.NonNullApi;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.net.Socket;
import java.nio.ByteBuffer;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;

@Component
public class MultiSocketHandler extends TextWebSocketHandler {

    private final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private final Map<String, byte[]> currentMessage = new ConcurrentHashMap<>();

    @Override
    public void handleMessage( WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        //System.out.println(session.getId() + " : "+ message.getPayloadLength());

        if (message.getPayload() instanceof ByteBuffer payloadBuffer) {

            // Convert the ByteBuffer to a byte array
            byte[] payloadBytes = new byte[payloadBuffer.remaining()];
            payloadBuffer.get(payloadBytes);

            currentMessage.put(session.getId(),payloadBytes);

            // Create a new ByteBuffer to send to another socket (assuming you have another WebSocketSession)
            ByteBuffer newPayloadBuffer = ByteBuffer.wrap(payloadBytes);

            // Send the ByteBuffer as a WebSocket message
            WebSocketMessage<ByteBuffer> newMessage = new BinaryMessage(newPayloadBuffer);
            session.sendMessage(newMessage);

            //System.out.println("Sent ByteBuffer message to another socket.");
        } else {
            // Handle other types of payloads (e.g., TextMessage)
            String payload = message.toString();
            session.sendMessage(new TextMessage(payload));
            System.out.println(message.getPayload().getClass());
            System.out.println(message.getPayload());
        }
    }



    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        int bufferSize = 100000; // Adjust the buffer size as neededq
        session.setTextMessageSizeLimit(bufferSize);
        session.setBinaryMessageSizeLimit(bufferSize);
        System.out.println("Session Started on"+ session.getRemoteAddress() + " : "+ session.getId());

        sessions.put(session.getId(),session);
        byte[] bytes = new byte[100000];
        currentMessage.put(session.getId(),bytes);
        System.out.println(session.getId());
        session.sendMessage(new TextMessage(session.getId()));

    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println(status.getCode());
        System.out.println(status.getReason());
        sessions.remove(session.getId());
        currentMessage.remove(session.getId());
    }

    public Map<String, WebSocketSession> getSessions() {
        return sessions;
    }

    public WebSocketSession getSession(String sessionId){
        return sessions.get(sessionId);
    }

    public byte[] getByteMessage(String sessionId) {return currentMessage.get(sessionId);}
}