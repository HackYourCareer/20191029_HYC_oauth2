import { Component, OnInit } from '@angular/core';

import { PasswordFlowService } from './password-flow.service';

@Component({
  selector: 'oauth2-password-flow',
  templateUrl: './password-flow.component.html'
})
export class PasswordFlowComponent implements OnInit {

  constructor(private oauthService:PasswordFlowService) { }

  ngOnInit() {
  }

  public fetchToken() {
    this.oauthService.fetchToken();
  }
}
