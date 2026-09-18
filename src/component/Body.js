import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [textValue, setTextvalue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();

      console.log("JSON:", json);

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log("Restaurants:", restaurants);

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={textValue}
          onChange={(e) => {
            setTextvalue(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(textValue.toLowerCase()),
            );

            setFilteredRestaurants(filtered);
          }}
        >
          Search
        </button>

        <button
          className="top-rated-res-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating >= 4.5,
            );

            setFilteredRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-card-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
