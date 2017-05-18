import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {User} from './../user'


@Component({
  selector: 'app-inspect-user',
  templateUrl: './inspect-user.component.html',
  styleUrls: ['./inspect-user.component.css']
})
export class InspectUserComponent implements OnInit {
  @Input() selectedUser
  @Output() save = new EventEmitter()
  new_user: User
    // this.new_user.first_name = this.selectedUser.first_name
    // this.new_user.last_name = this.selectedUser.last_name
    // this.new_user.age = this.selectedUser.age

  constructor() { }

  ngOnInit() {
    // this.new_user.first_name = this.selectedUser.first_name
    // this.new_user.last_name = this.selectedUser.last_name
    // this.new_user.age = this.selectedUser.age

  }

  ngOnChanges() {
    this.new_user = {first_name: this.selectedUser.first_name, last_name: this.selectedUser.last_name, age: this.selectedUser.age}
  }
  copy(input){
    let user = new User
    for(let key in input){
      user[key] = input[key]
      }
    return user
  }
  updateUser(){
    // this.user = this.copy(this.selectedUser)
    
    // updated_user.first_name = this.selectedUser.first_name
    this.save.emit(this.new_user)
  }

}
