import gql from 'graphql-tag';

const livecheckTypeDefs = gql`
  extend type Query {
    livecheck: LivecheckResult!
  }
`;

export default livecheckTypeDefs;
