const { gql } = require('apollo-server');

const userTypeDefs = gql`
  extend type Query {
    user(email: String): User!
  }
`;

module.exports = userTypeDefs;
