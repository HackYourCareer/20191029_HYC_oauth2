package com.sap.hyc.oauth2.demo.repositories;

import com.sap.hyc.oauth2.demo.entity.OAuth2Client;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface OAuth2ClientRepository extends MongoRepository<OAuth2Client, String> {

	Optional<OAuth2Client> findByClientId(final String clientId);
}
