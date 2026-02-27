import resolver from './resolver';
import schema from './schema';
import { users } from '../../mock/users';

describe('[Mutation.addUser]', () => {
  it('should compile schema', async () => {
    expect(schema).toMatchSnapshot();
  });

  const mockContext = {
    dataSources: {
      userAPI: {
        addUser: jest.fn(),
      },
    },
  };

  const { addUser } = mockContext.dataSources.userAPI;
  addUser.mockReturnValue(users.slice(0, 1));

  it('should forward mock with no changes', async () => {
    const mockParameters = {
      email: 'joel@test.com',
    };
    const res = await resolver.addUser(null, mockParameters, mockContext);
    expect(res).toEqual(users.slice(0, 1));
  });

  it('should call corresponding data source with query arguments', async () => {
    const mockParameters = {
      email: 'joel@test.com',
    };

    await resolver.addUser(null, mockParameters, mockContext);
    expect(addUser).toBeCalled();
    expect(addUser).toBeCalledWith(mockParameters.email);
  });
});
