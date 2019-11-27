function Notebook() {
  this._notes = []
    // new Note("Hello... Its me"),
    // new Note("Hello... Is it me your looking for"),
    // new Note("Hello, hello hello, heeellllooooooo"),
    // new Note("This is a new note")
}

Notebook.prototype.allNotes = function() {
  return this._notes
}

Notebook.prototype.createNote = function(title, content) {
  this._notes.push(new Note(title, content))
}

Notebook.prototype.findByTitle = function(title) {
  for (i = 0; i < this._notes.length; i++) {
    notebook = this._notes[i]
    if (notebook.title == title) {
      return notebook
    }
  }
}