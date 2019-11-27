function Note(title, body) {
  this._body = body
  this._title = title
}

Note.prototype.body = function() {
  return this._body
}

Note.prototype.title = function() {
  return this._title
}

Note.prototype.setTitle = function(title) {
  this._title = title
}

Note.prototype.editBody = function(body) {
  this._body = body
}

Note.prototype.abbreviate = function() {
  return this._body.slice(0, 20) + "..."
}
