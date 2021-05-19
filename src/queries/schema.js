const { gql } = require('apollo-server');
const LivecheckTypeDefs = require('./livecheck/schema');
const UserDefs = require('./user/schema');

const rootQueryDefs = gql`
  type Query {
    _empty: String
  }
`;

module.exports = [rootQueryDefs, LivecheckTypeDefs, UserDefs];
