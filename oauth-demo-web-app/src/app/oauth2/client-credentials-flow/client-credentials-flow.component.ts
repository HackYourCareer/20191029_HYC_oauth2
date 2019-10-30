import { Component, OnInit } from '@angular/core';

import { ClientCredentialsFlowService } from './client-credentials-flow.service';

@Component({
  selector: 'oauth2-client-credentials-flow',
  templateUrl: './client-credentials-flow.component.html'
})
export class ClientCredentialsFlowComponent implements OnInit {

  constructor(private oauthService: ClientCredentialsFlowService) { }

  ngOnInit() {
  }

  public fetchToken() {
    this.oauthService.fetchToken();
  }
}
