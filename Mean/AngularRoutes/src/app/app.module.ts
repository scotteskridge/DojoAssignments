import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { routing } from './app.routes';
import { WidgetComponent } from './widget/widget.component';
import { PersonalComponent } from './notes/personal/personal.component';
import { PublicComponent } from './notes/public/public.component'

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    WidgetComponent,
    PersonalComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
