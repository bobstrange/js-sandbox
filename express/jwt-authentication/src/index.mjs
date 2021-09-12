import express from 'express'

const app = express()

const posts = [
  {
    username: 'bob',
    title: 'Post 1',
  },
  {
    username: 'jane',
    title: 'Post 2',
  },
]

app.get('/posts', (req, res) => {
  res.json({
    data: posts,
  })
})

app.listen(3000)
