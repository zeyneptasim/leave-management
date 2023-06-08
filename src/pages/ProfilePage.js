import React from 'react';
import UserInfo from '../components/UserInfo';


const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
    email: 'johndoe@example.com',
    age: 30,
    location: 'New York',
    // Add more user details here
  };

  return (
    <div className="app">
      <UserInfo user={user} />
    </div>
  );
};

export default ProfilePage;
