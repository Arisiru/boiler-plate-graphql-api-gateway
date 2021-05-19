const { RESTDataSource } = require('apollo-datasource-rest');
const config = require('../../config');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.userEndPoint;
  }

  userReducer = user => ({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    photo: user.photo,
  });

  async getUser(email) {
    const response = await this.get(`/user/${email}`);
    return this.userReducer(response);
  }

  async addUser(email) {
    const response = await this.post(`/user/${email}`);
    return this.userReducer(response);
  }
}

module.exports = UserAPI;
