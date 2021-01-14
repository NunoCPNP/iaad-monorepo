const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    navbar: [NavBarItem],
    cta: [String],
    about: [[AboutItem]],
    technologies: [String],
    projects: [ProjectItem]
  }

  type NavBarItem {
    id: ID,
    label: String,
    link: String,
    type: String
  }

  type AboutItem {
    id: ID,
    data: String,
    styled: Boolean
  }

  type ProjectItem {
    id: ID,
    name: String,
    url: String,
    source: String,
    image: String,
    background: String,
    alt: String,
    description: [String],
    technologies: [String]
  }
`;

module.exports = typeDefs