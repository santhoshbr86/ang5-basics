import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-passing',
  templateUrl: './child-passing.component.html',
  styleUrls: ['./child-passing.component.css']
})
export class ChildPassingComponent implements OnInit {
  @Input() childMessage:String;
  message:string='This is from Child';
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
    console.log(this.childMessage);
    this.callParent();
  }
  callParent(){
    this.messageEvent.emit('From child through EventEmmiter() method');
  }

}
