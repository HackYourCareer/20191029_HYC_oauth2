package com.sap.hyc.oauth2.demo.security.user;

import com.sap.hyc.oauth2.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MongodbUserDetailService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
		return userRepository.findByEmail(username)
				.map(MongodbUserDetails::new)
				.orElseThrow(() -> new UsernameNotFoundException("User with username: " + username + " does not exists"));
	}
}
