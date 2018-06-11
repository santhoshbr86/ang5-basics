import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HerosComponent } from './heros.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
var rots:Routes=[
    {path:'heroes', component:HerosComponent},
    {path:'herosDetails', component:HeroDetailComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(rots)
    ],
    exports:[
        RouterModule
    ]
})
export class HeroRoutingModule{}