import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home page
import Success from "./pages/Success"; // Success page after checkout
import Error from "./pages/Error"; // Error page for undefined routes
import { ToastContainer } from 'react-toastify'; // Import ToastContainer for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS for styling

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/success" element={<Success />} /> {/* Success route */}
        <Route path="/*" element={<Error />} /> {/* Catch-all route for errors */}
      </Routes>
      <ToastContainer /> {/* Add ToastContainer here to enable toast notifications */}
    </BrowserRouter>
  );
};

export default App;
