import { useState, useEffect} from "react";
import React from "react";
import { RestaurantCard,FastDeliveryRescard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../utils/useFetchData"; 
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const listOfRestaurants = useFetchData(); 
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const FastDelivery=FastDeliveryRescard(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setFilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  if (!onlineStatus) {
    return <h1 id="offline">It looks like you're offline. Please check your Internet connection.</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div>
        <input
          className="m-2 px-1 border border-solid border-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-2 bg-orange-200 hover:bg-orange-400 shadow rounded-lg"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>
        <button
          className="px-2 bg-orange-200 hover:bg-orange-400 ml-3 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
          key={restaurant.info.id}
          to={`/restaurant/${restaurant.info.id}`}
          style={{ textDecoration: "none" }}
        >
          {restaurant.info.deliveryTime < 60 ? (
            <EnhancedFastDelivery {...restaurant.info} />
          ) : (
            <RestaurantCard {...restaurant.info} />
          )}
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
