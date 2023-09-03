import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { BlogComponent } from './blog-component/blog-component.component';
import { LoginComponent } from './login-component/login-component.component';
import { ExperienceComponent } from './experience-component/experience-component.component';
import { SkillComponent } from './skill-component/skill-component.component';
import { RecognitionComponent } from './recognition-component/recognition-component.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, //setting default route
  // { path: 'home', component: HomeComponent },
  // { path: 'blogs', component: BlogComponent },
  // { path: 'skills', component: SkillComponent },
  // { path: 'experience', component: ExperienceComponent },
  // { path: 'recognition', component: RecognitionComponent },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
