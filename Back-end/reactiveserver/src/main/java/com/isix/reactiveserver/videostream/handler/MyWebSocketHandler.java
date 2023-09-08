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
    private int set = 0;
    private Socket socket;

    public MyWebSocketHandler() throws IOException {
        socket = new Socket("127.0.0.1",8888);
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        if (message.getPayload() instanceof ByteBuffer payloadBuffer) {

            // Convert the ByteBuffer to a byte array
            byte[] payloadBytes = new byte[payloadBuffer.remaining()];
            payloadBuffer.get(payloadBytes);

            // Create a new ByteBuffer to send to another socket (assuming you have another WebSocketSession)
            ByteBuffer newPayloadBuffer = ByteBuffer.wrap(payloadBytes);

            // Send the ByteBuffer as a WebSocket message
            WebSocketMessage<ByteBuffer> newMessage = new BinaryMessage(newPayloadBuffer);
            session.sendMessage(newMessage);
            socket.getOutputStream().write(payloadBytes);

            //System.out.println("Sent ByteBuffer message to another socket.");
        } else {
            // Handle other types of payloads (e.g., TextMessage)
            String payload = message.toString();
            session.sendMessage(new TextMessage(payload));
            System.out.println(message.getPayload().getClass());
        }
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

        // Set the desired buffer size for the WebSocket session
        int bufferSize = 100000; // Adjust the buffer size as needed
        session.setTextMessageSizeLimit(bufferSize);
        session.setBinaryMessageSizeLimit(bufferSize);

    }
}