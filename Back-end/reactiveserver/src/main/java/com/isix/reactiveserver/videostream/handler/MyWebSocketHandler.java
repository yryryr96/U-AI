package com.isix.reactiveserver.videostream.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.BinaryMessage;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.net.Socket;
import java.nio.ByteBuffer;

@Component
public class MyWebSocketHandler extends TextWebSocketHandler {


    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        System.out.println(message.toString());
        session.sendMessage(message);
        /*if (message.getPayload() instanceof ByteBuffer payloadBuffer) {

            // Convert the ByteBuffer to a byte array
            byte[] payloadBytes = new byte[payloadBuffer.remaining()];
            payloadBuffer.get(payloadBytes);

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
            System.out.println("아");
            System.out.println(message.getPayload().getClass());
            System.out.println(message.getPayload());
        }*/
    }

    /*@Override
    protected void handleBinaryMessage(WebSocketSession session, BinaryMessage message) {
        String payload = message.toString();
        *//*System.out.println("???");
        System.out.println(payload);*//*
        set ++;
        System.out.println(set);
    }*/

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);

        System.out.println("아시발시발");

        // Set the desired buffer size for the WebSocket session
        int bufferSize = 100000; // Adjust the buffer size as neededq
        session.setTextMessageSizeLimit(bufferSize);
        session.setBinaryMessageSizeLimit(bufferSize);
        System.out.println("Session Started on"+ session.getRemoteAddress() + " : "+ session.getId());
        session.sendMessage(new TextMessage("rotorrdi"));


    }
}