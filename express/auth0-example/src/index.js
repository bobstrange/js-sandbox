const express = require('express')
const path = require('path')
const { auth } = require('express-openid-connect')

require('dotenv').config()

const env = process.env.NODE_ENV || 'development'
const app = express()
const port =
  env === 'development' ? process.env.DEV_PORT : process.env.PROD_PORT

app.use(
  auth({
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    secret: process.env.SESSION_SECRET,
    authRequired: false,
    auth0Logout: true,
  })
)

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hi',
  })
})

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
