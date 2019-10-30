import { CommonModule } from '@angular/common';
import { LoggerComponent } from './logger/logger.component';
import { LoggerService } from './logger/logger.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoggerComponent],
  imports: [
    CommonModule
  ],
  providers: [
    LoggerService
  ],
  exports: [
    LoggerComponent
  ]
})
export class LoggerModule { }
