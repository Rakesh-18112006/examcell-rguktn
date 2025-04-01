import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 3 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black">
      {loading ? (
        // Loader
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      ) : (
        // Prank Message
        <div className="text-center space-y-4 p-6 max-w-md mx-auto">
          <p className="text-xl font-semibold">Sorry for 3 seconds loader....</p>
          <p className="text-2xl font-bold text-red-600">April Fool......</p>
          <p className="text-lg font-medium">🎉 Enti Exam Antha Baga Rasava.... link pettagane check chesavu....😂</p>
          <p className="text-lg font-semibold text-blue-500">
            Share this to 10 members then ur result will be improved...😂
          </p>
          <p className="text-lg font-semibold text-gray-700">
            Otherwise, you will fail.... 😱
          </p>
          <p className="text-lg font-bold text-green-600">
            Finally, you are fooled by CSE1 boys...😂😂😂😂😂😂😂
          </p>
          <p className="text-2xl font-bold text-purple-500">
            Once again, April Fool........😂
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
