export interface User {
  email: string;
  firstName: string;
  lastName: string;
  role?: string;
  photo?: string;
}

export interface LivecheckResult {
  status: string;
}

export interface UserAPI {
  getUser(email: string): Promise<User>;
  addUser(email: string): Promise<User>;
}

export interface DataSources {
  userAPI: UserAPI;
}

export interface ContextUser {
  email: string;
}

export interface Context {
  user: ContextUser;
  dataSources: DataSources;
}
