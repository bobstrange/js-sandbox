const http = require('http')

http.createServer((req, res) => {
  res.end('Hi there')
}).listen(8080)

