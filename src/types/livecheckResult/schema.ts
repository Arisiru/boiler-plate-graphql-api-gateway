import gql from 'graphql-tag';

const lifecheckResultTypeDef = gql`
  type LivecheckResult {
    status: String!
  }
`;

export default lifecheckResultTypeDef;
