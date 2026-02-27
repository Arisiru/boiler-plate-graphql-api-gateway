import type { Context } from '../../types/graphql';

const resolvers = {
  addUser: async (
    _parent: unknown,
    { email }: { email: string },
    { dataSources }: Context
  ) => await dataSources.userAPI.addUser(email),
};

export default resolvers;
