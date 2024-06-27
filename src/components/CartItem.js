import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  function deleteHandler(){
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center border-b-2 border-gray-700 md:pb-7">
        <div className="w-[30%]">
          <img src={`${item.image}`} className="object-cover"/>
        </div>

        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h2 className="text-xl text-slate-700 font-semibold">
            {item.title}
          </h2>

          <h2 className="text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0,15).join(" ") + "..."}
          </h2>

          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">
              {item.price}
            </p>

            <div onClick={deleteHandler} className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;