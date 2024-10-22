import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";

const FoodItem = ({ selectedCategory, searchTerm }) => {
  // Filter FoodData based on selectedCategory and searchTerm
  const filteredFoodData = FoodData.filter((food) => {
    const isCategoryMatch = selectedCategory === 'All' || food.category === selectedCategory;
    const isSearchMatch = food.name.toLowerCase().includes(searchTerm.toLowerCase()); // Case-insensitive search
    return isCategoryMatch && isSearchMatch; // Combine both conditions
  });

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filteredFoodData.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id} // Added id prop here
          name={food.name}
          img={food.img}
          desc={food.desc}
          price={food.price}
          rating={food.rating}
        />
      ))}
    </div>
  );
};

export default FoodItem;
