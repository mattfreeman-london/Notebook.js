function Note(body) {
  this._body = body
}

Note.prototype.body = function() {
  return this._body
}
