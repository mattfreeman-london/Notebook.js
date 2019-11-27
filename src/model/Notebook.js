function Notebook() {
  this._notes = [
    new Note("Hello... Its me"),
    new Note("Hello... Is it me your looking for"),
    new Note("Hello, hello hello, heeellllooooooo"),
    new Note("This is a new note"),
    new Note("This is another new note"),
  ]
}

Notebook.prototype.allNotes = function() {
  return this._notes
}
