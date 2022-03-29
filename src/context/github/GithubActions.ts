import { GithubUser } from '../../shared/models/githubUser';
import { GithubUserDetail } from '../../shared/models/githubUserDetailed';
import { GithubUserRepo } from '../../shared/models/githubUserRepo';
import { ActionMap } from '../actionMap';

export enum GithubUserActionTypes {
  SetUsers = 'SET_USERS',
  SetUserRepos = 'SET_USER_REPOS',
  SetUserAndRepos = 'SET_USER_AND_REPOS',
  SetUser = 'SET_USER',
  ClearUserResults = 'CLEAR_USER_RESULTS',
  SetLoading = 'SET_LOADING',
}

// GithubUser
export interface GithubUserState {
  users?: GithubUser[];
  userRepos?: GithubUserRepo[];
  user?: GithubUserDetail;
  loading?: boolean;
}

export type GithubUserPayload = {
  [GithubUserActionTypes.SetUsers]: {
    users: GithubUser[];
  };
  [GithubUserActionTypes.SetUserAndRepos]: {
    user: GithubUserDetail;
    userRepos: GithubUserRepo[];
  };
  [GithubUserActionTypes.SetUserRepos]: {
    userRepos: GithubUserRepo[];
  };
  [GithubUserActionTypes.SetUser]: {
    user: GithubUserDetail;
  };
  [GithubUserActionTypes.SetLoading]: {
    loading: boolean;
  };
  [GithubUserActionTypes.ClearUserResults]: {};
};

export type GithubUserActions =
  ActionMap<GithubUserPayload>[keyof ActionMap<GithubUserPayload>];
