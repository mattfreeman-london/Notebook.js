function Note(body) {
  this._body = body
}

Note.prototype.body = function() {
  return this._body
}

// Note.prototype.abbreviate = function(note) {
//   return note.body.slice(0, 20)
// }
