const { gql } = require('apollo-server');

const addUserTypeDefs = gql`
  extend type Mutation {
    addUser(email: String!): User
  }
`;

module.exports = addUserTypeDefs;
