import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
      <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
