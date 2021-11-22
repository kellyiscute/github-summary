declare module NodeJS {
  interface ProcessEnv {
    GITHUB_PAT?: string;
    GITHUB_USERNAME?: string;
  }
}
