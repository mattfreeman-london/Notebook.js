
var bodyIsSavedInNote = function() {
  var note = new Note("Look at my sexy body!!")
  expect(note.body()).toEqual("Look at my sexy body!!")
}

console.log("Body is saved in note object...")
console.log(bodyIsSavedInNote())
