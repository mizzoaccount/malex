"use client"
import Sidebar from "@/components/Admin/Sidebar";
import Header from "@/components/Admin/Header";
import Dashboard from "@/components/Admin/Dashboard"
const AdminPage = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
};

export default AdminPage;
