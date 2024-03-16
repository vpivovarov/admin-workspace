declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV?: "development" | "production";
      POSTGRES_HOST?: string;
      POSTGRES_USER?: string;
      POSTGRES_PASSWORD_FILE?: string;
      POSTGRES_DB?: string;
    }
  }
}

export {};
