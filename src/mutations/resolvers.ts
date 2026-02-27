import addUserResolver from './addUser/resolver';

const resolvers = {
  Mutation: {
    ...addUserResolver,
  },
};

export default resolvers;
