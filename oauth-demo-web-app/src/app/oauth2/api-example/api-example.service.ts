import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoggerService} from "../../logger/logger/logger.service";
import {OAuth2Service} from "../oauth2.service";

interface ApiResponse {
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiExampleService {
  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    private oAuthService: OAuth2Service,
  ) {
  }

  public callApi() {
    const headers = new HttpHeaders({"Authorization": `Bearer ${this.oAuthService.accessToken}`});
    this.http.get(
      "http://localhost:8082/api/success",
      {headers: headers}
    ).subscribe(
      (next) => {
        const apiResponse = next as ApiResponse;
        this.logger.logMessage(`API call result: ${apiResponse.message}`);
      },
      (error) => this.logger.logMessage(`Error during API call: ${error.message}`)
    );
  }
}
