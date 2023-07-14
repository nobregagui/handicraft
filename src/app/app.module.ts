import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './companents/header-component/header-component.component';
import { MenuToggleComponent } from './companents/menu-toggle/menu-toggle.component';
import { SectionAboutComponent } from './companents/section-about/section-about.component';
import { CarrouselWorksComponent } from './companents/carrousel-works/carrousel-works.component';
import { SectionVideoComponent } from './companents/section-video/section-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MenuToggleComponent,
    SectionAboutComponent,
    CarrouselWorksComponent,
    SectionVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
