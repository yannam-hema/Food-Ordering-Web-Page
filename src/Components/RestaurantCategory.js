import CategoryListItems from "./CategoryListItems";
import React from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 p-2 my-2 shadow-lg mx-auto">
        <div className="flex justify-between">
          <span className="font-bold cursor-pointer" onClick={handleClick}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Conditionally render CategoryListItems based on showItems */}
        {showItems && <CategoryListItems items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
