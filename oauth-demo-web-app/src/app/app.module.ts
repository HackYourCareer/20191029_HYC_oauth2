import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule } from './logger/logger.module';
import { NgModule } from '@angular/core';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { OAuth2Config } from './oauth2/oauth2.config';
import { Oauth2Module } from './oauth2/oauth2.module';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./router";

const oAuthConfig = {
  scope: "read",
  clientId: "testClient",
  clientPassword: "secret",
  resourceOwnerUsername: "admin",
  resourceOwnerPassword: "nimda",

  redirectUrl: "http://localhost:4300/",
  tokenEndpointPath: "/oauth/token",
  authorizationEndpointPath: "/oauth/authorize",
  authorizationServerEndpoint: "http://localhost:8080"
} as OAuth2Config;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbTabsetModule,
    AppRoutingModule,
    LoggerModule,
    Oauth2Module.forRoot(oAuthConfig),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
