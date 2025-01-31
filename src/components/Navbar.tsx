import Link from 'next/link';
import { FaShoppingBasket } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Movie Library</h1>
          <div className="flex items-center space-x-6">
            <Link href="/bucket">
              <div className="relative cursor-pointer">
                <FaShoppingBasket className="text-2xl text-gray-700 hover:text-gray-900" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">0</span>
              </div>
            </Link>
            <Link href="/auth/login">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

