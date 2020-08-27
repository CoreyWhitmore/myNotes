import NotesService from "../Services/NotesService.js";
import STORE from "../store.js";
import Note from "../Models/Notes.js";

function _drawNotes() {
  let template = ""
  for (let i = 0; i < STORE.State.notes.length; i++) {
    template += STORE.State.notes[i].Template
  }
  document.getElementById("notes-area").innerHTML = template
  STORE.save()
}



//Public
export default class NotesController {
  constructor() {
    _drawNotes()
  }


  postNote(event) {
    console.log("Creating Note");
    event.preventDefault();
    let title = event.target.title.value
    let body = event.target.noteBody.value
    NotesService.postNote(title, body)
    _drawNotes()
  }

  postComment(event, id) {
    console.log("Creating Comment");
    event.preventDefault();
    let body = event.target.commentBody.value
    NotesService.postComment(body, id)
    _drawNotes()
  }
}
