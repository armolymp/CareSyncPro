package com.example.healthcaremanagement.filters;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // You can specify specific origins instead of "*" if needed
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("Origin", "X-Requested-With", "Content-Type", "Accept")
                .maxAge(3600); // Max age of the CORS preflight request in seconds
    }
}
