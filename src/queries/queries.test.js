const resolvers = require('./resolvers');
const schema = require('./schema');

describe('[Queries]', () => {
  it('should compile schema', async () => {
    expect(schema).toBeDefined();
  });

  it('should compile resolvers', async () => {
    expect(resolvers).toBeDefined();
  });
});
