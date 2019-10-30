import { HttpHeaders, HttpParams } from '@angular/common/http';

import { OAuth2Service } from '../oauth2.service';

export class ClientCredentialsFlowService extends OAuth2Service {

    public fetchToken() {
        const params = new HttpParams({
            fromObject: {
              grant_type: "client_credentials",
              scope: this.getOAuthConfig().scope
            }
        });

        this.sendRequestToTokenEndpoint(params, new HttpHeaders(this.getClientAuthorizationHeader())).subscribe(
            next => this.logger.logMessage(JSON.stringify(next, undefined, 4))
        )
    }
}
