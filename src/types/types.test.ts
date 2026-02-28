import resolvers from './resolvers';
import schema from './schema';

describe('[Types]', () => {
  it('should compile schema', async () => {
    expect(schema).toBeDefined();
  });

  it('should compile resolvers', async () => {
    expect(resolvers).toBeDefined();
  });
});
