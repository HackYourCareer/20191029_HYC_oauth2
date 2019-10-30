package com.sap.hyc.oauth2.demo.controller;

import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {


	@GetMapping(value = "/success", produces = {MediaType.APPLICATION_JSON_VALUE})
	@PreAuthorize("#oauth2.hasScope('read')")
	public Object success() {
		return "{\"message\": \"success\"}";
	}
}
