import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.username}</h2>
      <h3>{user.email}</h3>
      <h4>Reading List:</h4>
      <ul>
        {user.readingList.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
      <h4>Read Books:</h4>
      <ul>
        {user.readBooks.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
