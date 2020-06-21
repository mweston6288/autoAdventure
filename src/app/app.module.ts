import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { MageComponent } from './mage/mage.component';
import { RogueComponent } from './rogue/rogue.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    MageComponent,
    RogueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
