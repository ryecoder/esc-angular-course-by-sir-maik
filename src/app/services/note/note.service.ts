import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  notes:any = [
    {
      'color': '#FFCC80',
      'details': 'Create a new note by click on the plus (+) icon on the top right corner. Click on a note to edit.',
      'create_date' : new Date().toLocaleDateString("en-US")
    },
    {
      'color': '#FFAB91',
      'details': 'This is a sample note',
      'create_date' : new Date().toLocaleDateString("en-US")
    }
  ]

  // get all notes
  getNotes(){
    return this.notes
  }
  // get a single note
  getNote(index:number){
    return this.notes[index]
  }
  // add
  addNote(note:any){
    this.notes.push(note)
  }
  // delete
  deleteNote(index:number){
    return this.notes.splice(index,1)
  }
  // update
  updateNote(index:number, note:any){
    this.notes[index] = note
  }
}
