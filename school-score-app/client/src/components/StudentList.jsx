import React from "react";
import axios from "axios";

function StudentList({ students, onUpdate }) {
  const token = localStorage.getItem("token");

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onUpdate();
    } catch {
      alert("Failed to delete student");
    }
  };

  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Score</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td className="border px-4 py-2">{s.name}</td>
            <td className="border px-4 py-2">{s.score}</td>
            <td className="border px-4 py-2">
              <button onClick={() => handleDelete(s.id)} className="bg-red-500 px-2 py-1 text-white rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
