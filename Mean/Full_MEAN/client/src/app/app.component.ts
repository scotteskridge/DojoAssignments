import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  currentUser;
  welcomeMessage = "Please Log In to continue"
  
  constructor(){}

  clearUser(){
    this.welcomeMessage = "Please Log In to continue"
    this.currentUser = false
  }

}
