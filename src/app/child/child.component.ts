import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() hero: Hero;
   @Output() close = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendClick($event){
    this.close.emit($event);
  }
}
