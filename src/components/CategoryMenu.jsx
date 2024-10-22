import React, { useState, useEffect } from 'react';
import FoodData from '../data/FoodData'; // Import your food data

const CategoryMenu = ({ onCategoryChange }) => {
    const [uniqueCategories, setUniqueCategories] = useState([]);

    // Function to get unique categories from FoodData
    useEffect(() => {
        const categories = FoodData.map((food) => food.category);
        setUniqueCategories(['All', ...new Set(categories)]); // Include 'All' and ensure categories are unique
    }, []);

    const handleCategoryChange = (category) => {
        onCategoryChange(category); // Call the parent function to update category
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Explore Delicious Food
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
                {uniqueCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className="bg-green-100 text-green-800 rounded-lg px-4 py-2 transition duration-300 hover:bg-green-200 focus:outline-none shadow-lg hover:shadow-xl"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryMenu;
