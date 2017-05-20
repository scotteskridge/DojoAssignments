import { Component, OnInit } from '@angular/core';
import {Note} from './note'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  all_notes = []
  content_list = ["Scott's", "second", "third", "fourth", "fifth", "sixth", "seventh"]
  toggler = true
  new_note = new Note

  constructor() {
    
   }

  ngOnInit() {
    let ind = 0
    for (let content of this.content_list){
      // console.log(`A string ${ind}`)
      let note = new Note(ind, `${content} note look at me`, new Date(), new Date())
      this.all_notes.push(note)
      ind++
    } 
  }

  create_note(){
    this.new_note.created_at = new Date()
    this.new_note.updated_at = new Date()
    this.new_note.id = this.all_notes.length
    this.all_notes.push(this.new_note)
    this.new_note = new Note
  }

  inspect_

}
