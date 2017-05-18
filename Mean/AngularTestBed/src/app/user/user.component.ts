import { Component, OnInit } from '@angular/core';
import {User} from './user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  all_users = [
    {first_name: "first" , last_name: "user", age: "17"},
    {first_name: "second" , last_name: "User", age: "18"},
    {first_name: "third" , last_name: "Anotheruser", age: "21"},
  ]
  new_user = new User
  test_user = new User('firstname', 'lastname', 42)
  selectedUser: User
  constructor() { }

  ngOnInit() {
    this.all_users.push(this.test_user)
    
  }

  selectUser(input){
    this.selectedUser = input
    
  }
  create_user(){
    this.all_users.push(this.new_user)
    this.new_user = new User
  }
  update_user(user){
    console.log("you are updateing a user: ", user)
    this.selectedUser.first_name = user.first_name
    this.selectedUser.last_name = user.last_name
    this.selectedUser.age = user.age
  }

}
