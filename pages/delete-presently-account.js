import React, { useState } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      // Here you'd call your API endpoint to delete the user account
      const response = await axios.post("/api/deleteAccount", { email });

      if (response.status === 200) {
        setMessage("Your account has been deleted.");
      } else {
        setMessage("There was an error deleting your account.");
      }
    } catch (error) {
      setMessage(
        `Error: ${
          error.response ? error.response.data.message : "Unknown error"
        }`
      );
    }
  };

  return (
    <div>
      <h2>Delete Your Account</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Account</button>
      {message && <p>{message}</p>}
    </div>
  );
}
