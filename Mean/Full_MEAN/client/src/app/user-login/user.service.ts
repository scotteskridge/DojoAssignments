import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from "@angular/http"
import { User } from "./User"
import "rxjs"

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers : HEADERS})

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  get_all_Users(){
    return this.http.get("/get_Users")
      .map(data => data.json())
      .toPromise()
  }

  create_User(User: User){
    return this.http.post("/create", User, OPTIONS).toPromise()
  }
  find_a_User(_id){
    return this.http.get(`/show/${_id}`)
    .map(data => data.json()).toPromise()
  }

  update_User(User){
    // console.log("The service tried to edit this friedn:", User)
    return this.http.post(`/update`, User, OPTIONS).toPromise()

  }

  delete_User(_id){
    // console.log("The service is trying to delete", _id)
    return this.http.post(`/delete/${_id}`, OPTIONS).toPromise()

  }

}
