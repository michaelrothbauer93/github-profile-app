import axios from 'axios';
import { GithubUser } from '../../shared/models/githubUser';
import { GithubUserDetail } from '../../shared/models/githubUserDetailed';
import { GithubUserRepo } from '../../shared/models/githubUserRepo';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get search results
export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);

  return response.data.items as GithubUser[];
};

// Get a singular user
export const getUser = async (login: string) => {
  const response = await github.get(`${GITHUB_URL}/users/${login}`);

  if (response.status === 404) {
    window.location.href = '/notfound';
  }

  return response.data as GithubUserDetail;
};

// Get a singular user repos
export const getUserRepos = async (login: string) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

  const response = await github.get(
    `${GITHUB_URL}/users/${login}/repos?${params}`
  );

  return response.data as GithubUserRepo[];
};

export const getUserAndRepos = async (login: string) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return {
    user: user.data as GithubUserDetail,
    userRepos: repos.data as GithubUserRepo[],
  };
};
