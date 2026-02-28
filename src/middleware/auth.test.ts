import * as middleware from './auth';

describe('[Middleware.auth]', () => {
  describe('getUser', () => {
    it('should have verify function', async () => {
      expect(middleware.verifyAccessToken).toBeDefined();
      expect(middleware.verifyAccessToken).toBeInstanceOf(Function);
    });
    it('should validate token', async () => {
      const testToken = {};
      expect(await middleware.verifyAccessToken(testToken as unknown as string)).toEqual(
        true
      );
    });
  });

  describe('getUser', () => {
    it('should have getUser function', async () => {
      expect(middleware.getUser).toBeDefined();
      expect(middleware.getUser).toBeInstanceOf(Function);
    });

    it('should map token to user', async () => {
      const testToken = {};
      expect(middleware.getUser(testToken)).toEqual({
        email: 'test@test.com',
      });
    });
  });
});
