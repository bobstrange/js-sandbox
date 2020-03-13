import express, { Request, Response } from 'express'
import graphqlHTTP from "express-graphql";
import schema from "./schema"

const app = express()
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}))

app.listen(8080, () => console.log('Listening on port 8080.'))
