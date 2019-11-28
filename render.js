const Render = function(notebook) {
  this.notebook = notebook
  this.root = document.getElementById("root")
  bk = document.createElement("BR")
}

Render.prototype.renderNote = function(note) {
  parentDiv = document.createElement("DIV")
  h1 = document.createElement("H1")
  h1.innerHTML = note.title
  parentDiv.appendChild(h1)
  p = document.createElement("P")
  p.innerHTML = note.body
  parentDiv.appendChild(p)
  return parentDiv
}

// Render.prototype.listNotes = function(notebook = this.notebook) {
//   parentDiv = document.createElement("DIV")
//   listDiv = document.getElementById("list")
//   allNotes = notebook.allNotes()
//   for (i = 0; i < allNotes.length; i++) {
//     link = document.createElement("A")
//     link.innerHTML = allNotes[i].abbreviate()
//     parentDiv.appendChild(link)
//     parentDiv.appendChild(bk)
//   }
//   listDiv.appendChild(parentDiv)
// }

Render.prototype.listNotesOneByOne = function(notebook = this.notebook) {

  parentDiv = document.createElement("DIV")
  listDiv = document.getElementById("list")

  note = notebook.allNotes()[notebook.allNotes().length - 1]
  link = document.createElement("A")
    link.innerHTML = note.abbreviate()
    link.setAttribute("href", '#')
    link.addEventListener("click", )
    // parentDiv.remove()
    parentDiv.appendChild(link)
    parentDiv.appendChild(bk)

  listDiv.appendChild(parentDiv)
}

Render.prototype.createInputFields = function() {
  render = this

  var titleBox = document.createElement("INPUT")
  titleBox.setAttribute("id", "title-content")
  titleBox.setAttribute("placeholder", "Please Enter Title")

  var textBox = document.createElement("TEXTAREA");
  textBox.setAttribute("rows", "10")
  textBox.setAttribute("cols", "50")
  textBox.setAttribute("id","note-content")
  textBox.setAttribute("placeholder", "Please Enter Note text")

  var button = document.createElement("BUTTON")
  button.setAttribute("id", "create-note")
  button.innerHTML = "Create Note"
  button.addEventListener("click", function() {
    titleText = document.getElementById("title-content").value
    noteText = document.getElementById("note-content").value
    render.notebook.createNote(titleText, noteText)
    render.listNotesOneByOne()
    render.clearFields()
  })

  this.root.appendChild(titleBox)
  this.root.appendChild(textBox)
  this.root.appendChild(button)
}

// Render.prototype.createNote = function(notebook) {
//   createNoteButton = document.getElementById('create-note')
//   titleText = document.getElementById("title-content").value
//   noteText = document.getElementById("note-content").value
//   notebook.createNote(titleText, noteText)
//   document.getElementById('create-note').addEventListener('click', notebook.createNote(document.getElementById("note-content").value))
// }

Render.prototype.clearFields = function() {
  document.getElementById("title-content").value = ""
  document.getElementById("note-content").value = ""
}
