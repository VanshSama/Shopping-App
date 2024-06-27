import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className="">
      <nav className="flex flex-row justify-between items-center mx-auto h-20 max-w-6xl">
        <NavLink to="/">
          <div className="ml-5">
            <img src="https://codehelp-shopping-cart.netlify.app/logo.png" className="h-14"/>
          </div>
        </NavLink>

        <div className="flex flex-row justify-center items-center space-x-6 font-medium text-slate-100 mr-5">
          <NavLink to="/">
            <p>
              Home
            </p>
          </NavLink>
        
          <NavLink to="/cart">
            <div className="relative text-2xl">
              <FaShoppingCart />
              {
                cart.length > 0 && (<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center animate-bounce rounded-full text-white">{cart.length}</span>)
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
