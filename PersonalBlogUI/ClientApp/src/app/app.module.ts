import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar-comp/nav-bar-comp.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HomeComponent } from './home-component/home-component.component';
import { FooterComponent } from './footer-comp/footer-comp.component';
import { SkillComponent } from './skill-component/skill-component.component';
import { RecognitionComponent } from './recognition-component/recognition-component.component';
import { ExperienceComponent } from './experience-component/experience-component.component';
import { LoginComponent } from './login-component/login-component.component';
import { BlogComponent } from './blog-component/blog-component.component';
import { SmoothScrollDirective } from './Directives/SmoothScroll/smooth-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    SkillComponent,
    RecognitionComponent,
    ExperienceComponent,
    LoginComponent,
    BlogComponent,
    SmoothScrollDirective
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
