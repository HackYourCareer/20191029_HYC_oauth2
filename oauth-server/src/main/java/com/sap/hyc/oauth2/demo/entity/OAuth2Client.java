package com.sap.hyc.oauth2.demo.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import java.util.Set;

public class OAuth2Client {

	@Id
	private String id;

	@Indexed(unique = true)
	private String clientId;
	private String clientSecret;

	private Boolean scoped;
	private Boolean autoApproved;
	private Boolean secretRequired;

	private Integer accessTokenValiditySeconds;
	private Integer refreshTokenValiditySeconds;

	private Set<String> scope;
	private Set<String> resourceIds;
	private Set<String> authorities;
	private Set<String> authorizedGrantTypes;
	private Set<String> registeredRedirectUri;

	public String getId() {
		return id;
	}

	public void setId(final String id) {
		this.id = id;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(final String clientId) {
		this.clientId = clientId;
	}

	public String getClientSecret() {
		return clientSecret;
	}

	public void setClientSecret(final String clientSecret) {
		this.clientSecret = clientSecret;
	}

	public Boolean getScoped() {
		return scoped;
	}

	public void setScoped(final Boolean scoped) {
		this.scoped = scoped;
	}

	public Boolean getAutoApproved() {
		return autoApproved;
	}

	public void setAutoApproved(final Boolean autoApproved) {
		this.autoApproved = autoApproved;
	}

	public Boolean getSecretRequired() {
		return secretRequired;
	}

	public void setSecretRequired(final Boolean secretRequired) {
		this.secretRequired = secretRequired;
	}

	public Integer getAccessTokenValiditySeconds() {
		return accessTokenValiditySeconds;
	}

	public void setAccessTokenValiditySeconds(final Integer accessTokenValiditySeconds) {
		this.accessTokenValiditySeconds = accessTokenValiditySeconds;
	}

	public Integer getRefreshTokenValiditySeconds() {
		return refreshTokenValiditySeconds;
	}

	public void setRefreshTokenValiditySeconds(final Integer refreshTokenValiditySeconds) {
		this.refreshTokenValiditySeconds = refreshTokenValiditySeconds;
	}

	public Set<String> getScope() {
		return scope;
	}

	public void setScope(final Set<String> scope) {
		this.scope = scope;
	}

	public Set<String> getResourceIds() {
		return resourceIds;
	}

	public void setResourceIds(final Set<String> resourceIds) {
		this.resourceIds = resourceIds;
	}

	public Set<String> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(final Set<String> authorities) {
		this.authorities = authorities;
	}

	public Set<String> getAuthorizedGrantTypes() {
		return authorizedGrantTypes;
	}

	public void setAuthorizedGrantTypes(final Set<String> authorizedGrantTypes) {
		this.authorizedGrantTypes = authorizedGrantTypes;
	}

	public Set<String> getRegisteredRedirectUri() {
		return registeredRedirectUri;
	}

	public void setRegisteredRedirectUri(final Set<String> registeredRedirectUri) {
		this.registeredRedirectUri = registeredRedirectUri;
	}
}
