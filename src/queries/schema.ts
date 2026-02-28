import gql from 'graphql-tag';
import LivecheckTypeDefs from './livecheck/schema';
import UserDefs from './user/schema';

const rootQueryDefs = gql`
  type Query {
    _empty: String
  }
`;

export default [rootQueryDefs, LivecheckTypeDefs, UserDefs];
