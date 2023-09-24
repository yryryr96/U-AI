package com.isix.reactiveserver.config;


import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Data
@ConfigurationProperties(prefix = "django")
public class GpuServerConfig {
    private Map<String, Object> endpoint = new ConcurrentHashMap<>();
}
