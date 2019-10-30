import { NgModule } from '@angular/core';
import { OAuth2Config, OAuth2Configuration } from './oauth2.config';

import { OAuth2Service } from './oauth2.service';
import { AuthorizationCodeFlowComponent } from './authorization-code-flow/authorization-code-flow.component';
import { AuthorizationCodeFlowService } from './authorization-code-flow/authorization-code-flow.service';
import { ClientCredentialsFlowComponent } from './client-credentials-flow/client-credentials-flow.component';
import { ClientCredentialsFlowService } from './client-credentials-flow/client-credentials-flow.service';
import { HttpClientModule } from '@angular/common/http';
import { ImplicitFlowComponent } from './implicit-flow/implicit-flow.component';
import { ImplicitFlowService } from './implicit-flow/implicit-flow.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PasswordFlowComponent } from './password-flow/password-flow.component';
import { PasswordFlowService } from './password-flow/password-flow.service';
import { ApiExampleComponent } from './api-example/api-example.component';

@NgModule({
  declarations: [
    PasswordFlowComponent,
    ImplicitFlowComponent,
    ClientCredentialsFlowComponent,
    AuthorizationCodeFlowComponent,
    ApiExampleComponent
  ],
  imports: [
    HttpClientModule,
  ],
  providers: [
    ImplicitFlowService,
    PasswordFlowService,
    AuthorizationCodeFlowService,
    ClientCredentialsFlowService,
  ],
  exports: [
    PasswordFlowComponent,
    ImplicitFlowComponent,
    ClientCredentialsFlowComponent,
    AuthorizationCodeFlowComponent,
    ApiExampleComponent
  ]
})
export class Oauth2Module {
  static forRoot(config: OAuth2Config): ModuleWithProviders {
    return {
      ngModule: Oauth2Module,
      providers: [
        OAuth2Service,
        {
          provide: OAuth2Configuration,
          useValue: config
        }
      ]
    }
  }
}
