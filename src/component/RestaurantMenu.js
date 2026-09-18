import { useEffect } from "react";
import { RES_API } from "../utils/constants";

const RestaurantMenu = () => {
  const fetchData = async () => {
    const data = await fetch(RES_API);

    const json = await data.json();

    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="menu">
      <h1>Burger King</h1>
      <h3>burger, fries, cold drink</h3>
      <h3>4.4 rating</h3>
      <h4>200 for two</h4>
    </div>
  );
};

export default RestaurantMenu;
