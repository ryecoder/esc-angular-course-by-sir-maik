import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note/note.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-note-nav',
  templateUrl: './note-nav.component.html',
  styleUrls: ['./note-nav.component.css']
})
export class NoteNavComponent implements OnInit {

  constructor(
    private noteService: NoteService,
    private router:Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
  }

  addNote(){
    var note = {
      'color': '#FFCC80',
      'details': 'New note.. click to edit.',
      'create_date' : new Date().toString()
    }

    this.noteService.addNote(note)

  }

  isHome(route:string){
    return this.router.url === route
  }

  logout(){
    this.loginService.logout()
  }

}
