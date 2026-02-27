import gql from 'graphql-tag';

const addUserTypeDefs = gql`
  extend type Mutation {
    addUser(email: String!): User
  }
`;

export default addUserTypeDefs;
