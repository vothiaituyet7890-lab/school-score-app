import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const token = localStorage.getItem("token");

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents(res.data);
    } catch (err) {
      alert("Failed to fetch students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">My Students</h1>
        <StudentForm onAdd={fetchStudents} />
        <StudentList students={students} onUpdate={fetchStudents} />
      </div>
    </div>
  );
}

export default Dashboard;
