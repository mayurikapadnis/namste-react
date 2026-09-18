const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    cloudinaryImageId,
    locality,
    costForTwo,
  } = resData.info;

  return (
    <div className="res-cards">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(" | ")}</h4>
      <h4>{locality}</h4>
      <h4>
        {avgRating} ({totalRatingsString})
      </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
