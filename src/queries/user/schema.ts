import gql from 'graphql-tag';

const userTypeDefs = gql`
  extend type Query {
    user(email: String): User!
  }
`;

export default userTypeDefs;
