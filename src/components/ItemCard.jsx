import React from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

const ItemCard = ({ item, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="flex items-center p-2 bg-white rounded-md shadow-sm transition-transform duration-200 ease-in-out hover:shadow-lg hover:scale-100">
      {/* Image */}
      <div className="w-12 h-12 flex-shrink-0 mr-3">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover rounded-md shadow-inner border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* Item details */}
      <div className="flex-grow">
        <h4 className="text-sm font-semibold text-gray-800 leading-tight">
          {item.name}
        </h4>
        <p className="text-xs text-gray-500">₹{item.price}</p>

        {/* Quantity controls */}
        <div className="flex items-center mt-2">
          <button
            onClick={onDecrease}
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center shadow-sm transition-colors duration-200"
          >
            <FaMinus className="w-3 h-3" />
          </button>

          <span className="mx-2 text-md font-semibold text-gray-900">
            {item.quantity}
          </span>

          <button
            onClick={onIncrease}
            className="text-white bg-green-500 hover:bg-green-600 rounded-full w-6 h-6 flex items-center justify-center shadow-sm transition-colors duration-200"
          >
            <FaPlus className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Delete button */}
      <div>
        <button
          onClick={() => onDelete(item.id)}
          className="text-red-500 hover:text-red-700 ml-2 transition-colors duration-200"
        >
          <FaTrashAlt className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
