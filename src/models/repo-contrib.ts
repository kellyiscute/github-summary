export type RepoContributionsType = IRepoContrib[];

export interface IRepoContrib {
  author: IAuthor;
  weeks: IWeek[];
  total: number;
}

export interface IAuthor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gavatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User";
  site_admin: boolean;
}

export interface IWeek {
  w: number;
  a: number;
  d: number;
  c: number;
}
