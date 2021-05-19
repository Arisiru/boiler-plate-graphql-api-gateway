const resolver = require('./resolver');
const schema = require('./schema');
const mockUsers = require('../../mock/users');
describe('[Query.user]', () => {
  it('should compile schema', async () => {
    expect(schema).toMatchSnapshot();
  });
  const mockContext = {
    dataSources: {
      userAPI: {
        getUser: jest.fn(),
      },
    },
  };

  const { getUser } = mockContext.dataSources.userAPI;
  getUser.mockReturnValue(mockUsers.slice(0, 1));
  it('should forward mock with no changes', async () => {
    const res = await resolver.user(null, {}, mockContext);
    expect(res).toEqual(mockUsers.slice(0, 1));
  });

  it('should call corresponding data source with query arguments engagementId', async () => {
    const mockParameters = {
      email: 'joel@test.com',
    };

    await resolver.user(null, mockParameters, mockContext);
    expect(getUser).toBeCalled();
    expect(getUser).toBeCalledWith(mockParameters.email);
  });
});
