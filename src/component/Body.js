import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RES_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [textValue, setTextvalue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:5000/api/restaurants");

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();

      const restaurants = json?.restaurants;

      console.log("Restaurants:", restaurants);

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError(error.message);
    }
  };

  if (error) {
    return (
      <div className="error-container">
        <h2>😕 Something went wrong</h2>

        <p>{error}</p>

        <button
          onClick={() => {
            setError(null);
            fetchData();
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      {/* Search Section */}
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={textValue}
          placeholder="Search for restaurants..."
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

      {/* Restaurant Cards */}
      <div className="res-card-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="res-card-link"
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
