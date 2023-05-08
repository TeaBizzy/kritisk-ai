import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DevListComponent } from './dev-list/dev-list.component';
import { ImgUploaderComponent } from './img-uploader/img-uploader.component';
import { StatsComponent } from './stats/stats.component';
import { DevContactComponent } from './dev-contact/dev-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DevListComponent,
    ImgUploaderComponent,
    StatsComponent,
    DevContactComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
