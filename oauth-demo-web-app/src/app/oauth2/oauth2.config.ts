import { InjectionToken } from '@angular/core';
export interface OAuth2Config {
    scope: string;
    clientId: string;
    clientPassword: string;
    resourceOwnerUsername: string;
    resourceOwnerPassword: string;

    redirectUrl: string;
    tokenEndpointPath: string
    authorizationEndpointPath: string;
    authorizationServerEndpoint: string;
}

export const OAuth2Configuration = new InjectionToken<OAuth2Config>("OAuth2Config");