const { gql } = require('apollo-server');

const livecheckTypeDefs = gql`
  extend type Query {
    livecheck: LivecheckResult!
  }
`;

module.exports = livecheckTypeDefs;
