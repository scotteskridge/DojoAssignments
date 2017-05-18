import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { UserComponent } from './user/user.component';
import { InspectUserComponent } from './user/inspect-user/inspect-user.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponentComponent,
    UserComponent,
    InspectUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
