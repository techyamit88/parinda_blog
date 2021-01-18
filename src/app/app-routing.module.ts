import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {RegisterComponent} from '../app/Register/Register.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {BlogsComponent} from './Blogs/Blogs.component';

const routes: Routes = [
  { path: 'Register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Blogs', component: BlogsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [RegisterComponent, LoginComponent, MainNavComponent, BlogsComponent];
