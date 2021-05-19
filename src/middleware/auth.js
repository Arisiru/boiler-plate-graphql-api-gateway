// implement token verification/validation
const verifyAccessToken = async accessToken => true;

// implement toke decode
const getUser = accessData => ({
  email: 'test@test.com',
});

module.exports = {
  verifyAccessToken,
  getUser,
};
