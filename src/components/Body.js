import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // withPromotedLabel is a higher order component which we have pass in this Restaurant card
  // It will return as a new component which has labelled inside it.
  // RestaurantCardPromoted component has a labelled inside it.

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Try to get user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        await fetchRestaurants(lat, lng);
      },
      async () => {
        // Fallback to Bangalore if user blocks location
        await fetchRestaurants(12.9715987, 77.5945627);
        // There is no promoted restaurant in API at this location so no promoted lablled.
      }
    );
  };

  const fetchRestaurants = async (lat, lng) => {
    const apiURL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true`;
    const data = await fetch(apiURL);
    const json = await data.json();
    console.log(apiURL);
    console.log(lat, lng);

    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurants || []);
    setFilteredRestaurant(restaurants || []);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! please check your internet connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full m-10">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="p-2 mx-2 border-2 border-solid focus:border-green-800 focus:outline-none border-green-300 hover:border-green-800 text-green-900 rounded-lg cursor-pointer"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 hover:border-2 hover:border-green-800 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-green-100 hover:border-2 hover:border-green-800 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-4">
          <label>UserName: </label>
          <input
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="p-2 mx-2 border-2 border-solid focus:border-green-800 focus:outline-none border-green-100 hover:border-green-800 text-green-900 rounded-lg cursor-pointer"
          />
        </div>
      </div>
      <div className=" flex justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full ">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {restaurant?.info?.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
