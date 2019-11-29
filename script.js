// This file brings together ./src/model/Notebook.js and render.js to
// define how our page looks:

var notebook = new Notebook()
render = new Render(notebook)

render.createInputFields()
render.hashRouter(render.notebook)
