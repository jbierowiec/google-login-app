// src/components/LoginButton.jsx
import React from "react";
import { auth, provider, signInWithPopup } from "../firebase";

function LoginButton({ onLogin }) {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onLogin(result.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}

export default LoginButton;
