import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./home.css";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersHandle();
  }, []);

  const getUsersHandle = async () => {
    const result = await axios.get("https://reqres.in/api/users?page=1");
    setUsers(result.data.data);
  };

  const deleteUser = async (id) =>{
    await axios.delete(`https://reqres.in/api/users/${id}`)
    getUsersHandle()
  }
  return (
    <div>
      <div className="container">
        <div className="heading">
          <p>User Details</p>
        </div>
        <div className="buttons">
          <Link className="btn add-user-btn" to='/users/add'>Add New User</Link>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th className="email-cell">Email</th>
                <th>Name</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="email-cell">{user.email}</td>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>
                    <img className="avatar" src={user.avatar} alt={"imgesa"} />
                  </td>
                  <td>
                    <Link className="btn view-btn" to={`users/${user.id}`}>View</Link>
                    <Link className="btn edit-btn" to={`users/edit/${user.id}`}>Edit</Link>
                    <Link className="btn delete-btn" to="/" onClick={()=>deleteUser(user.id)}>Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
