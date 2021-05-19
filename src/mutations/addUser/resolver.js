const resolvers = {
  addUser: async (parent, { email }, { dataSources }) =>
    await dataSources.userAPI.addUser(email),
};

module.exports = resolvers;
