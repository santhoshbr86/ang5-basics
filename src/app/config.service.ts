import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { ConfigType } from './heroConfig';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured', error.error.message);
    }
    else{
      console.error(`Backend returned error ${error.status}`);
    }
    return new ErrorObservable('some thing  bad happened; please try');
  }
  getConfig(){
    return this.http.get<ConfigType>('assets/config.json',{observe:'response'})
    .pipe(
        retry(1),
         catchError(this.handleError)
    );
  }
  
}
