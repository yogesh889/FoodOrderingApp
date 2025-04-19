import { LOGO_URL } from "../utils/constants/";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClick = () => {
    btnNameReact === "Login"
      ? setBtnNameReact("Logout")
      : setBtnNameReact("Login");
  };
  return (
    <div className="flex justify-between bg-amber-200">
      <div className="items-center">
        <img
          className="w-30 ml-3"
          src={LOGO_URL}
          alt="logo"
          onClick={() => {
            window.location.reload();
          }}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/UserClass">UserClass</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
          </li>
          {/* <li className="px-4 font-bold text-xl">
            Cart - ({cartItems.length} Items)
          </li> */}
          <button className="login px-4" onClick={handleClick}>
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
          {/* <Test /> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
