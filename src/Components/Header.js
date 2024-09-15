import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import { APP_LOGO } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import React from "react";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlinestatus=useOnlineStatus();
  const {loggedInUser}=useContext(userContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart?.items  );
  console.log(cartItems);
  return (
    <div className="flex  justify-between bg-orange-200 h-40  shadow-md">
      <img id="w-24" src={APP_LOGO} alt="Logo" />
      <div className="flex align-middle">
        <ul className="flex justify-between p-3 m-7  font-bold">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li  className="px-2"id="header-online">
            Online Staus:{(onlinestatus)?"💚":"❤️"}
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="h-9  w-15 px-3 py-1 bg-orange-300 hover:bg-orange-400 shadow rounded-lg">
          <button
            className=""
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          </li>
          <li className="px-2">
            {loggedInUser}
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
