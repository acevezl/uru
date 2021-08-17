const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    phone: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User,
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, first_name: String!, last_name: String!, phone: String!): Auth
  }
`;

module.exports = typeDefs;
