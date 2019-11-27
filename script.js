notebook = new Notebook()
render = new Render(notebook)

console.log("hello")
render.createHeader("Notes!")
render.listNotes()
render.createTextBox()
render.createButton("create", function(){
  console.log("Button Works!")
})
console.log(render.notebook)