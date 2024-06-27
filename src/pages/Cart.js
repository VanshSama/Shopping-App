import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce ( (acc , curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="mt-8">
      {
        cart.length > 0 ?
        (
          <div className="flex flex-row justify-between mx-auto max-w-6xl space-x-5">
            <div className="w-[60%]">
              {
                cart.map((item, index) => {
                  return <CartItem item={item} key={item.id} itemIndex={index} />
                })
              }
            </div>

            <div className="flex flex-col justify-between w-[40%] pt-20 pb-20">
              <div >
                <h3 className="text-lg uppercase text-green-900 font-semibold">
                  Your Cart
                </h3>

                <h2 className="text-5xl font-semibold text-green-700 uppercase">
                  Summary
                </h2>

                <p className="mt-4 text-lg">
                  <span className="text-gray-700 font-semibold">Total Items : </span>
                  <span>{cart.length}</span>
                </p>
              </div>

              <div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold">Total Amount: </span>
                  <span className="font-bold">${totalAmount}</span>
                </p>

                <div className="bg-green-700 text-center text-white px-10 py-3 rounded-lg font-bold text-lg mt-4">
                  Checkout Now
                </div>
              </div>
            </div>
          </div>
        ) : 
        (
          <div className="w-full h-[75vh] flex justify-center items-center flex-col">
            <h2 className="text-lg text-slate-700 font-semibold">
              Your cart is empty!
            </h2>

            <NavLink to="/">
              <button className="bg-green-600 border-2 border-green-600 rounded-lg mt-7 px-10 py-3 text-white hover:bg-white hover:text-green-700 transition-all duration-300 uppercase font-semibold">
                Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
