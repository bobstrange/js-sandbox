const express = require('express')
const path = require('path')

require('dotenv').config()

const env = process.env.NODE_ENV || 'development'
const app = express()
const port =
  env === 'development' ? process.env.DEV_PORT : process.env.PROD_PORT

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hi',
  })
})

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
