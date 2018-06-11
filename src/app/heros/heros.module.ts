import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HerosComponent } from './heros.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

import {HeroService} from  '../hero.service';
import {HeroRoutingModule} from './heros-routing.module';
@NgModule({
    imports:[
    CommonModule,
    FormsModule,
    HeroRoutingModule
    ],
    declarations:[
        HerosComponent,
        HeroDetailComponent
    ],
    providers:[
        HeroService
    ],
    exports:[
        HeroDetailComponent
    ]
})
export class HerosModule {}