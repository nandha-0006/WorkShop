import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Table1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8080/getdetail");
      setData(response.data);
    }
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (id, newData) => {
    try {
      await axios.put(`http://localhost:8080/update/${id}`, newData);
      setData(
        data.map((item) => (item.id === id ? { ...item, ...newData } : item))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>BloodGroup</th>
          <th>Mobile_no</th>
          <th>Place</th>
          <th>HealthIssues</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.bloodGroup}</td>
            <td>{user.mobile_no}</td>
            <td>{user.place}</td>
            <td>{user.healthissues}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => deleteData(user.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const newData = prompt("Enter new data:");
                  if (newData) {
                    updateData(user.id, { id: newData });
                  }
                }}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
