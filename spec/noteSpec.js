// Tests for the Note functionality, used by ./src/model/Note.js:

scenario("Body is saved in note object...", function() {
  var note = new Note("Look at my sexy body!!")
  return expect(note.body()).toEqual("Look at my sexy body!!")
})

scenario("Returns abbreviated body...", function() {
  var note = new Note("Look at my sexy body!! 'fat bastard'")
  return expect(note.abbreviate()).toEqual("Look at my sexy body...")
})
