// Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <div className=" pt-28 w-full min-h-screen pb-[1rem] lg:px-32 bg-yellow">
      <div className="container  mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Book Inventory Dashboard</h1>

        {/* Book Summary */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-200 p-4 rounded">
            <p className="text-lg font-semibold">Total Books</p>
            <p className="text-2xl">25</p>
          </div>


        </div>



        {/* Top Books */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Top Books</h2>
          {/* Display top books here */}
        </div>

        {/* Inventory Status */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Inventory Status</h2>
          {/* Display inventory status charts or graphs here */}
        </div>

        {/* Low Stock Alert */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Low Stock Alert</h2>
          {/* Display low stock items with alerts or notifications */}
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>

  );
};

export default Dashboard;
