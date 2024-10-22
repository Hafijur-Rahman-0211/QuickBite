import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import { useSelector } from 'react-redux'; // Import useSelector to access the cart state
import { selectTotalCartItems } from '../redux/slices/CartSlices'; // Import the selector

const Navbar = ({ toggleCart, searchTerm, setSearchTerm }) => {
  const totalCartItems = useSelector(selectTotalCartItems); // Get total cart items

  return (
    <nav className="bg-green-700 shadow-lg py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <h1 className="text-2xl font-bold text-white">QuickBite</h1>
          <h3 className="text-green-200 text-sm">{new Date().toUTCString().slice(0, 16)}</h3>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <input 
            type="search" 
            placeholder="Search here" 
            value={searchTerm} // Set input value from state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
            className="w-full md:w-80 px-4 py-2 border border-green-400 rounded-full focus:outline-none focus:border-green-300 transition duration-300 ease-in-out"
          />
          <button 
            onClick={toggleCart} 
            className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 relative"
          >
            <FaShoppingCart size={20} /> 
            {totalCartItems > 0 && ( // Conditionally display the badge only if items are in the cart
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                {totalCartItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
