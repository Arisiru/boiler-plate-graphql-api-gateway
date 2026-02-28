import 'dotenv/config';
import { UserAPI } from './userAPI';
import { users } from '../../mock/users';

interface MockRESTDataSource {
  get: jest.Mock;
  post: jest.Mock;
}

jest.mock('@apollo/datasource-rest', () => {
  class MockRESTDataSource {
    baseURL = '';
    get = jest.fn(() => users[0]);
    post = jest.fn(() => users[0]);
  }
  return {
    RESTDataSource: MockRESTDataSource,
  };
});

describe('UserAPI', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getUser', () => {
    it('should call GET user API', async () => {
      const userAPI = new UserAPI();
      const email = 'joel@test.com';
      await userAPI.getUser(email);
      expect((userAPI as unknown as MockRESTDataSource).get).toHaveBeenCalledWith(
        `/user/${email}`
      );
    });

    it('should return the data component of the response', async () => {
      const responseItem = users[0];
      const userAPI = new UserAPI();
      const email = 'joel@test.com';

      expect(await userAPI.getUser(email)).toStrictEqual(responseItem);
    });
  });

  describe('addUser', () => {
    it('should call POST user API', async () => {
      const userAPI = new UserAPI();
      const email = 'joel@test.com';
      await userAPI.addUser(email);
      expect((userAPI as unknown as MockRESTDataSource).post).toHaveBeenCalledWith(
        `/user/${email}`
      );
    });

    it('should return the data component of the response', async () => {
      const responseItem = users[0];
      const userAPI = new UserAPI();
      const email = 'joel@test.com';

      expect(await userAPI.addUser(email)).toStrictEqual(responseItem);
    });
  });
});
