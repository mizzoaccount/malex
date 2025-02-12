import { LayoutDashboard, ShoppingCart, Users, Settings, Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:w-64 w-20 bg-gray-900 text-white h-screen flex flex-col transition-all">
      {/* Mobile Toggle */}
      <button className="lg:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} />
      </button>

      {/* Sidebar Menu */}
      <nav className={`${isOpen ? "block" : "hidden"} lg:block flex-1`}>
        <ul className="space-y-6 mt-8 text-sm">
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <LayoutDashboard size={20} /> Dashboard
          </li>
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <ShoppingCart size={20} /> Orders
          </li>
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <Users size={20} /> Customers
          </li>
          <li className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
            <Settings size={20} /> Settings
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
