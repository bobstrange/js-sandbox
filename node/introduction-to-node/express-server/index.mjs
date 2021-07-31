import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

const db = []

app.post('/todo', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text
  }
  db.push(newTodo)
  res.status(201)
  res.json(newTodo)
})

app.get('/todo', (req, res) => {
  res.json(db)
})

app.get('/todo/:id', (req, res) => {
  const id = req.params.id
  console.log(`id is ${id}`)
  const todo = db.find(todo => todo.id === id)
  res.json({ data: todo })
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
