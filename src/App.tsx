import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/homepage";
import UserPage from "./pages/UserPage"; // Your user page component
import Design from "./pages/design";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </Router>
  );
};

export default App;
