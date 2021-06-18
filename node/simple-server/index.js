const http = require('http')
const request = require('request')

http.createServer((req, res) => {
  request(
    'https://jsonplaceholder.typicode.com/posts',
    (err, resp, body) => {
      const posts = JSON.parse(body)
      res.end(JSON.stringify(posts[0]))
    }
  )
}).listen(8080)

