import resolver from './resolver';
import schema from './schema';
import { users } from '../../mock/users';

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
  getUser.mockReturnValue(users.slice(0, 1));
  it('should forward mock with no changes', async () => {
    const res = await resolver.user(null, {}, mockContext);
    expect(res).toEqual(users.slice(0, 1));
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
