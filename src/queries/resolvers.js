const LivecheckResolver = require('./livecheck/resolver');
const UserResolver = require('./user/resolver');

const resolvers = {
  Query: {
    ...LivecheckResolver,
    ...UserResolver,
  },
};

module.exports = resolvers;
