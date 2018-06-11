import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ConfigComponent } from './config/config.component';
import { CrisisComponent } from './crisis/crisis.component';
import {FormingComponent}  from './forming/forming.component';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
const routes:Routes=[
  //{path:'heroes', component:HerosComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'detail/:id', component:HeroDetailComponent},
  {path:'config', component:ConfigComponent},
  {path:'crisis',component:CrisisComponent},
  {path:'frming',component:FormingComponent},
  {path:'peekAboo/:id/:sam', component:PeekABooComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
//{enableTracing:true}