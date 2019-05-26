const defaults: IConfig = {
  PORT: 3000,
  TMDB_API_KEY: "17ffeed51af342618629bcf28529643b"
};

interface IConfig {
  PORT: number;
  TMDB_API_KEY: string;
}

const appConfig: IConfig = Object.entries(defaults).reduce(
  (config: any, [key, value]) => {
    config[key] = process.env[key] || value;
    return config;
  },
  {}
);

export default appConfig;
