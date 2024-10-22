import React from "react";
import { FaTimes } from "react-icons/fa";
import ItemCard from './ItemCard';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity, clearCart } from '../redux/slices/CartSlices';
import { toast } from 'react-toastify'; // Import toast
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const cartItems = useSelector((state) => state.cart.cart);

  // Calculate total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Calculate total quantity of items in the cart
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    // Proceeding to checkout with total
    console.log("Proceeding to checkout with total:", getTotalPrice());
    dispatch(clearCart()); // Clear the cart
    navigate('/success'); // Navigate to the Success page
  };

  const handleDelete = (id) => {
    const itemToRemove = cartItems.find(item => item.id === id); // Find the item to be removed
    if (itemToRemove) {
      dispatch(removeFromCart(id));
      toast.success(`${itemToRemove.name} removed from cart!`, { position: "top-center" }); // Show toast with item name
    }
  };

  const handleIncreaseQuantity = (item) => {
    const newQuantity = item.quantity + 1;
    dispatch(updateCartQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateCartQuantity({ id: item.id, quantity: newQuantity }));
    } else {
      handleDelete(item.id);
    }
  };

  return (
    <div className="flex flex-col h-full fixed right-0 top-0 lg:w-1/5 w-60 max-w-xs bg-white shadow-lg rounded-l-lg p-3 transition-transform duration-300 ease-in-out border-l border-gray-200 z-50">
      <div className="flex justify-between items-center mb-2 border-b border-gray-300 pb-2">
        <h2 className="text-sm font-semibold text-gray-800">My Order</h2>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 focus:outline-none shadow-md"
        >
          <FaTimes size={12} />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto pr-2 space-y-2">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-5 text-xs">Your cart is currently empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <ItemCard 
                key={item.id || index}
                item={item} 
                onIncrease={() => handleIncreaseQuantity(item)} 
                onDecrease={() => handleDecreaseQuantity(item)} 
                onDelete={handleDelete}
              />
            ))}
            {/* Display total price and total quantity */}
            <div className="mt-4 p-3 bg-gray-100 rounded-lg shadow-inner">
              <div className="flex justify-between text-sm font-semibold">
                <span>Total Quantity:</span>
                <span>{getTotalQuantity()} items</span>
              </div>
              <div className="flex justify-between mt-1 text-base font-semibold">
                <span>Total Price:</span>
                <span className="text-green-600">₹{getTotalPrice()}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 w-full bg-white pt-3 pb-1">
        <button
          onClick={handleCheckout}
          className="w-full py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-transform duration-300 ease-in-out focus:outline-none"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
