
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NewsComponent} from './components/news/news.component';

const routes: Routes = [
    {path: 'dashboard', component:DashboardComponent},
    {path: 'news', component: NewsComponent},
    {path: '', component: DashboardComponent},
    {path: '**', pathMatch:'full', redirectTo: 'dashboard'}
  ]; 

  @NgModule({
      imports:[
        RouterModule.forRoot(routes)
      ], 
      exports:[
          RouterModule
      ]
  })
  export class AppRoutingModule{}