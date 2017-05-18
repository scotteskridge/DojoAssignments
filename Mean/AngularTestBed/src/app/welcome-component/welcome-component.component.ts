import { Component, OnInit } from '@angular/core';
import {User} from "./user"

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.css']
})
export class WelcomeComponentComponent implements OnInit {
  users = []
  new_user = new User
  date = new Date
  scott = {first_name : "Scott" , last_name: "Eskridge", age: 37}
  firstName = 'Scott'
  my_num = 154
  loggedIn = true
  aString = "defualt"
  numbers = [1,2,3,4,5]
  constructor() { }

  ngOnInit() {
    this.users.push(this.scott)
    // this.loggedIn = true
    // this.aString = "defualt"
  }

  // create_user(){
  //   this.users.push(this.new_user)
  //   this.new_user = new User
  //   this.date = new Date
  // }
  testme(){
    console.log(this.loggedIn)
  }


}
