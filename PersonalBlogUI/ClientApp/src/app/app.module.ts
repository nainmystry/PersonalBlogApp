import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarCompComponent } from './nav-bar-comp/nav-bar-comp.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarCompComponent,
    HomeComponentComponent,
    FooterCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
