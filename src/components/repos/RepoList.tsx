import React, { FC } from 'react';
import { GithubUserRepo } from '../../shared/models/githubUserRepo';
import RepoItem from './RepoItem';

const RepoList: FC<RepoListProps> = ({ userRepos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Top Repositories</h2>
        {userRepos &&
          userRepos.length > 0 &&
          userRepos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};

interface RepoListProps {
  userRepos: GithubUserRepo[] | undefined;
}

export default RepoList;
