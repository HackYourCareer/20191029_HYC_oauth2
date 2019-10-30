import {OAuth2Service} from '../oauth2.service';
import {of} from "rxjs";
import {filter, flatMap, map, tap} from "rxjs/operators";

export class ImplicitFlowService extends OAuth2Service {

  public fetchToken() {
    this.redirectToAuthorizationEndpoint(new URLSearchParams({
      response_type: "token",
      client_id: this.getOAuthConfig().clientId,
      redirect_uri: this.getRedirectUrl(),
      scope: this.getOAuthConfig().scope,
      state: this.generateState()
    }));
  }

  public setAccessTokenFromFragment(fragment: string): void {
    of(fragment).pipe(
      flatMap(s => s.split("&")),
      filter(s => s.startsWith("access_token")),
      map(s => s.split("=")[1])
    ).subscribe(accessToken => this.setAccessToken(accessToken));
  }

  public logFragmentString(fragment: string): void {
    if (fragment) {
      this.logger.logMessage("Request data:");
    }
    of(fragment).pipe(
      flatMap(param => param.split("&")),
      map(param => param.split("=")),
    ).subscribe(param => this.logger.logMessage(`${param[0]} : ${param[1]}`))
  }
}
