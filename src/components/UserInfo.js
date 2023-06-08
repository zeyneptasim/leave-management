import React from 'react';
import { useUserContext } from '../context/UserContext'
import userImage from '../assets/girl.webp'

const UserInfo = ({ user }) => {
    const { currentUser } = useUserContext()
    const userDetails = {
        firstName: 'Zeynep',
        lastName: 'Shukri',
        address: 'Plovdiv, Makedonia',
    }
  return (
    <div className="container profile">
      <div className="row justify-content-md-center">
        <div className="col-xs-8 col-md-5">
    
            <div className="profile-page card p-3">
            <h1>Добре дошли в нашата система,{userDetails.firstName} {userDetails.lastName}!</h1>
            <img src={userImage} alt="{userDetails.firstName}" className='user-img' />

            <div className="user-details">
                <p>Имейл: {currentUser.email}</p>
                <p>Адрес: {userDetails.address}</p>
                {/* Add more user details here */}
            </div>
            </div>
        </div>

        </div>
    </div>
        
  );
  
};

export default UserInfo;
