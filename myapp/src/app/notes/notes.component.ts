import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  note:Note;
  noteList:Note[];
  
  constructor() 
  {
    this.note = new Note();
    this.noteList=[];
   }

  ngOnInit() {
  }



addNote()
{
  this.noteList.push(this.note);
  console.log(this.noteList); 

  this.note =new Note();
}

}