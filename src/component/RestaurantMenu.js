import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API + resId);

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();
      setResInfo(json);
      console.log("REST MENU FETCH SUCCESSFULLY", json);
    } catch (err) {
      console.error("Error fetching menu:", err);
      setError(err.message);
    }
  };

  if (error) {
    return (
      <div className="error-container">
        <h2>😕 Could not load menu</h2>
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

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, locality, costForTwo, cuisines, avgRating } = resInfo.info;
  const menuItems = resInfo.menu.categories;

  return (
    <div className="restaurant-menu">
      <div className="restaurant-info">
        <h1 className="restaurant-name">{name}</h1>
        <p className="restaurant-location">{locality}</p>
        <p className="restaurant-cost">{costForTwo}</p>
        <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
        <p className="restaurant-rating">⭐ {avgRating}</p>
      </div>
      <div className="menu-section">
        <h2 className="menu-heading">MENU</h2>
        {menuItems.map((category) => (
          <div className="menu-category" key={category.title}>
            <h2 className="category-title">{category.title}</h2>
            <ul className="menu-items">
              {category.items.map((item) => (
                <li className="menu-item" key={item.id}>
                  {item.name} - Rs.{item.price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
