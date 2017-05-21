import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { CreateFriendComponent } from './friends/create-friend/create-friend.component';
import { InspectFriendComponent } from './friends/inspect-friend/inspect-friend.component';
import { EditFriendComponent } from './friends/edit-friend/edit-friend.component';
import { FriendsService } from "./friends/friends.service"

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    CreateFriendComponent,
    InspectFriendComponent,
    EditFriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
