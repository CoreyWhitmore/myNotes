import STORE from "../store.js";
import Note from "../Models/Notes.js";

//Public
class NotesService {
    postComment(body, id) {
        let note = STORE.State.notes.find(n => n.id == id)
        console.log(note)
        note.comments.push(body)

    }

    postNote(title, body) {
        let note = new Note(title, body)
        STORE.State.notes.push(note)
    }
}

const SERVICE = new NotesService();
export default SERVICE;
