import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubBtnComponent } from './sub-btn/sub-btn.component';
import { BubbleComponent } from './bubble/bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    SubBtnComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
