const config = require('../../config');

resolver = {
  livecheck: async () => ({
    status: 'OK',
  }),
};

module.exports = resolver;
