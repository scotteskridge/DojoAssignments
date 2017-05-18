import { Component, OnInit } from '@angular/core';
import { Note } from './note'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  all_notes = [];
  authors = ["abe", "bob", "chris", "dan", "ed", "frank", "george", "hank" ]

  

  constructor() { 
    let index = 0
    for (let author of this.authors){
      
      let note = new Note(index, `${author}`, `this is ${author}'s note`)
      index++
      this.all_notes.push(note)
      
      }
  }

  ngOnInit() {

  console.log(this.all_notes)
  }


}
