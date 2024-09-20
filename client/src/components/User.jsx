import React from 'react';

function User({ username, year }) {
  return (
    <div className="p-4 bg-gray-200 rounded">
      <h2 className="font-semibold">Username: {username}</h2>
      <p>Year: {year}</p>
    </div>
  );
}

export default User;
