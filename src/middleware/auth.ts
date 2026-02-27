import type { ContextUser } from '../types/graphql';

export const verifyAccessToken = async (_accessToken: string | undefined): Promise<boolean> => true;

export const getUser = (_accessData: unknown): ContextUser => ({
  email: 'test@test.com',
});
