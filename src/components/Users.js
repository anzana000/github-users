import React from "react";
import { useEffect,useState } from "react";
import "./Users.css";


const Users = ({ login, url }) => {
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, [])
  
  const getUserDetails = () => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((data) => setUserDetail(data))
    .then((error) => console.log(error))
  }
  return (
    <div className="user-container">
      <img src={url} alt={login} />
      <span className="user-url">https://www.google.com/</span>
      <span className="login-name">{ login}</span>
      <div className="info">
        <div><span className="label">Followers</span><span className="value">{ userDetail.followers}</span></div>
        <div><span className="label">Following</span><span className="value">{ userDetail.following}</span></div>
      </div>
      <a href={userDetail.blog}><input type="button" value="See More" /></a>
    </div>
  );
};

export default Users;

