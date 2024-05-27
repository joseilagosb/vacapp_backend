export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;
      POSTGRES_HOST: string;
      POSTGRES_PORT: string;
      NODE_ENV: "development" | "production";
      JWT_SECRET: string;
    }
  }
}
