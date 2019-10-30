import { HttpHeaders, HttpParams } from '@angular/common/http';

import { OAuth2Service } from '../oauth2.service';

export class PasswordFlowService extends OAuth2Service {
    public fetchToken() {
        const params = new HttpParams({
            fromObject: {
              grant_type: "password",
              username: this.getOAuthConfig().resourceOwnerUsername,
              password: this.getOAuthConfig().resourceOwnerPassword,
              scope: this.getOAuthConfig().scope
            }
        });

        return this.sendRequestToTokenEndpoint(params, new HttpHeaders(this.getClientAuthorizationHeader())).subscribe(
          next => this.logger.logMessage(JSON.stringify(next, undefined, 4))
        )
    }
}
