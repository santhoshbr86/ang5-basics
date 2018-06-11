import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { HeroService }  from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
private hero:Hero;
@Output() myevent = new EventEmitter();
  constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
   ) {}
  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }  
  ngOnInit() {
    this.getHero();
    console.log('Hello Hero'+this.hero.name);
  }
  goBack(): void {
  this.location.back();
}
  callingviewchild(){
    console.log('Calling as View child');
  }

}
