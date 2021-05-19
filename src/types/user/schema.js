const { gql } = require('apollo-server');

const userTypeDefs = gql`
  type User {
    email: String!
    firstName: String!
    lastName: String!
    role: String
    photo: String
  }
`;

module.exports = userTypeDefs;
