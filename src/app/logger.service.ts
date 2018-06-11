import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  loggedMessage=[];
  constructor() { }
  log(mes){
    this.loggedMessage.push(mes);
    return this.loggedMessage;
  }


}
