import Note from "./Models/Notes.js";

let _state = {
  /** @type {Note[]} */
  notes: [new Note("Test", "This is a test Note")]
};

function _load() {
  let data = JSON.parse(localStorage.getItem("Notes"))
  if (data) {
    data.notes = data.notes.map(n => new Note(n.title, n.body, n.comments, n.id))
    _state = data
  }
}

_load()

class Store {
  save() {
    localStorage.setItem("Notes", JSON.stringify(_state))
  }


  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
