import { RESTDataSource } from '@apollo/datasource-rest';
import config from '../../config';
import type { User } from '../../types/graphql';

export class UserAPI extends RESTDataSource {
  override baseURL = config.userEndPoint ?? '';

  userReducer = (user: Record<string, unknown>): User => ({
    email: user.email as string,
    firstName: user.firstName as string,
    lastName: user.lastName as string,
    role: user.role as string | undefined,
    photo: user.photo as string | undefined,
  });

  async getUser(email: string): Promise<User> {
    const response = await this.get<Record<string, unknown>>(`/user/${email}`);
    return this.userReducer(response);
  }

  async addUser(email: string): Promise<User> {
    const response = await this.post<Record<string, unknown>>(`/user/${email}`);
    return this.userReducer(response);
  }
}
