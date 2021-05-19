const schema = require('./schema');
const resolver = require('./resolver');
const mockUsers = require('../../mock/users');

describe('[Type.User]', () => {
  it('should compile schema', async () => {
    expect(schema).toMatchSnapshot();
  });

  const user = Object.freeze(mockUsers[0]);

  it('maps user to "firstName" property', () => {
    expect(resolver.User.firstName(user)).toEqual(user.firstName);
  });

  it('maps user to "lastName" property', () => {
    expect(resolver.User.lastName(user)).toEqual(user.lastName);
  });

  it('maps user to "email" property', () => {
    expect(resolver.User.email(user)).toEqual(user.email);
  });

  it('maps user to "role" property', () => {
    expect(resolver.User.role(user)).toEqual(user.role);
  });

  it('maps user to "photo" property', () => {
    expect(resolver.User.photo(user)).toEqual(user.photo);
  });
});
