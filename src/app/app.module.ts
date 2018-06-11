import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
//import { HerosComponent } from './heros/heros.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigService } from './config.service';
import { ConfigComponent } from './config/config.component';
import { CrisisComponent } from './crisis/crisis.component';
import { HerosModule } from './heros/heros.module';
import { HeighlightDirective } from './directives/heighlight.directive';
import { FormingComponent } from './forming/forming.component';
import { SortingPipe } from './sorting.pipe';
import {CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';
import {LoggerService} from './logger.service';
import { PassingDirective } from './directives/passing.directive';
import { ChildPassingComponent } from './child-passing/child-passing.component';
import {DataPassService} from './servies/data-pass.service';
import { ExObservablesComponent } from './ex-observables/ex-observables.component';
@NgModule({
  declarations: [
    SortingPipe,
    AppComponent,
    ChildComponent,
//   HerosComponent,
   // HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ConfigComponent,
    CrisisComponent,
    HeighlightDirective,
    FormingComponent,
    PeekABooComponent,
    PassingDirective,
    ChildPassingComponent,
    ExObservablesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HerosModule,
    AppRoutingModule,
    HttpClientModule,
    HerosModule,
    CustomerDashboardModule
  ],
  providers: [
    HeroService,
    MessageService,
    ConfigService,
    LoggerService,
    DataPassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

