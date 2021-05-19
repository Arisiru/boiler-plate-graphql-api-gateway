const addUserResolver = require('./addUser/resolver');

const resolvers = {
  Mutation: {
    ...addUserResolver,
  },
};

module.exports = resolvers;
