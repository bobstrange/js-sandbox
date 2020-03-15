import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from "graphql"

import axios from 'axios'

const users = [
  { id: '23', firstName: 'John', age: 20 },
  { id: '43', firstName: 'Jane', age: 30 }
]

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: userType,
      args: { id: { type: GraphQLString }},
      async resolve(parentValue, args) {
        const response = await axios.get(`http://localhost:3000/users/${args.id}`)
        return response.data
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
