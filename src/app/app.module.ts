import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { FootBarComponent } from './components/foot-bar/foot-bar.component';
import { HeadBarComponent } from './page/home/head-bar/head-bar.component';
import { ContentComponent } from './page/home/content/content.component';
import { ItemComponent } from './page/home/content/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootBarComponent,
    HeadBarComponent,
    ContentComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
