import { Component, OnInit } from '@angular/core';
import {ConfigService } from '../config.service';
import { ConfigType } from '../heroConfig';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  con;
  error;
  constructor(private config:ConfigService) {
    this.con ={
      heroesUrl:'null',
      textfile:'null'
    }
   }
 getConfig(){
   this.config.getConfig()
   .subscribe(
     data => {this.con ={...data.body},
      error => this.error = error
   // console.log(this.con);
  });
 }
 ngOnInit() {
    this.getConfig()
  }
}
