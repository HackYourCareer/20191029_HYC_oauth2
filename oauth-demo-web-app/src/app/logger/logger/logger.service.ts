import { Observable, ReplaySubject } from 'rxjs';

import { OnDestroy } from '@angular/core';

export class LoggerService {

  private readonly LOCAL_STOREAGE_LOGGER_ITEM_KEY = "logger";

  private loggerSubject$ = new ReplaySubject<string>();
  private loggerMessagesArray = Array<string>();

  public logMessage(message:string) : void {
    this.loggerSubject$.next(message);
    this.loggerMessagesArray.push(message);
    this.persistLogs();
  }

  public getLogger() : Observable<string> {
    this.loadLogger();
    return this.loggerSubject$.asObservable();
  }

  public clearLogs() {
    this.loggerMessagesArray = [];
    this.persistLogs();
  }

  private loadLogger() {
    this.loadLogs().forEach(message => this.logMessage(message));
  }

  private persistLogs() {
    localStorage.setItem(this.LOCAL_STOREAGE_LOGGER_ITEM_KEY, this.loggerMessagesArray.toString());
  }

  private loadLogs() : Array<string> {
    return localStorage.getItem(this.LOCAL_STOREAGE_LOGGER_ITEM_KEY).split(",");
  }
}
