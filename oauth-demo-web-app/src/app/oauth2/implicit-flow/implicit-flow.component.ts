import {Component, OnInit} from '@angular/core';
import { ImplicitFlowService } from './implicit-flow.service';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {filter, flatMap, map, mergeMap, tap} from "rxjs/operators";

@Component({
  selector: 'oauth2-implicit-flow',
  templateUrl: './implicit-flow.component.html'
})
export class ImplicitFlowComponent implements OnInit{

  constructor(private oauthService:ImplicitFlowService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe( (fragment) => {
      this.oauthService.logFragmentString(fragment);
      this.oauthService.setAccessTokenFromFragment(fragment);
    });
  }

  public fetchToken() {
    this.oauthService.fetchToken();
  }
}
