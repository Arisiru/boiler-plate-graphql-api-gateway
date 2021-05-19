const UserResolver = require('./user/resolver');
const LivecheckResolver = require('./livecheckResult/resolver');

const resolvers = {
  ...UserResolver,
  ...LivecheckResolver,
};

module.exports = resolvers;
