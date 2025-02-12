import { Search, Bell, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md flex justify-between items-center p-4">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Bell size={24} className="text-gray-600 cursor-pointer" />
        <UserCircle size={24} className="text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
