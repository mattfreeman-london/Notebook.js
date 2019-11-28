function Note(title, body, id) {
  this._body = body
  this._title = title
  this._id = id
}

Note.prototype.body = function() {
  return this._body
}

Note.prototype.title = function() {
  return this._title
}

Note.prototype.id = function() {
  return this._id
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
