import { useDispatch } from "react-redux";
import { IMAGE } from "../utils/constants";
import { addItems } from "../Cart/cartSlice";
import React from "react";
const CategoryListItems = ({ items }) => {
  const dispatch = useDispatch();

  const cartClickhandle = (item) => {
    dispatch(addItems(item));
  };

  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-3 border-black border-b-2">
          <div className="">
            <div className="font-bold">
              <span>{item.card.info.name} - </span>
              <span>₹{item.card.info.price / 100}</span>
            </div>
            <div>
              <p>{item.card.info.description}</p>
            </div>
            <div className="flex justify-between">
              <img
                src={IMAGE + item.card.info.imageId}
                className="w-24 flex justify-end"
              />
              <button
                className="bg-orange-200 hover:bg-orange-400 m-5 p-1 rounded-lg"
                onClick={()=>cartClickhandle(item)} // Corrected here
              >
                ADD+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryListItems;
