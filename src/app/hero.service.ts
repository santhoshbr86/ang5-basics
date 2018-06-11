import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { MessageService } from './message.service';
@Injectable()
export class HeroService {

  constructor(private messageservice: MessageService) { }
  // getHeros():Hero[] {
  //   return HEROS;
  // }
  getHeros():Observable<Hero[]>{
    this.messageservice.add('Hero service: fetch Heros');
    return of(HEROS);
  }
  getHero(id:number):Observable<Hero>{
  this.messageservice.add(`HeroService: fetch hero id=${id}`);
  return of(HEROS.find(hero=>hero.id===id));    
  }
}
