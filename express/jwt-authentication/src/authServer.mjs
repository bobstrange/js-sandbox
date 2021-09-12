import dotenv from 'dotenv'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express()

app.use(express.json())

const users = []
let refreshTokens = []

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
    const accessToken = generateAccessToken({ user: { name } })
    const refreshToken = jwt.sign(
      { user: { name } },
      process.env.JWT_REFRESH_SECRET
    )
    refreshTokens.push(refreshToken)
    res.json({ accessToken, refreshToken })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

app.post('/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) {
    return res.sendStatus(401)
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403)
  }
  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }
    const accessToken = generateAccessToken({ user: { name: user.name } })
    res.json({ accessToken })
  })
})

app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token)
  res.sendStatus(204)
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '45s' })
}

app.listen(4000)
