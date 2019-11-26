const Render = function(notebook) {
  this.notebook = notebook
}

Render.prototype.renderNote = function(note) {
  parentDiv = document.createElement("DIV")
  // h1 = document.createElement("H1")
  // h1.innerHTML = note.title
  // parentDiv.appendChild(h1)
  p = document.createElement("P")
  p.innerHTML = note.body
  parentDiv.appendChild(p)
  return parentDiv
}

Render.prototype.abbreviate = function(note) {
  return note.body.slice(0, 20)
}

Render.prototype.listNotes = function(notebook = this.notebook) {
  parentDiv = document.createElement("DIV")
  listDiv = document.getElementById("list")
  for (i = 0; i < notebook.allNotes.length; i++) {
    link = document.createElement("A")
    link.innerHTML = this.abbreviate(notebook.allNotes[i])
    bk = document.createElement("BR")
    parentDiv.appendChild(link)
    parentDiv.appendChild(bk)
  }
  listDiv.appendChild(parentDiv)
}

