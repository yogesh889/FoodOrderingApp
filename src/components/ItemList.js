import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch and action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          className="p-2 m-2 border-gray-900 border-b-2 text-left"
          key={`${item?.card?.info?.id}-${index}`}
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 pb-5 mb-2 ">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-30 h-25"
              />
              <button
                onClick={() => handleAddItem(item)}
                className="ml-7 px-[7px] cursor-pointer bg-white shadow-lg absolute m-auto rounded-4xl"
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
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
export default ItemList;
 