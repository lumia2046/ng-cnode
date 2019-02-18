import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContentComponent } from './page/home/content/content.component';

const route: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: ':tabName',
        component: ContentComponent,
      }, {
        path: '**',
        redirectTo: 'all'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
