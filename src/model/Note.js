function Note(body) {
  this._body = body
}

Note.prototype.body = function() {
  return this._body
}

Note.prototype.abbreviate = function() {
  return this._body.slice(0, 20)
}
