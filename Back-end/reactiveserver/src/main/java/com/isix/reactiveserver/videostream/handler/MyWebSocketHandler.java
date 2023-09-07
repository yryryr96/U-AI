package com.isix.reactiveserver.videostream.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


public class MyWebSocketHandler implements WebSocketHandler {
    /*@Override
    public Mono<Void> handle(WebSocketSession session) {
        Flux<WebSocketMessage> input = session.receive()
                .doOnNext(message -> {
                    // Handle incoming messages from the client
                    String payload = message.getPayloadAsText();
                    // Process and respond to the client as needed
                });

        Flux<WebSocketMessage> output = input;// Create a Flux for sending data to the client

        return session.send(output);
    }*/
    @Override
    public Mono<Void> handle(WebSocketSession session) {
        return session
                .receive()
                .doOnNext(message -> {
                    // Handle incoming messages from the client
                    String payload = message.getPayloadAsText();
                    // Process and respond to the client as needed
                })
                .doOnError(error -> {
                    // Handle WebSocket errors here
                    System.err.println("WebSocket error: " + error.getMessage());
                })
                .then();
    }
}