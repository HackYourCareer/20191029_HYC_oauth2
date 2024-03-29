package com.sap.hyc.oauth2.demo.repositories;

import com.sap.hyc.oauth2.demo.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

	Optional<User> findByEmail(final String email);
}
