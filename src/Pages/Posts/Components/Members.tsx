import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { thunkSelectedUser } from 'thunk/thunkUsers';
import { AppState } from 'store';
import { Users } from 'store/userFeeds/types';
import Cards from './Cards';
import Loader from 'Components/Loader';

const Members: React.FC<{
  onSelectedPost: (data: Users) => void;
}> = ({ onSelectedPost }) => {
  const { users, user, isLoading } = useSelector((state: AppState) => ({
    ...state.usersLists,
    ...state.currentUser,
  }));
  const dispatch = useDispatch();
  const onSelectedUser = (data: Users) => {
    dispatch(thunkSelectedUser(data));
  };
  return (
    <div className='member-lists'>
      <h2>Members</h2>
      <Loader isLoading={isLoading} />
      {!isLoading &&
        users.map((data: Users) => {
          return (
            <Cards
              key={data.id}
              avatar={data.imgSrc}
              header={data.name}
              description={data.company.name}
              onSelect={() => {
                onSelectedUser(data);
                onSelectedPost(data);
              }}
              isSelected={data.id === user.id}
            />
          );
        })}
    </div>
  );
};

export default Members;
