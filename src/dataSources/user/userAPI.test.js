require('dotenv').config();
const { RESTDataSource } = require('apollo-datasource-rest');
const UserAPI = require('./userAPI');
const mockUsers = require('../../mock/users');

jest.mock('apollo-datasource-rest', () => {
  class MockRESTDataSource {
    constructor() {
      this.baseUrl = '';
      this.get = jest.fn(() => mockUsers[0]);
      this.post = jest.fn(() => mockUsers[0]);
    }
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
      const responseItem = mockUsers[0];
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
      const responseItem = mockUsers[0];
      const userAPI = new UserAPI();
      const email = 'joel@test.com';

      expect(await userAPI.addUser(email)).toStrictEqual(responseItem);
    });
  });
});
