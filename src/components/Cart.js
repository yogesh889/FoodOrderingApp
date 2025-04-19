import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="m-4 px-4 py-2 bg-green-100 hover:border-2 hover:border-green-800 rounded-lg cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1 className="m-4 p-4">Cart is empty Add items to cart</h1>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
