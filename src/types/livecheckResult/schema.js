const { gql } = require('apollo-server');

const lifecheckResultTypeDef = gql`
  type LivecheckResult {
    status: String!
  }
`;

module.exports = lifecheckResultTypeDef;
