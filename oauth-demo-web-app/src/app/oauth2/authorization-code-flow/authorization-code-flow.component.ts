import {Component, OnInit} from '@angular/core';

import {AuthorizationCodeFlowService} from './authorization-code-flow.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'oauth2-authorization-code-flow',
  templateUrl: './authorization-code-flow.component.html'
})
export class AuthorizationCodeFlowComponent implements OnInit {

  constructor(private oauthService: AuthorizationCodeFlowService,
              private rotes: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.oauthService.logParams(this.rotes.snapshot.queryParamMap);
  }

  public fetchAuthorizationCode() {
    this.oauthService.fetchAuthorizationCode();
  }

  public fetchToken() {
    this.oauthService.fetchAccessToken();
  }

  public refreshToken() {
    this.oauthService.refreshToken();
  }
}
