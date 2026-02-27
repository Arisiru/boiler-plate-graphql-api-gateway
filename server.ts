import 'dotenv/config';
import config from './src/config';
import { ApolloServer, AuthenticationError } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';

import QueryDefs from './src/queries/schema';
import QueryResolvers from './src/queries/resolvers';
import MutationDefs from './src/mutations/schema';
import MutationResolvers from './src/mutations/resolvers';
import TypeDefs from './src/types/schema';
import TypeResolvers from './src/types/resolvers';
import { dataSourcesConstructor } from './src/dataSources/constructor';
import { verifyAccessToken, getUser } from './src/middleware/auth';

const schema = makeExecutableSchema({
  typeDefs: [...QueryDefs, ...MutationDefs, ...TypeDefs],
  resolvers: {
    ...QueryResolvers,
    ...MutationResolvers,
    ...TypeResolvers,
  },
});

const server = new ApolloServer({
  schema,
  debug: false,
});

async function main(): Promise<void> {
  const { url } = await startStandaloneServer(server, {
    listen: { port: config.port },
    context: async ({ req }) => {
      const accessToken = req.headers.authorization;
      let user = { email: '' };
      try {
        const accessData = await verifyAccessToken(accessToken);
        user = getUser(accessData);
      } catch (eX) {
        console.error(eX);
        throw new AuthenticationError('You must be logged in');
      }

      const dataSources = dataSourcesConstructor();
      return { user, dataSources };
    },
  });
  console.log(`🚀  Server ready at ${url}`);
}

main();
