package com.sap.hyc.oauth2.demo.security.client;

import com.sap.hyc.oauth2.demo.repositories.OAuth2ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.ClientRegistrationException;
import org.springframework.stereotype.Service;

@Service
public class MongodbClientDetailsService implements ClientDetailsService {

	@Autowired
	private OAuth2ClientRepository oAuth2ClientRepository;

	@Override
	public ClientDetails loadClientByClientId(final String clientId) throws ClientRegistrationException {
		return oAuth2ClientRepository.findByClientId(clientId)
				.map(MongodbClientDetails::new)
				.orElseThrow(() -> new ClientRegistrationException("Client with provided id: " + clientId + " does not exist"));
	}
}
