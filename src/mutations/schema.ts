import gql from 'graphql-tag';
import addUserDefs from './addUser/schema';

const rootMutationDefs = gql`
  type Mutation {
    _empty: String
  }
`;

export default [rootMutationDefs, addUserDefs];
