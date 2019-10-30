import {Routes} from "@angular/router";
import {AuthorizationCodeFlowComponent} from "./oauth2/authorization-code-flow/authorization-code-flow.component";
import {ImplicitFlowComponent} from "./oauth2/implicit-flow/implicit-flow.component";
import {PasswordFlowComponent} from "./oauth2/password-flow/password-flow.component";
import {ClientCredentialsFlowComponent} from "./oauth2/client-credentials-flow/client-credentials-flow.component";

export const appRoutes: Routes = [
  {
    path: 'authorization-code',
    component: AuthorizationCodeFlowComponent
  },
  {
    path: 'implicit',
    component: ImplicitFlowComponent
  },
  {
    path: 'client-credentials',
    component: ClientCredentialsFlowComponent
  },
  {
    path: 'password',
    component: PasswordFlowComponent
  },
];
