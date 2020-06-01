export const configuration = {
  dev: {
    baseURL: "http://localhost:8000",
  },
  prod: {
    baseURL: "",
  },
};

const config = process.env.NODE_ENV === "production" ? configuration.prod : configuration.dev;

export default config;
