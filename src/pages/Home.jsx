import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to track selected category
  const [searchTerm, setSearchTerm] = useState(''); // State to track search input

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div>
      <Navbar toggleCart={toggleCart} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {cartVisible && <Cart onClose={toggleCart} />}
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center">Welcome to QuickBite</h1>
        <CategoryMenu onCategoryChange={setSelectedCategory} />
        <FoodItem selectedCategory={selectedCategory} searchTerm={searchTerm} /> {/* Pass searchTerm */}
      </div>
    </div>
  );
};

export default Home;
