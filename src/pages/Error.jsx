import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/404error.png";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      
      {/* 404 Title */}
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        404
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-3xl font-semibold text-gray-800">
        Page Not Found
      </p>

      {/* Description */}
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved. 
        You can go back to the homepage and continue browsing.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="mt-6 inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-all"
      >
        Go Back Home
      </Link>

      {/* Illustration */}
      <div className="mt-10 opacity-90 animate-bounce-slow">
        <img 
          src={errorImage}
          alt="error illustration"
          className="w-64 md:w-80 lg:w-80 mx-auto"
        />
      </div>
    </div>
  );
};

export default Error;
