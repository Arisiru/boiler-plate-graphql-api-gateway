import resolver from './resolver';
import schema from './schema';

describe('[Query.livecheck]', () => {
  it('should compile schema', async () => {
    expect(schema).toMatchSnapshot();
  });

  it('should resolve field status', async () => {
    const result = await resolver.livecheck();

    expect(result.status).toEqual('OK');
  });
});
