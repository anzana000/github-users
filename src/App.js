import React, { useState, useEffect } from "react";
import Users from "./components/Users";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .then((err) => console.log(err));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {users.map((user) => (
          <Users login={user.login} key={user.id} url={user.avatar_url} 
          followers_url={user} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;