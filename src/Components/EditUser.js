import React, { useState,useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./addUser.css";

function EditUser() {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
  });

  const { email, first_name, last_name, avatar } = user;

  const inputChangeHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    await axios.put(`https://reqres.in/api/users/${id}`, user);
    history.push("/");
  };

  const getUser = async ()=>{
      const result = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(result.data.data)
  }

  useEffect(()=>{
      getUser()
  },[])
   
  return (
    <div className="form-container">
      <div className="user-header">
        <p>Edit User</p>
      </div>
      <form className="form" onSubmit={(e) => submitHandle(e)}>
        <label htmlFor="">Email: </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => inputChangeHandle(e)}
          required
        />

        <label htmlFor="">First Name: </label>
        <input
          className="input"
          type="text"
          name="first_name"
          id="firstName"
          value={first_name}
          placeholder="Enter First Name"
          onChange={(e) => inputChangeHandle(e)}
          required
        />

        <label htmlFor="">Last Name: </label>
        <input
          className="input"
          type="text"
          name="last_name"
          id="lastName"
          value={last_name}
          placeholder="Enter Last Name"
          onChange={(e) => inputChangeHandle(e)}
          required
        />

        {/* <label htmlFor="file">Image: </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          value={avatar}
          onChange={(e) => inputChangeHandle(e)}
          required
        /> */}

        <div></div>
        <div className="form-buttons">
          <Link className="form-btn btn-cancel" to="/">
            Cancel
          </Link>
          <button type="submit" className="form-btn btn-submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
