import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { InteractService } from './services/interact.service';


@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    ComponentAComponent,
    ComponentBComponent
  ],
  providers: [InteractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
