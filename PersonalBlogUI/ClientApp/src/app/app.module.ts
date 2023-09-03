import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarCompComponent } from './nav-bar-comp/nav-bar-comp.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { SkillComponentComponent } from './skill-component/skill-component.component';
import { RecognitionComponentComponent } from './recognition-component/recognition-component.component';
import { ExperienceComponentComponent } from './experience-component/experience-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarCompComponent,
    HomeComponentComponent,
    FooterCompComponent,
    SkillComponentComponent,
    RecognitionComponentComponent,
    ExperienceComponentComponent,
    LoginComponentComponent,
    BlogComponentComponent
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
