import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomeDirectiveComponent } from './some-directive/some-directive.component';
//import { DirectivessComponent } from './directivess/directivess.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeDirectiveComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
