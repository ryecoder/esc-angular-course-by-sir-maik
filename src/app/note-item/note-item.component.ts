import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: any
  @Input() index: number = 0

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editNote(index:number){
    this.router.navigate(['/note-edit',index])
  }

}
