var returnAllnotes = function() {
  var notebook = new Notebook
  note1 = new fake("note1")
  note2 = new fake("note2")
  note3 = new fake("note3")
  notebook._notes = [note1, note2, note3]
  expect(notebook.allNotes()).toEqual(notebook._notes)
}

console.log("Notebook: All notes are returned in array...")
console.log(returnAllnotes())

var createNotes = function() {
  var notebook = new Notebook
  note1 = new fake("note1")
  note2 = new fake("note2")
  note3 = new fake("note3")
  notebook._notes = [note1, note2, note3]
  expect(notebook.allNotes()).toEqual(notebook._notes)
}
