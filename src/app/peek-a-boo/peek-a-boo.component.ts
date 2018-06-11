import { Component, OnInit, ViewChild } from '@angular/core';
import {LoggerService} from '../logger.service';
import {PassingDirective} from '../directives/passing.directive';
import {ChildPassingComponent} from '../child-passing/child-passing.component';
import {DataPassService} from '../servies/data-pass.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css']
})

export class PeekABooComponent implements OnInit {
  nextId=1;
  der:string[];
  parentMessage="String from Parent";
  @ViewChild(ChildPassingComponent) FromChild;
  constructor(private logger: LoggerService,private data: DataPassService, private route:ActivatedRoute) { 
    this.route.params.subscribe(res=>console.log(res));
  }
  ngOnChanges(){
    this.logIt('onChanges');
  }
  ngOnInit() {
    this.logIt('onInit');
     console.log(this.FromChild.message);
     this.data.currentMessage.subscribe(data=>{console.log(data)});
  }
  logIt(msg:string){
    this.der=this.logger.log(`#${this.nextId++} ${msg}`);
    
  }
  ngDoCheck() { this.logIt(`DoCheck`); }
  ngAfterContentInit() { this.logIt(`AfterContentInit`);  }
  ngAfterContentChecked() { this.logIt(`AfterContentChecked`); }
  ngAfterViewInit() { this.logIt(`AfterViewInit`); 
    console.log(this.FromChild.message);
  }
  ngAfterViewChecked() { this.logIt(`AfterViewChecked`); }
  ngOnDestroy() { this.logIt(`OnDestroy`); }
  reciveMessage(d){
    console.log(d);
  }
}
