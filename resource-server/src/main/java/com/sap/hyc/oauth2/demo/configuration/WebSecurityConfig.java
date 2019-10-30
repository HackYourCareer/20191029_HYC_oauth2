package com.sap.hyc.oauth2.demo.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
@ComponentScan({"com.sap.hyc.oauth2.demo.controller"})
public class WebSecurityConfig implements WebMvcConfigurer {
}
