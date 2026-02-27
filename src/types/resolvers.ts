import UserResolver from './user/resolver';
import LivecheckResolver from './livecheckResult/resolver';

const resolvers = {
  ...UserResolver,
  ...LivecheckResolver,
};

export default resolvers;
