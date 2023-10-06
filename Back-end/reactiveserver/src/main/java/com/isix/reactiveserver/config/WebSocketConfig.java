package com.isix.reactiveserver.config;

import com.isix.reactiveserver.socket.handler.MultiSocketHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

@Configuration
@EnableWebSocket
@RequiredArgsConstructor
public class WebSocketConfig implements WebSocketConfigurer {

    private final MultiSocketHandler multiSocketHandler;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        // Use the addHandler method with a WebSocketHandler and endpoint path
        registry.addHandler(multiSocketHandler, "/ws/chat").setAllowedOrigins("*");
    }

    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }


    /*@Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // configure message broker options
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // register WebSocket endpoints for clients to connect to
    }
    */
}

