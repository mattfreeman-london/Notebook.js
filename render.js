// This file is used by:
//  notebook.html

// This function sets up the new instance on Notebook on screen when you
// first visit the webpage:
const Render = function(notebook) {
  this.notebook = notebook
  this.root = document.getElementById("root")
  this.list = document.getElementById("list")
  this.textBox = document.getElementById("text-box")
  this.viewNote = document.getElementById("view-note")
  bk = document.createElement("BR")
}

// This function takes a new note and places it on screen.
// Variables h1 and p are so named as they match up with the HTML elements
// that they relate to:
Render.prototype.renderNote = function(note) {
  parentDiv = document.createElement("DIV")
  h1 = document.createElement("H1")
  h1.innerHTML = note.title()
  parentDiv.appendChild(h1)
  p = document.createElement("P")
  p.innerHTML = note.body()
  parentDiv.appendChild(p)
  return parentDiv
}

// This function allows you to see an abbreviated version of each current note
// on screen after entering it, in order in which they were entered.
// You can click on each abbreviated note to see the full text.
Render.prototype.listNotesOneByOne = function() {

  parentDiv = document.createElement("DIV")
  listDiv = document.getElementById("list")

  note = this.notebook.allNotes()[this.notebook.allNotes().length - 1]
  link = document.createElement("A")
    link.innerHTML = note.abbreviate()
    link.setAttribute("href", `#${note._id}`)
    parentDiv.appendChild(link)
    parentDiv.appendChild(bk)

  listDiv.appendChild(parentDiv)
}

// This function creates the format of the page, empty of content:
Render.prototype.createInputFields = function() {
  render = this
// The space to put the title of the note:
  var titleBox = document.createElement("INPUT")
  titleBox.setAttribute("id", "title-content")
  titleBox.setAttribute("placeholder", "Please Enter Title")
// The larger text box to enter the body of the note:
  var textBox = document.createElement("TEXTAREA");
  textBox.setAttribute("rows", "10")
  textBox.setAttribute("cols", "50")
  textBox.setAttribute("id","note-content")
  textBox.setAttribute("placeholder", "Please Enter Note text")
// The submit button:
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

Render.prototype.clearFields = function() {
  document.getElementById("title-content").value = ""
  document.getElementById("note-content").value = ""
}

Render.prototype.hashRouter = function(notebook = this.notebook) {
  render = this
  window.addEventListener("hashchange", function(object){
    newURL = object.newURL
    id = newURL.split("#")[1]
    note_obj = notebook.findById(id)
    note_view = render.renderNote(note)
    document.getElementById("view-note").innerHTML = ""
    render.viewNote.appendChild(note_view)
  })
}
