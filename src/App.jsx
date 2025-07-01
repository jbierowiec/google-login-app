// src/App.jsx
import React, { useState } from "react";
import LoginButton from "./components/LoginButton";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reset back to login screen
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <h1>Google Login Demo</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <img src={user.photoURL} alt="profile" />
          <br />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginButton onLogin={setUser} />
      )}
    </div>
  );
}

export default App;
