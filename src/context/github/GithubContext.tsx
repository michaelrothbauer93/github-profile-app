import React, { createContext, FC, Reducer, useReducer } from 'react';
import { GithubUser } from '../../shared/models/githubUser';
import { GithubUserDetail } from '../../shared/models/githubUserDetailed';
import { GithubUserRepo } from '../../shared/models/githubUserRepo';
import { GithubUserActions, GithubUserState } from './GithubActions';
import { githubReducer } from './GithubReducer';

interface IGithubContextProps {
  users?: GithubUser[];
  user?: GithubUserDetail;
  userRepos?: GithubUserRepo[];
  loading?: boolean;
  dispatch: React.Dispatch<GithubUserActions>;
}
const initialState: GithubUserState = {
  users: [],
  userRepos: [],
  user: undefined,
  loading: false,
};

export const GithubContext = createContext<IGithubContextProps>(
  {} as IGithubContextProps
);

interface GithubProviderProps {
  children: JSX.Element;
}

export const GithubProvider: FC<GithubProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<
    Reducer<GithubUserState, GithubUserActions>
  >(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
