import React from 'react';
import Navbar from '../components/Navbar';
import UserTable from '../components/UserTable';

const ListUsers = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <UserTable />
      </div>
    </div>
  );
};

export default ListUsers;
