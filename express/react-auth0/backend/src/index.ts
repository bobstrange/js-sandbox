import dotenv from 'dotenv'
dotenv.config()

import { app } from './app'

const port = parseInt(process.env.PORT || '8080')
app.listen(port)
