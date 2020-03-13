import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from "graphql";


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
      resolve(parentValue, args) {
        console.log(args)
        return users.find(user => {
          return user.id === args.id
        })
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
