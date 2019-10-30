package com.sap.hyc.oauth2.demo.security.user;

import com.sap.hyc.oauth2.demo.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class MongodbUserDetails implements UserDetails {

	private final User user;

	public MongodbUserDetails(final User user) {
		this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return AuthorityUtils.createAuthorityList(user.getAuthorities().toArray(new String[user.getAuthorities().size()]));
	}

	@Override
	public String getPassword() {
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		return user.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return user.getAccountNonExpired();
	}

	@Override
	public boolean isAccountNonLocked() {
		return user.getAccountNonLocked();
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return user.getCredentialsNonExpired();
	}

	@Override
	public boolean isEnabled() {
		return user.getEnabled();
	}
}
