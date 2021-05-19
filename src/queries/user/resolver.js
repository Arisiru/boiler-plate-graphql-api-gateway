resolver = {
  user: async (_parent, { email }, { dataSources }) =>
    await dataSources.userAPI.getUser(email),
};

module.exports = resolver;
