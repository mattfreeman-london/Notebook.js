// This file sets up and create the server through which the page is run

var httpServer = require("http-server")
var path = require("path")

var dirPath = path.join(__dirname, '/')
const PORT = 3000
var server = httpServer.createServer({root: dirPath})
server.listen(PORT)
