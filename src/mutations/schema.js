const { gql } = require('apollo-server');
const addUserDefs = require('./addUser/schema');

const rootQueryDefs = gql`
  type Mutation {
    _empty: String
  }
`;

module.exports = [rootQueryDefs, addUserDefs];
