import { ApolloServer, gql } from "apollo-server"

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Philip K. Dick",
  },
]

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const resolvers = {
  Query: {
    books: () => books,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
  .catch((err) => {
    console.error(err)
  })
