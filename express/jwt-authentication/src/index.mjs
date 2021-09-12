import dotenv from 'dotenv'
import express from 'express'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express()
app.use(express.json())

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

app.get('/posts', authenticateToken, (req, res) => {
  const { name } = req.user

  res.json({
    data: posts.filter((post) => post.username === name),
  })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  if (token == null) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }
    req.user = user
    next()
  })
}

app.listen(3000)
