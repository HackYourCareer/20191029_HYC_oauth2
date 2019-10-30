import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  private messagesArray = new Array<string>();

  @Input() loggerName: string;

  constructor(private loggerService:LoggerService) { }

  ngOnInit() {
    this.loggerService.getLogger().subscribe(
      (next) =>  {
        if( next ) {
          this.messagesArray.push(next)
        }
      }
    );
  }

  public clearLogs() {
    this.messagesArray = [];
    this.loggerService.clearLogs();
  }

  get messages() {
    return this.messagesArray;
  }
}
