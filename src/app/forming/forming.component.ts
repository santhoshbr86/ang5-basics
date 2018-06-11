import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from '../classes/hero';
import {DataPassService} from '../servies/data-pass.service';
@Component({
  selector: 'app-forming',
  templateUrl: './forming.component.html',
  styleUrls: ['./forming.component.css']

})
export class FormingComponent implements OnInit {
 private value='';
 private arr=[];
 powers=['Really Smart','Super Flexible','Super hot','Weather Changer'];
 model = new Hero(this.arr.length,'',this.powers[0],'');
 @Output() myevent = new EventEmitter();
  constructor(private data:DataPassService, private router:Router) {
    this.myevent.emit(null);
   }
  ngOnInit() {  
  }
  // onKeyup(name){
  //     this.arr=this.arr.concat([name.value]);
  //     name.value="";
  // }
  addNewHero(){
    this.model=new Hero(this.arr.length+1,'','','');
     this.myevent.emit(null);
  }
  addHero(heroForm){
    if(heroForm.valid){
        this.arr.push(this.model);
    }
  }
  updateData(){
    this.data.changeMessage('From sibling components');
    this.router.navigate(['peekAboo']);
  }
}
