import { useEffect } from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="text-center text-white p-8 md:p-12 bg-black bg-opacity-50 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          404
        </h1>
        <p className="text-xl mb-4 animate__animated animate__fadeIn animate__delay-2s">
          Oops! This page doesn't exist.
        </p>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-3s">
          But don't worry, we're sure you'll find something cool!
        </p>
        <a
          href="/"
          className="text-lg bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
