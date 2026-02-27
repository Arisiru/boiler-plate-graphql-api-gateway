import 'dotenv/config';
import { RESTDataSource } from '@apollo/datasource-rest';
import { UserAPI } from './userAPI';
import { users } from '../../mock/users';

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
      expect(userAPI.get).toHaveBeenCalledWith(`/user/${email}`);
    });

    it('should return the data component of the response', async () => {
      const responseItem = users[0];
      const userAPI = new UserAPI();
      const email = 'joel@test.com';

      expect(await userAPI.getUser(email)).toStrictEqual(responseItem);
    });
  });

  describe('addUsers', () => {
    it('should return the data component of the response', async () => {
      const userAPI = new UserAPI();
      const email = 'joel@test.com';
      await userAPI.addUser(email);
      expect(userAPI.post).toHaveBeenCalledWith(`/user/${email}`);
    });

    it('should return the data component of the response', async () => {
      const responseItem = users[0];
      const userAPI = new UserAPI();
      const email = 'joel@test.com';

      expect(await userAPI.addUser(email)).toStrictEqual(responseItem);
    });
  });
});
