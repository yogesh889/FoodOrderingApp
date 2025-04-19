import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch and action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-900 border-b-2 text-left"
          key={item.card.info.id}
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
              <button onClick={() => handleAddItem(item)} className="ml-7 px-[7px] cursor-pointer bg-white shadow-lg absolute m-auto rounded-4xl">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
