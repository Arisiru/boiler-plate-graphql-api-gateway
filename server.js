('use strict');
require('dotenv').config();
const config = require('./src/config');
const { ApolloServer, AuthenticationError } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

const QueryDefs = require('./src/queries/schema');
const QueryResolvers = require('./src/queries/resolvers');

const MutationDefs = require('./src/mutations/schema');
const MutationResolvers = require('./src/mutations/resolvers');

const TypeDefs = require('./src/types/schema');
const TypeResolvers = require('./src/types/resolvers');

const dataSourcesConstructor = require('./src/dataSources/constructor');

const schema = makeExecutableSchema({
  typeDefs: [...QueryDefs, ...MutationDefs, ...TypeDefs],
  resolvers: {
    ...QueryResolvers,
    ...MutationResolvers,
    ...TypeResolvers,
  },
});

const { verifyAccessToken, getUser } = require('./src/middleware/auth');

const server = new ApolloServer({
  schema,
  debug: false,
  dataSources: dataSourcesConstructor,
  cors: true,
  context: async ({ req }) => {
    const accessToken = req.headers.authorization;
    var user = {};
    try {
      const accessData = await verifyAccessToken(accessToken);
      user = getUser(accessData);
    } catch (eX) {
      console.error(eX);
      throw new AuthenticationError('You must be logged in');
    }

    return { user };
  },
});

server.listen({ port: config.port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
