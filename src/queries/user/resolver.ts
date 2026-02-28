import type { Context } from '../../types/graphql';

const resolver = {
  user: async (
    _parent: unknown,
    { email }: { email?: string },
    { dataSources }: Context
  ) => await dataSources.userAPI.getUser(email!),
};

export default resolver;
