import { Component, OnInit } from '@angular/core';
import { Friend } from "./Friend"
import { FriendsService } from "./friends.service" 

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  all_friends = []
  sample_friend = new Friend
  selectedFriend = new Friend
  toggler = false
  create = false
  edit = false
  inspect = false
  testData = [] //dummy var to use the service to pass thigns around
  //you'll want to change this to the inspected user so that only need one bool
  //but this hack works for now

  constructor( private friends_service: FriendsService) { }

  ngOnInit() {
    this.updateFriendsList()
    this.selectedFriend = new Friend
    console.log("init the selected friend ",this.selectedFriend)  
    this.testData= this.friends_service.testData  //dummy var to use the service to pass thigns around
    }

  inspectFriend(_id){
    console.log("The friends id is:", _id)
    //find a friend by id and then set the result to this.selected_friend
    this.friends_service.find_a_friend(_id)
      .then((friend) => {    
        this.selectedFriend = friend
        console.log("the selected friend looks like:", this.selectedFriend)
      })
      .catch((err) => {console.log(err)})
    }

  editFriend(_id){
    this.inspectFriend(_id)
    this.edit = !this.edit
  }


//need some code on the right way to turn on and off both the inspect 
//and edit windows I;; figure it out tomorrow watch jacks demo starting at 1:40:00
  // toggle(friend){
  //   if(friend == this.selectedFriend  ){
  //     this.selectedFriend = new Friend
  //   } else
  // }

  updateFriendsList(){
    this.friends_service.get_all_friends()
      .then((data) => {
        console.log(data)
        this.all_friends = data       
      })
      .catch((err) => {console.log(err)})

  }
  


}
