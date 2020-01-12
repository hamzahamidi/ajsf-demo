import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Bootstrap3FrameworkModule } from '@ajsf/bootstrap3';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Bootstrap3FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
