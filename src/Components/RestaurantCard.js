import { IMAGE } from "../utils/constants";
import React from "react";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] bg-orange-200 hover:bg-orange-400 h-[350px] justify-evenly shadow-md">
      <img
        className="rounded-lg w-[240px] h-[150px]"
        id="res-img"
        src={IMAGE + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h5 className="cuisines">{cuisines?.join(", ")}</h5>
      <h5 className="font-semibold">{areaName}</h5>
      <h3 className="font-medium">{avgRating}❤️</h3>
    </div>
  );
};

const FastDeliveryRescard = (Component) => {
  return (props) => {
    return (
      <div>
        <label className="bg-red-300 text-green-500 font-bold">Fast Delivery</label>
        <Component {...props} />
      </div>
    );
  };
};

export { RestaurantCard, FastDeliveryRescard };
