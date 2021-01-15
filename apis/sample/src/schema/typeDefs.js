const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    navbar: [NavBarItem]
  }

  type NavBarItem {
    id: ID
    label: String
    link: String
    type: String
  }
`

module.exports = typeDefs
