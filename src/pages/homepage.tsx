import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3mCoheIatuEtVXEcg22iXJxKfSPrzVAM",
  authDomain: "e-combine-study.firebaseapp.com",
  projectId: "e-combine-study",
  storageBucket: "e-combine-study.firebasestorage.app",
  messagingSenderId: "674095716604",
  appId: "1:674095716604:web:c8a5bbb5a384e0199d1f79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleGoogleLogin = async () => {
    setError(null); // Reset error state

    try {
      // Sign in with Google using a popup
      await signInWithPopup(auth, googleProvider);
      alert("Login successful!");
      navigate("/design"); // Navigate to UserPage after successful login
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // If the error is an instance of Error, safely access the message
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Login with Google</h1>
      <button onClick={handleGoogleLogin} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Login with Google
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
