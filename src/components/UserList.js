import React from 'react';

function UserList({ userList }) {
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

  function getUserItems() {
    return userList.map((user, index) => {
      const color = colors[index % colors.length];
      const listItemStyle = {
        backgroundColor: color,
        color: 'white',
      };
      return (
        <li key={user.id} className="list-group-item" style={listItemStyle}>
          {user.name}
        </li>
      );
    });
  }
  
  return <ul className="list-group user-list">{getUserItems()}</ul>;
}

export default UserList;
