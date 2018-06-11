import { Component, OnInit, Input,AfterViewInit, ViewChild } from '@angular/core';
import {Hero} from '../hero';
import {HEROS } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
//heros=HEROS; // array assignment;
@ViewChild('HeroDetailComponent') refChild: HeroDetailComponent;
heros:Hero[];
selectedHero:Hero; //created obj.
  constructor(private heroService:HeroService) { }
  getHeros():void{
    //this.heros=this.heroService.getHeros();
    this.heroService.getHeros().subscribe(heros => this.heros=heros);
  }

  ngOnInit() {
      this.getHeros();
      this.refChild.callingviewchild();
  }
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
  callparentFuncton(){
    this.refChild.callingviewchild();
  }
}
