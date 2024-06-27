import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();

  function selectHandler(){
    if(selected===true){
      setSelected(false);
      toast.error("Item removed from Cart!");
      dispatch(remove(post.id));
    }
    else{
      setSelected(true);
      toast.success("Item added to Cart!");
      dispatch(add(post));
    }
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 duration-300 ease-in transition-all shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl gap-3 p-4 mt-10 ml-5 group">
      <div>
        <h2 className="font-semibold text-gray-700 text-lg text-left truncate mt-1 w-40">{post.title}</h2>
      </div>

      <div>
        <p className="text-[10px] text-gray-400 font-normal text-left w-40 ">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>

      <div className="h-[180px]">
        <img src={`${post.image}`} className="w-full h-full"/>
      </div>

      <div className="flex flex-row justify-between items-center w-full mt-5">
        <p className="text-green-600 font-semibold">{"$" +post.price}</p>
        
        <button onClick={selectHandler} className="uppercase border-2 border-gray-700 group-hover:bg-gray-700 text-gray-700 rounded-full text-[12px] font-semibold p-1 px-3 group-hover:text-white duration-300 ease-in transition-all">
          {
            selected ? (<p>Remove Item</p>) : (<p>Add to Cart</p>)
          }
        </button>
      </div>
    </div>
  );
};

export default Product;
