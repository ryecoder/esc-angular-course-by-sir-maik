import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note/note.service';

@Component({
  selector: 'app-note-nav',
  templateUrl: './note-nav.component.html',
  styleUrls: ['./note-nav.component.css']
})
export class NoteNavComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  addNote(){
    var note = {
      'color': '#FFAB91',
      'details': 'New note.. click to edit.',
      'create_date' : new Date().toString()
    }

    this.noteService.addNote(note)

  }

}
