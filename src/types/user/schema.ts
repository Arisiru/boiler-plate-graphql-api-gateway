import gql from 'graphql-tag';

const userTypeDefs = gql`
  type User {
    email: String!
    firstName: String!
    lastName: String!
    role: String
    photo: String
  }
`;

export default userTypeDefs;
