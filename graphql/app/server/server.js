const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    greeting: String
  }
`

const resolvers = {
  // TypeDefsの構造と一致している必要がある
  Query: {
    greeting: () => {
      return 'Hello'
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 8080 }).then((server) => {
  console.log(`Server running at ${server.url}`)
})
