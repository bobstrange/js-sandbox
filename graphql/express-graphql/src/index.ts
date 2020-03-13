import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => { res.send('Hi there') })
app.listen(8080, () => console.log('Listening on port 8080.'))
