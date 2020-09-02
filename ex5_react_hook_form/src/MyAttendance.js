import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Attendance from "./Attendance";

const MyAttendance = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=10&nat=us")
      .then(response => {
        setUsers(response.data.results);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <div>
        {users.map(user => (
          <Attendance key={user.login.uuid} {...user} />
        ))}
      </div>
    </div>
  );
};

export default MyAttendance;
