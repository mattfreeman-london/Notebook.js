function Notebook() {
  this._notes = [
    new Note("Hello... Its me"),
    new Note("Hello... Is it me your looking for"),
    new Note("Hello, hello hello, heeellllooooooo")
  ]

}

Notebook.prototype.allNotes = function() {
  return this._notes
}
