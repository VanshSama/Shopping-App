import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const output = await fetch(API_URL);
      const data = await output.json();

      setPosts(data);
    }
    catch(err){
      console.log(err);
      setPosts([]);
      toast.error("Error occured");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  },[])
  
  return (
    <div className="flex flex-row justify-center items-center">
      {
        loading ? (<Spinner />) : (
          posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                posts.map((post) => 
                  (<Product key={post.id} post={post} />)
                )
              }
            </div>
            
          ) : (
            <div className="flex justify-center items-center">
              No data Found
            </div>
          )
        )
      }
    </div>
  );
};

export default Home;
