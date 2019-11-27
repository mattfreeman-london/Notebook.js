const Render = function(notebook) {
  this.notebook = notebook
  this.root = document.getElementById("root")
  bk = document.createElement("BR")
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

Render.prototype.listNotes = function(notebook = this.notebook) {
  parentDiv = document.createElement("DIV")
  listDiv = document.getElementById("list")
  allNotes = notebook.allNotes()
  for (i = 0; i < allNotes.length; i++) {
    link = document.createElement("A")
    link.innerHTML = allNotes[i].abbreviate()

    parentDiv.appendChild(link)
    parentDiv.appendChild(bk)
  }
  listDiv.appendChild(parentDiv)
}

Render.prototype.createTextBox = function() {
  var textBox = document.createElement("TEXTAREA");
  textBox.setAttribute("rows", "10")
  textBox.setAttribute("cols", "50")
  // textBox.setAttribute("form", "note content")
  textBox.setAttribute("id","note-content")
  this.root.appendChild(textBox)
  this.root.appendChild(bk)
  var button = document.createElement("BUTTON")

  button.setAttribute("id", "create-note")
  button.innerHTML = "Create Note"
  this.root.appendChild(button)
}

Render.prototype.createNote = function() {
  document.getElementById('create-note').addEventListener('click', notebook.createNote(document.getElementById("note-content").value))
}
