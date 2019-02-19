import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContentComponent } from './page/home/content/content.component';
import { PublishComponent } from './page/publish/publish.component';
import { ProfileComponent } from './page/profile/profile.component';
import { DetailComponent } from './page/detail/detail.component';

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
  },
  {
    path: 'publish',
    component: PublishComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
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
