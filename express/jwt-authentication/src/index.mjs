import dotenv from 'dotenv'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express()

app.use(express.json())

const users = []

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

app.get('/users', (req, res) => {
  res.json({
    data: users,
  })
})

app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).json({ data: user })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

app.post('/login', async (req, res) => {
  const name = req.body.name
  const password = req.body.password

  const user = users.find((user) => user.name === name)

  if (user == null) {
    return res.status(400).json({ message: 'Cannot find user' })
  }

  try {
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ data: 'not allowed' })
    }
    const accessToken = jwt.sign({ user: { name } }, process.env.JWT_SECRET)
    res.json({ accessToken })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

app.get('/posts', (req, res) => {
  res.json({
    data: posts,
  })
})

app.listen(3000)
