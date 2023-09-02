import Axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const AdminActiveTasklistDetail = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/getActivedTaskList');
      setUsers(response.data); // Assuming the response data is an array of users
      console.log("resssss"+JSON.stringify(response.data));
      
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  return (
    <div className='container'>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Task ID</th>
            <th scope="col">Task Name</th>
            <th scope="col">Process Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? ( // Add a check for the array length
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.processName}</td>
                <td>
                                    <Link
                                        className="btn btn-info"
                                        to={{
                                            pathname: `/ActiveTaskList/${user.id}`, // Pass the task ID in the URL
                                            state: { taskId: user.id } // Pass the task ID in the state
                                        }}
                                    >
                                        View
                                    </Link>
                                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AdminActiveTasklistDetail;
