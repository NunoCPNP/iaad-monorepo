const { ApolloServer, gql } = require('apollo-server-express')
const express = require('express')
const cors = require('cors')

const data = require('./static-data/data')

const app = express()
app.use(cors())

const typeDefs = require('./schema/typeDefs')
const resolvers = require('./resolvers/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.get('/', (req, res) => {
  res.status(200).send(data) 
})

app.listen(9000, () => console.log('GraphQL Server running on port 9000'))