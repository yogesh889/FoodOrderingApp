import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    areaName,
    locality,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-70 h-120 bg-gray-100 hover:bg-gray-200 res-card">
      <img
        className="w-63 h-50"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4 className="font-bold">{areaName} minutes</h4>
      <h4 className="font-bold">{locality} minutes</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // returns a function or returns a component basically(component is a function that returns a piece of jsx)
    // This component is a enhance version of Restaurant card
    return (
      <div>
        <label className="absolute bg-black text-white ml-4">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
