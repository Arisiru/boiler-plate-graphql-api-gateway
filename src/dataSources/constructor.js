const UserAPI = require('./user/userAPI');

const dataSourcesConstructor = () => ({
  userAPI: new UserAPI(),
});

module.exports = dataSourcesConstructor;
