import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { FootBarComponent } from './components/foot-bar/foot-bar.component';
import { HeadBarComponent } from './page/home/head-bar/head-bar.component';
import { ContentComponent } from './page/home/content/content.component';
import { ItemComponent } from './page/home/content/item/item.component';
import { FormatDataPipe } from './pipe/format-data.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { PublishComponent } from './page/publish/publish.component';
import { ProfileComponent } from './page/profile/profile.component';
import { DetailComponent } from './page/detail/detail.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ReplyComponent } from './page/detail/reply/reply.component';
import { ArticleComponent } from './page/detail/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootBarComponent,
    HeadBarComponent,
    ContentComponent,
    ItemComponent,
    FormatDataPipe,
    LoadingComponent,
    PublishComponent,
    ProfileComponent,
    DetailComponent,
    HeaderBarComponent,
    ReplyComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
