// Tests for the Notebook functionality, used by ./src/model/Notebook.js:

scenario("Notebook: All notes are returned in array...", function() {
  var notebook = new Notebook
  note1 = new fake("note1")
  note2 = new fake("note2")
  note3 = new fake("note3")
  notebook._notes = [note1, note2, note3]
  return expect(notebook.allNotes()).toEqual(notebook._notes)
})

scenario("Add new note to the array", function() {
  var notebook = new Notebook
  notebook.createNote('noteContent')
  return expect(notebook.allNotes().length).toEqual(1)
})

scenario('Check the new note is exactly what is added', function() {
  var notebook = new Notebook
  notebook.createNote('Remember to feed the cat')
  return expect(notebook.allNotes()[0].body()).toEqual('Remember to feed the cat')
})
