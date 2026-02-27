import { UserAPI } from './user/userAPI';
import type { DataSources } from '../types/graphql';

export const dataSourcesConstructor = (): DataSources => ({
  userAPI: new UserAPI(),
});
