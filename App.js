import React, { useState } from 'react';
import './App.css';
import Navbar from './Navebar';
import UserCardGrid from './UserCardGrid';

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <button className="get-users-btn" onClick={getUsers}>
        Get Users
      </button>
      <UserCardGrid users={users} />
    </div>
  );
}

export default App;