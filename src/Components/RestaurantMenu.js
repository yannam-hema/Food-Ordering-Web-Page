import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarentMenu from "../utils/useRestuarentMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import React from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarentMenu(resId);
  const [showIndex, SetShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log(resInfo.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);

  const filteredItemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  console.log(filteredItemCards);
  if (filteredItemCards.length === 0) {
    return <div>No menu items found</div>;
  }

  return (
    <div>
      {filteredItemCards.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex} 
          setShowIndex={() => SetShowIndex(prevIndex => prevIndex === index ? null : index)} 
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
