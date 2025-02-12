// FloatingMenu component
import Link from "next/link";

const FloatingMenu = () => {
  return (
    <div className="w-[90%] bg-white shadow-lg z-50 mx-auto py-4 mt-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">
            Malex
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="#home" className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-blue-600">
            About
          </Link>
          <Link href="#our-products" className="text-gray-800 hover:text-blue-600">
            Our Products
          </Link>
          <Link href="#gallery" className="text-gray-800 hover:text-blue-600">
            Gallery
          </Link>
          <Link href="#contact-us" className="text-gray-800 hover:text-blue-600">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
