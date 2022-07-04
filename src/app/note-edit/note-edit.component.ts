import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note/note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  // copy of note from service when fetched
  note:any;

  // temporary note reference changes on the ui
  id: string = "0";
  color:string = "";
  details:string = "";

  // data for the color selectors
  colors:any = [
    {
      "name":"Peach",
      "color": "#FFAB91",
      "selected": false
    },
    {
      "name":"Yellow",
      "color": "#FFCC80",
      "selected": false
    },
    {
      "name":"Green",
      "color": "#E7ED9B",
      "selected": false
    },
    {
      "name":"Blue",
      "color": "#81DEEA",
      "selected": false
    },
    {
      "name":"Violet",
      "color": "#CF94DA",
      "selected": false
    }
  ]


  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
    ) { }

  ngOnInit(): void {
    var selectedColor
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || "0" // return 0 as string and be parse as int
    this.note = this.noteService.getNote(parseInt(this.id))
    this.details = this.note.details
    this.color = this.note.color
    // TODO: set color selected in dropdown
  }

  isSelectedColor(color:string){
    return color = this.color
  }

  deleteNote(){
    this.noteService.deleteNote(parseInt(this.id))
    this.router.navigate(['/'])
  }

  updateNote(){
    var temp_note:any = {
      'color': this.color,
      'details': this.details,
      'create_date' : new Date().toLocaleDateString("en-US")
    }
    this.noteService.updateNote(parseInt(this.id), temp_note)
    this.router.navigate(['/'])
  }
}
