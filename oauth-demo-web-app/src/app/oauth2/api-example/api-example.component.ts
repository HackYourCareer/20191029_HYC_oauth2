import { Component, OnInit } from '@angular/core';
import {ApiExampleService} from "./api-example.service";

@Component({
  selector: 'oauth-api-example',
  templateUrl: './api-example.component.html',
  styleUrls: ['./api-example.component.scss']
})
export class ApiExampleComponent {

  constructor(private apiService:ApiExampleService) { }

  public callApi() {
    this.apiService.callApi();
  }
}
