import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Friend } from "./Friend"
import { FriendsService } from "./friends.service" 

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  all_friends = []
  components = {create : true, update: false, show: false, anotherapp: false}
  sample_friend = new Friend
  selectedFriend = new Friend
  inspectedID;
  show = false
  // update = false
  // create = false
  // inspect = false
  testData = [] //dummy var to use the service to pass thigns around
  //you'll want to change this to the inspected user so that only need one bool
  //but this hack works for now

  @Output() logout = new EventEmitter
  constructor( private friends_service: FriendsService) { }

  ngOnInit() {
    this.updateFriendsList()
    this.selectedFriend = new Friend
    // console.log("init the selected friend ",this.selectedFriend)  
    //this.testData= this.friends_service.testData  //dummy var to use the service to pass thigns around
    }

  inspectFriend(_id){
    //find a friend by id and then set the result to this.selected_friend
    this.friends_service.find_a_friend(_id)
      .then((friend) => {    
        this.selectedFriend = friend
        this.inspectedID = _id
        return this.selectedFriend
        // console.log("the selected friend looks like:", this.selectedFriend)
      })
      .catch((err) => {console.log(err)})
    }

  updateFriend(_id){
    this.inspectFriend(_id)
      // .then(console.log("after you found a friend"))
  }

  deleteFriend(_id){
    console.log("the id to delete is ", _id)
    this.friends_service.delete_friend(_id )
      .then((data) => {
        console.log("front end is trying to delete this id", _id)
        this.selectedFriend = new Friend
        // this.selectedFriend= new Friend
        //emit an event to cause the parent to knwo to refresh
        this.updateFriendsList()
    })
      .catch((err) => {console.log(err)})
    // this.update = !this.update
  }


// take in a name of commponent and a _id and swap on/off as needed
  toggle(toggler, _id){
   
    for (let component in this.components ){
      if(toggler == component){
        if(_id == undefined){
          this.components[component] = !this.components[component]
        } else if(_id == this.inspectedID ){
          console.log("the _ids are equal", this.components[component])
          this.components[component] = !this.components[component]
        } else {
          this.components[component] = true
        }

      } else{
        this.components[component] = false
      }
    }
  }

  updateFriendsList(){
    this.friends_service.get_all_friends()
      .then((data) => {
        // console.log(data)
        this.all_friends = data       
      })
      .catch((err) => {console.log(err)})

  }

  clearUser(){
    this.logout.emit()
  }
  


}
