import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {OAuth2Config, OAuth2Configuration} from './oauth2.config';

import {LoggerService} from './../logger/logger/logger.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {flatMap, map, tap} from "rxjs/operators";

export interface Oauth2AccessTokenResponse {
  access_token: string,
  expires_in: number,
  scope: string,
  token_type: string,
  refresh_token: string
}

@Injectable()
export class OAuth2Service {

  tokenEndpointURL: string;
  authorizationEndpointURL: string;

  constructor(
    private http: HttpClient,
    @Inject(OAuth2Configuration) private config: OAuth2Config,
    private activatedRoute: ActivatedRoute,
    protected logger: LoggerService
  ) {
    this.tokenEndpointURL = this.config.authorizationServerEndpoint + this.config.tokenEndpointPath;
    this.authorizationEndpointURL = this.config.authorizationServerEndpoint + this.config.authorizationEndpointPath;
  }

  public get accessToken()  {
    return localStorage.getItem("accessToken");
  }

  protected setAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  protected setRefreshToken(refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken);
  }

  protected sendRequestToTokenEndpoint(params: HttpParams, headers: HttpHeaders): Observable<Oauth2AccessTokenResponse> {
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    this.logger.logMessage(`Sending request to: ${this.tokenEndpointURL}`);
    this.logger.logMessage(`With parameters:`);

    const paramsKeys = params.keys();
    for (let i = 0; i < paramsKeys.length; i++) {
      const paramKey = paramsKeys[i];
      this.logger.logMessage(`${paramKey}: ${params.get(paramKey)}`);
    }

    return this.http.post<Oauth2AccessTokenResponse>(this.tokenEndpointURL, params, {headers: headers});
  }

  protected redirectToAuthorizationEndpoint(parameters: URLSearchParams) {
    const redirectUrl = `${this.authorizationEndpointURL}?${parameters.toString()}`;

    this.logger.logMessage(`Redirecting to: ${redirectUrl}`);
    window.location.href = redirectUrl;
  }

  protected getRefreshToken() : string {
    return localStorage.getItem("refreshToken");
  }

  protected getRedirectUrl() : string {
    return window.location.href.split('?')[0];
  }

  protected getClientAuthorizationHeader() {
    return {Authorization: `Basic ${this.getClientAuthorizationHash()}`}
  }

  protected getOAuthConfig(): OAuth2Config {
    return this.config;
  }

  protected generateState(): string {
    return Math.random().toString(36);
  }

  protected getQueryParametersMap(): ParamMap {
    return this.activatedRoute.snapshot.queryParamMap;
  }

  private getClientAuthorizationHash(): string {
    return btoa(`${this.config.clientId}:${this.config.clientPassword}`);
  }
}
