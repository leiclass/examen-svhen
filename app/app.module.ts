import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app.component';
import {LibrosComponent} from './components/libros.component';
import {LibroBoxComponent} from './components/librobox.component';

@NgModule({
  imports : [
    BrowserModule
  ],
  declarations:[
    AppComponent,
    LibrosComponent,
    LibroBoxComponent

  ],
  bootstrap: [ AppComponent]
})

export class AppModule{}