import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { AlertMessageType } from '../../context/alert/AlertActions';
import AlertContext from '../../context/alert/AlertContext';
import { GithubUserActionTypes } from '../../context/github/GithubActions';
import { GithubContext } from '../../context/github/GithubContext';
import { searchUsers } from '../../context/github/GithubServices';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { alertMessage, setAlert } = useContext(AlertContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debugger;

    if (text === '') {
      setAlert('Please enter something', AlertMessageType.Error);
    } else {
      const users = await searchUsers(text);
      dispatch({
        type: GithubUserActionTypes.SetLoading,
        payload: { loading: true },
      });
      dispatch({ type: GithubUserActionTypes.SetUsers, payload: { users } });

      setText('');
    }
  };

  const clearResults = () => {
    dispatch({ type: GithubUserActionTypes.ClearUserResults, payload: {} });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users && users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearResults}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
