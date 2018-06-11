import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
@Output() myevent = new EventEmitter()
  constructor() { 
  }
  ngOnInit() {
  }
  sendToParent(){
    this.myevent.emit(null);
  }
 callFromParent(){
    console.log("Call from parent");
 }

}
