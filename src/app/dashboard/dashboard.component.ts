import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import {CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard/customer-dashboard.component';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(HeroDetailComponent) refChild;
  heroes:Hero[]=[];
  constructor(private heroService:HeroService) { }
  getHeros(){
    this.heroService.getHeros().subscribe(heroes=>this.heroes=heroes.slice(1,5));
  }
  ngOnInit() {
    this.getHeros();
    this.refChild.callingviewchild();
  }
  // ngAfterViewInit(){
  //   this.getHeros();
  //    this.refChild.callingviewchild();
  // }
  callparentFuncton(){
    console.log('get lost');
    this.refChild.callingviewchild();
  }
  

}
