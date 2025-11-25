import React, { useState } from "react";
import axios from "axios";

function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students", { name, score: parseFloat(score) }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setName(""); setScore("");
      onAdd();
    } catch {
      alert("Failed to add student");
    }
  };

  return (
    <form className="mb-6 flex gap-2" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" className="border p-2 rounded" value={name} onChange={(e)=>setName(e.target.value)} required/>
      <input type="number" placeholder="Score" className="border p-2 rounded" value={score} onChange={(e)=>setScore(e.target.value)} required/>
      <button className="bg-green-500 text-white px-4 rounded hover:bg-green-600">Add</button>
    </form>
  );
}

export default StudentForm;
