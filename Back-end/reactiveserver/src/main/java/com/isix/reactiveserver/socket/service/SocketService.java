package com.isix.reactiveserver.socket.service;

import com.isix.reactiveserver.config.GpuServerConfig;
import com.isix.reactiveserver.socket.dto.SessionDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Comparator;
import java.util.Map;
import java.util.PriorityQueue;

@Service
@RequiredArgsConstructor
public class SocketService {

    private final GpuServerConfig gpuServerConfig;

    public void getGpuFreeResources(){
        String urlProtocol;
        if(gpuServerConfig.getProtocol().equals("http")) urlProtocol = "http://";
        else urlProtocol = "https://";

        Map<String,String> endpoints = gpuServerConfig.getEndpoint();

        PriorityQueue<SessionInfo> queue = new PriorityQueue<>(new Comparator<SessionInfo>() {
            @Override
            public int compare(SessionInfo o1, SessionInfo o2) {
                return Double.compare(o1.rate,o2.rate);
            }
        });

        RestTemplate restTemplate = new RestTemplate();

        for(String endPoint : endpoints.values()){
            StringBuilder urlBuilder = new StringBuilder();
            urlBuilder.append(urlProtocol).append(endPoint).append("/sockets/sessions/monitor/");

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<String> entity = new HttpEntity<>(headers);

            ResponseEntity<SessionDto.Info> response = restTemplate.exchange(urlBuilder.toString(), HttpMethod.GET,entity, SessionDto.Info.class);

            System.out.println(urlBuilder);

            SessionDto.Info dto = response.getBody();

            if(null == dto) continue;

            double rate = (double) dto.getUsage()/ (double) dto.getTotal();

            queue.offer(new SessionInfo(endPoint,rate,dto.getUsage(),dto.getTotal()));
        }

        while(!queue.isEmpty()){
            SessionInfo temp = queue.poll();
            System.out.println(temp.toString());
        }

    }

    @Data
    @AllArgsConstructor
    static class SessionInfo{
        private String endpointUrl;
        private double rate;
        private long usage;
        private long total;
    }
}
