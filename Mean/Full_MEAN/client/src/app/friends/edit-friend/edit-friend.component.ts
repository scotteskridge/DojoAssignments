import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Friend } from "./../Friend"
import { FriendsService } from "./../friends.service" 

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css']
})
export class EditFriendComponent implements OnInit {
  editFriend = new Friend
  @Output() refresh = new EventEmitter
  @Input() selectedFriend
  constructor(private friends_service: FriendsService) { }

  ngOnInit() {
    console.log(this.selectedFriend)
    this.editFriend= this.selectedFriend
  }

  update_friend(){
    this.friends_service.update_friend(this.editFriend)
      .then((data) => {
        console.log("front end is trying to edit ")
        // this.selectedFriend= new Friend
        //emit an event to cause the parent to knwo to refresh
        this.refresh.emit()
    })
      .catch((err) => {console.log(err)})
  }

}
