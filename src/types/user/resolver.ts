import type { User } from '../../types/graphql';

const userResolver = {
  User: {
    email: ({ email }: User) => email,
    firstName: ({ firstName }: User) => firstName,
    lastName: ({ lastName }: User) => lastName,
    role: ({ role }: User) => role,
    photo: ({ photo }: User) => photo,
  },
};

export default userResolver;
