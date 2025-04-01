import React from "react";
import { useNavigate } from "react-router-dom";

const ExamResults = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirect to prank page
  };

  return (
    <div className="w-full h-full bg-white">
      {/* Navbar */}
      <nav className="bg-[#367fa9] text-white py-3 px-6">
        <div className="text-lg font-semibold py-2 text-center bg-[#357ca5]">
          Examination Cell
        </div>
        <div className="flex justify-center space-x-6 text-sm mt-2 md:mt-0 md:flex md:justify-end">
          <a href="#" className="hover:underline">RGUKTN Home</a>
          <a href="#" className="hover:underline">Staff</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Title */}
      <p className="text-lg text-center text-gray-600 px-6 py-10 rounded-md shadow-sm">
        Engineering 1st Year (2022-Batch) of Semester-1 Regular Examination Results.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg">
        <div className="mb-4">
          <label htmlFor="StudentId" className="block text-gray-700 font-semibold">
            Student ID:
          </label>
          <input
            type="text"
            id="StudentId"
            name="StudentId"
            placeholder="Enter Your ID Number"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="StudentPassword" className="block text-gray-700 font-semibold">
            Student Management System Password:
          </label>
          <input
            type="password"
            id="StudentPassword"
            name="StudentPassword"
            placeholder="*********"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <button type="submit" className="w-full bg-[#357ca5] text-white py-2 rounded-md hover:bg-[#357ca5] transition">
          Submit
        </button>
      </form>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600 py-10 border-t">
        Copyright © 2015-19 - <span className="text-blue-700 font-medium">RGUKT Nuzvid</span>. All rights reserved.
      </div>
    </div>
  );
};

export default ExamResults;
