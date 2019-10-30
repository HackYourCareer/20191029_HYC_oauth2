import {HttpHeaders, HttpParams} from '@angular/common/http';

import {OAuth2Service} from '../oauth2.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {map, tap} from "rxjs/operators";

export class AuthorizationCodeFlowService extends OAuth2Service {

  public fetchAuthorizationCode() {
    this.redirectToAuthorizationEndpoint(new URLSearchParams({
      response_type: "code",
      client_id: this.getOAuthConfig().clientId,
      redirect_uri: this.getRedirectUrl(),
      scope: this.getOAuthConfig().scope,
      state: this.generateState()
    }))
  }

  public fetchAccessToken() {
    const params = new HttpParams({
      fromObject: {
        grant_type: "authorization_code",
        code: this.getCodeParameterValue(),
        redirect_uri: this.getRedirectUrl(),
        client_id: this.getOAuthConfig().clientId
      }
    });

    const headers = new HttpHeaders(this.getClientAuthorizationHeader());

    this.sendRequestToTokenEndpoint(params, headers).subscribe(
      next => {
        this.setAccessToken(next.access_token);
        this.setRefreshToken(next.refresh_token);
        this.logger.logMessage(JSON.stringify(next, undefined, 4));
      }
    );
  }

  public refreshToken() {
    const params = new HttpParams({
      fromObject: {
        grant_type: "refresh_token",
        refresh_token: this.getRefreshToken()
      }
    });

    const headers = new HttpHeaders(this.getClientAuthorizationHeader());

    this.sendRequestToTokenEndpoint(params, headers).subscribe(
      next => {
        this.setAccessToken(next.access_token);
        this.setRefreshToken(next.refresh_token);
        this.logger.logMessage(JSON.stringify(next, undefined, 4));
      }
    );
  }

  public logParams(params:ParamMap) : void {
    this.logger.logMessage("Request params");
    params.keys.forEach((value) => {
      this.logger.logMessage(`${value} : ${params.get(value)}`)
    });
  }

  private getCodeParameterValue(): string {
    return this.getQueryParametersMap().get('code');
  }
}
