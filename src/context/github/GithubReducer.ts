import {
  GithubUserActions,
  GithubUserActionTypes,
  GithubUserState,
} from './GithubActions';

export const githubReducer = (
  state: GithubUserState,
  action: GithubUserActions
) => {
  switch (action.type) {
    case GithubUserActionTypes.SetUsers:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };
    case GithubUserActionTypes.SetUserAndRepos:
      return {
        ...state,
        user: action.payload.user,
        userRepos: action.payload.userRepos,
        loading: false,
      };
    case GithubUserActionTypes.SetUserRepos:
      return {
        ...state,
        userRepos: action.payload.userRepos,
        loading: false,
      };
    case GithubUserActionTypes.SetUser:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case GithubUserActionTypes.SetLoading:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GithubUserActionTypes.ClearUserResults:
      return {
        ...state,
        users: undefined,
      };
    default:
      return state;
  }
};
