import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
@Injectable()
export class DataPassService {
  private messageSource = new BehaviorSubject<string>('defauld message');
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message:string){
    this.messageSource.next(message);
  }

}
