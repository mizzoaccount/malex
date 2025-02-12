import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Left Side: Logo */}
        <div className="text-2xl font-bold text-gray-800">
          IMANI
        </div>

        {/* Middle: Search Input */}
        <div className="flex w-full max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Right Side: Icons (Person, Heart, Cart) */}
        <div className="flex space-x-6 text-xl text-gray-800">
          <a href="#" className="hover:text-blue-500">
            <FaUser />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaHeart />
          </a>
          <a href="#" className="hover:text-green-500">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
