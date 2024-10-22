import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-8 md:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-600 text-center">
        Order Successful!
      </h1>
      <p className="mt-4 text-base sm:text-lg text-center">
        Thank you for your order. Your food is on its way!
      </p>
      <Link to="/" className="mt-6 text-blue-500 underline text-sm sm:text-base">
        Go back to Home
      </Link>
    </div>
  );
};

export default Success;
