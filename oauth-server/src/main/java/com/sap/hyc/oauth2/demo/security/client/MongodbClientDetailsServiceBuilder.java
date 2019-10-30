package com.sap.hyc.oauth2.demo.security.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.builders.ClientDetailsServiceBuilder;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class MongodbClientDetailsServiceBuilder extends ClientDetailsServiceBuilder<MongodbClientDetailsServiceBuilder> {

	private final Set<ClientDetails> clientDetails = new HashSet<>();

	@Autowired
	private MongodbClientDetailsService clientDetailsService;

	@Override
	protected void addClient(final String clientId, final ClientDetails value) {
		clientDetails.add(value);
	}

	@Override
	protected ClientDetailsService performBuild() {
		return clientDetailsService;
	}
}
