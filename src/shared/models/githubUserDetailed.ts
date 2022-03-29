import { GithubUser } from './githubUser';

export interface GithubUserDetail extends GithubUser {
  name: string;
  hireable: boolean;
  bio: string;
  location: string;
  blog: string;
  twitter_username: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}
