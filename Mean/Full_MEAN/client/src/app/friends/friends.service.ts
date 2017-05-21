import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from "@angular/http"
import { Friend } from "./Friend"
import "rxjs"

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers : HEADERS})

@Injectable()
export class FriendsService {
  testData= [1,2.3]

  constructor(private http: Http) {

      // https://angular-2-training-book.rangle.io/handout/di/what_is_di.html
      //see if you can pull out the garbage armed with the info above
   }

  get_all_friends(){
    return this.http.get("/get_friends")
      .map(data => data.json())
      .toPromise()
  }

  create_friend(friend: Friend){
    return this.http.post("/create", friend, OPTIONS).toPromise()
  }
  find_a_friend(_id){
    return this.http.get(`/show/${_id}`)
    .map(data => data.json()).toPromise()
  }

  update_friend(friend){
    return this.http.post(`/update`, friend, OPTIONS).toPromise()

  }
}
