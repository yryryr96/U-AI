package com.isix.reactiveserver.videostream.handler;

import com.neovisionaries.ws.client.WebSocket;
import com.neovisionaries.ws.client.WebSocketAdapter;
import com.neovisionaries.ws.client.WebSocketException;
import com.neovisionaries.ws.client.WebSocketFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNullApi;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.net.Socket;
import java.nio.ByteBuffer;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;

@Component
@RequiredArgsConstructor
public class MultiSocketHandler extends TextWebSocketHandler {

    private final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private final Map<String, byte[]> currentMessage = new ConcurrentHashMap<>();
    private final WebSocketClient webSocketClient;

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

        WebSocket ws = connect();

        ws.sendText("HI");
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


    private WebSocket connect() throws IOException, WebSocketException
    {
        System.out.println("Start");
        return new WebSocketFactory()
                .setConnectionTimeout(10000)
                .createSocket("ws://127.0.0.1:8888")
                .addListener(new WebSocketAdapter() {

                    // binary message arrived from the server
                    public void onBinaryMessage(WebSocket websocket, byte[] binary) {
                        String str = new String(binary);
                        System.out.println(str);
                    }
                    // A text message arrived from the server.
                    public void onTextMessage(WebSocket websocket, String message) {
                        System.out.println(message);
                    }
                })
                //.addExtension(WebSocketExtension.PERMESSAGE_DEFLATE)
                .connect();
    }
}