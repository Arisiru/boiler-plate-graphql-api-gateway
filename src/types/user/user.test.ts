import resolver from './resolver';
import schema from './schema';

describe('[Type.User]', () => {
  it('should compile schema', async () => {
    expect(schema).toMatchSnapshot();
  });

  const user = Object.freeze({
    email: 'test@test.com',
    firstName: 'Test',
    lastName: 'User',
    role: 'Admin',
    photo: 'http://photo',
  });

  it('maps User to "email" property', () => {
    expect(resolver.User.email(user)).toEqual(user.email);
  });
});
