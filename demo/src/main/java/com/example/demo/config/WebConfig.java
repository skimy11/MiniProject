package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 프론트엔드 프로젝트의 public 폴더 절대 경로를 잡습니다.
        // ../client/public 은 demo 폴더와 같은 위치에 client 폴더가 있다는 가정입니다.
        Path frontendPath = Paths.get("./client/public").toAbsolutePath().normalize();
        
        registry.addResourceHandler("/**")
                .addResourceLocations("file:" + frontendPath.toString() + "/");
    }
}