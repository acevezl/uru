const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    phone: String
    files: [File]
  }

  type Therapist {
    _id: ID
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    phone: String
    specialties: [String]
    skills: [String]
    photo: String
  }

  type File {
    _id: ID
    patient_name: String
    dob: String
    allergies: [String]
    therapist: [Therapist]
    notes: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    therapist(username: String!): Therapist
    therapists:[Therapist]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      password: String!
      first_name: String!
      last_name: String!
      phone: String!
    ): Auth
  }
`;

// therapists(criteria: String): [Therapist]
module.exports = typeDefs;
