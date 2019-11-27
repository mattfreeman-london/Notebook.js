var httpServer = require("http-server")
var path = require("path")

var dirPath = path.join(__dirname, '/views')
const PORT = 3000
var server = httpServer.createServer({root: dirPath})
server.listen(PORT)