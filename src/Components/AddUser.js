import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./addUser.css";

function AddUser() {
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const { email, first_name, last_name, avatar } = user;

  const inputChangeHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const submitHandle = async (e) => {
    e.preventDefault();
    await axios.post('https://reqres.in/api/users',user);
    history.push('/')
  };

  return (
    <div className="form-container">
      <div className="user-header">
        <p>Add User</p>
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

        <label htmlFor="file">Image: </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          value={avatar}
          onChange={(e) => inputChangeHandle(e)}
          required
        />

        <div></div>
        <div className="form-buttons">
          <Link className="form-btn btn-cancel" to="/">
            Cancel
          </Link>
          <button type="submit" className="form-btn btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
