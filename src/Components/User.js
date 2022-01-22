import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './user.css';

import axios from "axios";

function User() {
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
  });

  const {id} = useParams();
  useEffect(()=>{
      getUser()
  },[])
  const getUser = async ()=>{
    const result = await axios.get(`https://reqres.in/api/users/${id}`);
    setUser(result.data.data)
}

  return (
    <div className="user-container">
        <Link className="user-btn" to='/'>Go Back To Home</Link>
        <div className="user-details">
            <img src={user.avatar} alt="imgofUser" />
            <ul>
                <li><span>ID: </span>{user.id}</li>
                <li><span>Name: </span>{`${user.first_name} ${user.last_namr}`}</li>
                <li><span>Email: </span>{user.email}</li>
            </ul>
        </div>
    </div>
  );
}

export default User;
