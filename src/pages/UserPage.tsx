import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Initialize Firebase authentication
const auth = getAuth();

const UserPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // User type from Firebase Authentication
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // If logged in, set user data
        setLoading(false);
      } else {
        navigate("/"); // If not logged in, redirect to login page
      }
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while checking auth state
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>User Profile</h1>
      {user ? (
        <>
          <p>Welcome, {user.displayName || "User"}!</p>
          <p>Email: {user.email}</p>
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="User"
            style={{ borderRadius: "50%", marginTop: "20px" }}
          />
          <button
            onClick={() => auth.signOut()}
            style={{ padding: "10px 20px", marginTop: "20px", backgroundColor: "red", color: "white" }}
          >
            Log Out
          </button>
        </>
      ) : (
        <p>No user found</p>
      )} 
      <Link to="/design"><button type="button" style={{ marginTop: "20px" }}>Click Me!</button></Link>

      
    </div>
  );
};

export default UserPage;
