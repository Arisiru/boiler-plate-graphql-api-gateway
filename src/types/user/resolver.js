const userResolver = {
  User: {
    email: ({ email }) => email,
    firstName: ({ firstName }) => firstName,
    lastName: ({ lastName }) => lastName,
    role: ({ role }) => role,
    photo: ({ photo }) => photo,
  },
};

module.exports = userResolver;
