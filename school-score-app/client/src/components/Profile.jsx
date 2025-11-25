import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <p>Hi! Profile page content goes here.</p>
      </div>
    </div>
  );
}

export default Profile;
