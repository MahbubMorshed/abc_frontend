import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaInfoCircle, FaSignOutAlt } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome to the admin panel</p>
        </header>

        {/* Outlet for nested routes */}
        <div className="bg-white rounded shadow p-6 min-h-[400px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
