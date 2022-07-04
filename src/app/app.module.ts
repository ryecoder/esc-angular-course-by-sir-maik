import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeadingComponent } from './heading/heading.component';
import { NotesComponent } from './notes/notes.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteNavComponent } from './note-nav/note-nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    EmployeeComponent,
    HeroesComponent,
    HeadingComponent,
    NotesComponent,
    NoteItemComponent,
    NoteEditComponent,
    NoteNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: LoginComponent},
      {path:'note', component: NotesComponent},
      {path:'note-edit/:id', component: NoteEditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
