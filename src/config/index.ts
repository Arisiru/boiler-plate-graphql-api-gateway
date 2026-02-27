export interface Config {
  port: number;
  userEndPoint?: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || '8080', 10),
  userEndPoint: process.env.USER_URL,
};

export default config;
