const defaults: Config = {
  PORT: 3000,
  TMDB_API_KEY: "17ffeed51af342618629bcf28529643b"
};

interface Config {
  PORT: number;
  TMDB_API_KEY: string;
}

const config: Config = Object.entries(defaults).reduce(
  (config: any, [key, value]) => {
    config[key] = process.env[key] || value;
    return config;
  },
  {}
);

export default config;
