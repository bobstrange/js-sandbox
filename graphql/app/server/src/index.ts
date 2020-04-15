import express from 'express'
import expressJwt from 'express-jwt'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const jwtSecret = Buffer.from(process.env.JWT_SECRET, 'base64')

app.use(expressJwt({
  secret: jwtSecret,
  credentialsRequired: false
}))

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(8080, () => {
  console.log('Running on localhost:8080')
})
