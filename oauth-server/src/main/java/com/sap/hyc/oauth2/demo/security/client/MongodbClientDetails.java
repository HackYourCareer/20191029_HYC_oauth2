package com.sap.hyc.oauth2.demo.security.client;

import com.sap.hyc.oauth2.demo.entity.OAuth2Client;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.oauth2.provider.ClientDetails;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

public class MongodbClientDetails implements ClientDetails {

	private final OAuth2Client oAuth2Client;

	public MongodbClientDetails(final OAuth2Client oAuth2Client) {
		this.oAuth2Client = oAuth2Client;
	}

	@Override
	public String getClientId() {
		return oAuth2Client.getClientId();
	}

	@Override
	public Set<String> getResourceIds() {
		return oAuth2Client.getResourceIds();
	}

	@Override
	public boolean isSecretRequired() {
		return oAuth2Client.getSecretRequired();
	}

	@Override
	public String getClientSecret() {
		return oAuth2Client.getClientSecret();
	}

	@Override
	public boolean isScoped() {
		return oAuth2Client.getScoped();
	}

	@Override
	public Set<String> getScope() {
		return oAuth2Client.getScope();
	}

	@Override
	public Set<String> getAuthorizedGrantTypes() {
		return oAuth2Client.getAuthorizedGrantTypes();
	}

	@Override
	public Set<String> getRegisteredRedirectUri() {
		return oAuth2Client.getRegisteredRedirectUri();
	}

	@Override
	public Collection<GrantedAuthority> getAuthorities() {
		return AuthorityUtils.createAuthorityList(oAuth2Client.getAuthorities().toArray(new String[oAuth2Client.getAuthorities().size()]));
	}

	@Override
	public Integer getAccessTokenValiditySeconds() {
		return oAuth2Client.getAccessTokenValiditySeconds();
	}

	@Override
	public Integer getRefreshTokenValiditySeconds() {
		return oAuth2Client.getRefreshTokenValiditySeconds();
	}

	@Override
	public boolean isAutoApprove(final String scope) {
		return false;
	}

	@Override
	public Map<String, Object> getAdditionalInformation() {
		throw new NotImplementedException();
	}
}
