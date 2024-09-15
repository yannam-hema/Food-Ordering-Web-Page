import { useDispatch, useSelector } from "react-redux";
import CategoryListItems from "./CategoryListItems";
import { clearCart } from "../Cart/cartSlice";
import React, { useState } from "react";

const Itemcart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    
    const [orderMessage, setOrderMessage] = useState(""); 
    const [showSuccessImage, setShowSuccessImage] = useState(false);  

    const clickHandle = () => {
        dispatch(clearCart());
    };

    const placeOrder = () => {
        if (cartItems.length > 0) {
            setShowSuccessImage(true);  
            setOrderMessage("You have placed your order!");  
            dispatch(clearCart());  
        } else {
            setOrderMessage("Your cart is empty!");
            setShowSuccessImage(false);  
        }
    };

    return (
        <div className="w-6/12 m-auto">
            <div className="flex justify-center">
                <h3 className="font-bold m-3 p-4">CART</h3>
                <div>
                    <button
                        className="bg-orange-200 hover:bg-orange-400 my-6 h-10 p-1 rounded-lg font-bold"
                        onClick={placeOrder}
                    >
                        Place Order
                    </button>
                    <button
                        className="bg-orange-200 hover:bg-orange-400 my-6 h-10 p-1 rounded-lg font-bold ml-4"
                        onClick={clickHandle}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>

            {/* Order message */}
            {orderMessage && (
                <div className="text-green-600 font-bold text-center mt-4">
                    {orderMessage}
                </div>
            )}

            {/* Success image */}
            {showSuccessImage && (
                <div className="text-center mt-4">
                    <img src="Sucess.jpg" alt="Order Placed Successfully" />
                </div>
            )}

            <CategoryListItems items={cartItems} />
        </div>
    );
};

export default Itemcart;
