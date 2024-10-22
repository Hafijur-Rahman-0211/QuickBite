import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlices';
import { toast } from 'react-toastify'; // Import toast

const FoodCard = ({ id, name, price, desc, img, rating, onImageClick }) => {
  const dispatch = useDispatch();

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      const starClass = index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300";
      return <FaStar key={index} className={starClass} />;
    });
  };

  const handleAddToCart = () => {
    const quantity = 1;
    dispatch(addToCart({ id, name, price, img, rating, quantity }));
    toast.success(`${name} added to cart!`, { position: "top-center" }); // Show toast notification
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out mb-6 mx-2 w-full sm:w-40 md:w-48">
      <div className="w-full h-24 sm:h-32 md:h-36 relative cursor-pointer" onClick={() => onImageClick(id)}>
        <img src={img} alt={name} className="w-full h-full object-cover object-center rounded-t-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="p-3">
        <h2 className="text-sm font-bold text-gray-800 truncate">{name}</h2>
        <div className="flex items-center mt-1">{renderStars(rating)}</div>
        <p className="text-gray-600 mt-1 text-xs line-clamp-2 leading-relaxed">{desc}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold text-sm">₹{price}</span>
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-md text-xs"
            onClick={(e) => { 
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
