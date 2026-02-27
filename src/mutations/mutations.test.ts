import resolvers from './resolvers';
import schema from './schema';

describe('[Mutations]', () => {
  it('should compile schema', async () => {
    expect(schema).toBeDefined();
  });

  it('should compile resolvers', async () => {
    expect(resolvers).toBeDefined();
  });
});
