const Render = function(notebook) {
  this.notebook = notebook
  this.root = document.getElementById("root")
  this.list = document.getElementById("list")
  this.note = document.getElementById("note")
  bk = document.createElement("BR")
}

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
    document.getElementById("note").innerHTML = ""
    render.note.appendChild(note_view)
  })
}
