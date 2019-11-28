function Notebook() {
  this._notes = []
}

Notebook.prototype.allNotes = function() {
  return this._notes
}

Notebook.prototype.createNote = function(title, content) {
  this._notes.push(new Note(title, content, this._notes.length + 1))
}

Notebook.prototype.findByTitle = function(title) {
  for (i = 0; i < this._notes.length; i++) {
    note = this._notes[i]
    if (note.title == title) {
      return note
    }
  }
}
 
Notebook.prototype.findById = function(id) {
  for (i = 0; i < this._notes.length; i++) {
    note = this._notes[i]
    if (note.id == id) {
      return note
    }
  }
}