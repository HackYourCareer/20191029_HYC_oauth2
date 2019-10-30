package com.sap.hyc.oauth2.demo;

import com.sap.hyc.oauth2.demo.entity.OAuth2Client;
import com.sap.hyc.oauth2.demo.entity.User;
import com.sap.hyc.oauth2.demo.repositories.OAuth2ClientRepository;
import com.sap.hyc.oauth2.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@EnableResourceServer
@SpringBootApplication
public class HycOauthAuthenticationApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private OAuth2ClientRepository oAuth2ClientRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(final String[] args) {
		SpringApplication.run(HycOauthAuthenticationApplication.class, args);
	}

	@Override
	public void run(final String... args) throws Exception {
		userRepository.deleteAll();
		oAuth2ClientRepository.deleteAll();

		final User adminUser = new User();

		adminUser.setEmail("admin");
		adminUser.setPassword(passwordEncoder.encode("nimda"));
		adminUser.setAccountNonExpired(true);
		adminUser.setAccountNonLocked(true);
		adminUser.setEnabled(true);
		adminUser.setCredentialsNonExpired(true);
		adminUser.setAuthorities(Collections.emptySet());
		userRepository.save(adminUser);

		final OAuth2Client client = new OAuth2Client();
		final Set<String> authorizedGrantTypes = new HashSet<>();
		authorizedGrantTypes.add("authorization_code");
		authorizedGrantTypes.add("implicit");
		authorizedGrantTypes.add("password");
		authorizedGrantTypes.add("client_credentials");
		authorizedGrantTypes.add("refresh_token");

		final Set<String> clientScopeSet = new HashSet<>();
		clientScopeSet.add("refresh_token");
		clientScopeSet.add("read");

		final Set<String> redirectUriSet = new HashSet<>();
		redirectUriSet.add("http://localhost/authorization-code");
		redirectUriSet.add("http://localhost/implicit");

		client.setClientId("testClient");
		client.setClientSecret(passwordEncoder.encode("secret"));
		client.setRegisteredRedirectUri(redirectUriSet);
		client.setAuthorities(Collections.emptySet());
		client.setResourceIds(Collections.emptySet());
		client.setAuthorizedGrantTypes(authorizedGrantTypes);
		client.setScope(clientScopeSet);
		oAuth2ClientRepository.save(client);
	}
}
