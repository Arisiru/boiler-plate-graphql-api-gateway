import LivecheckResolver from './livecheck/resolver';
import UserResolver from './user/resolver';

const resolvers = {
  Query: {
    ...LivecheckResolver,
    ...UserResolver,
  },
};

export default resolvers;
