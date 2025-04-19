import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  // const regularCards =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const restaurantInfoCard = resInfo.cards.find(
    (card) => card?.card?.card?.info
  );
  // 1. Scanning through all resInfo.cards to find the first cardthat has .info
  // 2. This replaces hardcoding resInfo.cards[2]

  const { name, cuisines, costForTwoMessage } =
    restaurantInfoCard.card.card.info;
  // 1. Once find the card .extract the info from it

  const regularCards = resInfo.cards.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // 1. You search for the card tha contains groupedCard -> cardGroupMap -> REGULAR, which holds the actual menu sections.
  // 2. This replaces the hardcoded cards[4]

  // const itemCards = regularCards?.[1]?.card?.card?.itemCards || [];
  const menuCard = regularCards?.find((card) => card?.card?.card?.itemCards);
  // Get the actual menu items
  // 1. You're searching within the menu sections to find the one that has actual food items(itemCards).
  // 2. This avoids hardcoding cards[1]

  // console.log(
  //   resInfo.cards.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
  //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories = resInfo.cards
    .find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  const itemCards = menuCard?.card?.card?.itemCards || [];

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-3xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* categories Accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
