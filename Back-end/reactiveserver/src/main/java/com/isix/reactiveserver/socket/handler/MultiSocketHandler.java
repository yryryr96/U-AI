package com.isix.reactiveserver.socket.handler;

import com.isix.reactiveserver.config.GpuServerConfig;
import com.isix.reactiveserver.exception.BusinessLogicException;
import com.isix.reactiveserver.exception.ExceptionCode;
import com.isix.reactiveserver.socket.service.SocketService;
import com.neovisionaries.ws.client.WebSocket;
import com.neovisionaries.ws.client.WebSocketAdapter;
import com.neovisionaries.ws.client.WebSocketException;
import com.neovisionaries.ws.client.WebSocketFactory;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@RequiredArgsConstructor
@Slf4j
public class MultiSocketHandler extends TextWebSocketHandler {

    private final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private final Map<String, byte[]> currentMessage = new ConcurrentHashMap<>();
    private final Map<String, WebSocket> clients = new ConcurrentHashMap<>();
    @Getter
    private final Map<String, String> endpoints = new ConcurrentHashMap<>();

    private final GpuServerConfig gpuServerConfig;


    private final SocketService socketService;

    private String djangoEndpoint = "ws://70.12.130.121:17070/ws/mark";

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
            /*WebSocketMessage<ByteBuffer> newMessage = new BinaryMessage(newPayloadBuffer);
            session.sendMessage(newMessage);*/
            WebSocket client = clients.get(session.getId());
            client.sendBinary(payloadBytes);

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
        int bufferSize = 1000000; // Adjust the buffer size as neededq
        session.setTextMessageSizeLimit(bufferSize);
        session.setBinaryMessageSizeLimit(bufferSize);
        //System.out.println("Session Started on"+ session.getRemoteAddress() + " : "+ session.getId());
        log.info("Session Started on"+ session.getRemoteAddress() + " : "+ session.getId());
        printSessions();

        sessions.put(session.getId(),session);
        byte[] bytes = new byte[1000000];
        currentMessage.put(session.getId(),bytes);
        //System.out.println(session.getId());
        session.sendMessage(new TextMessage(session.getId()));
        try {
            WebSocket ws = connect(session.getId());
            clients.put(session.getId(), ws);
            ws.sendText("HI");
        }catch(BusinessLogicException e){
            e.printStackTrace();
            System.out.println("Failed to connect GPU WebSocket Server. Connection Abruptly Closed.");
            sessions.remove(session.getId());
            session.close();

        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
//        System.out.println(status.getCode());
//        System.out.println(status.getReason());
        log.info("Session Closed on"+ session.getRemoteAddress() + " : "+ session.getId());
        sessions.remove(session.getId());
        currentMessage.remove(session.getId());
        clients.get(session.getId()).disconnect("Client Socket Closed");
        clients.remove(session.getId());
        printSessions();
    }

    public Map<String, WebSocketSession> getSessions() {
        return sessions;
    }

    public WebSocketSession getSession(String sessionId){
        try{
            return sessions.get(sessionId);
        }catch (NullPointerException e){
            throw new BusinessLogicException(ExceptionCode.SESSION_NOT_FOUND);
        }
    }

    public String getGpuServerEndpoint(String sessionId){
        return getEndpoints().get(sessionId);
    }

    public byte[] getByteMessage(String sessionId) {return currentMessage.get(sessionId);}


    private WebSocket connect(String sessionId) throws IOException
    {
        log.info(sessionId+" : "+"connecting");
        String urlProtocol;
        if(gpuServerConfig.getProtocol().equals("http")) urlProtocol = "http://";
        else urlProtocol = "https://";

        String endOrigin = socketService.getLowestUsageServer();
        String pickEnd = "ws://"+endOrigin+"/ws/mark";
        try {
            WebSocket webSocket = new WebSocketFactory()
                    .setConnectionTimeout(10000)
                    .createSocket(pickEnd)
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
                    });
            endpoints.put(sessionId,urlProtocol+endOrigin);
            webSocket.addHeader("session-id",sessionId);
            return
                    webSocket.connect();
                    //.addExtension(WebSocketExtension.PERMESSAGE_DEFLATE)
        }catch (WebSocketException e){
            e.printStackTrace();
        }
        throw new BusinessLogicException(ExceptionCode.FAILED_TO_CONNECT_SOCKET);
    }

    private void printSessions(){
        System.out.printf("[");
        for(WebSocketSession session : sessions.values()){
            System.out.printf(session.getId()+", ");
        }
        System.out.println("]");
    }
}