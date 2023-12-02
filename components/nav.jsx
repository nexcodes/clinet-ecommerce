import { Heart, ShoppingCart, Target, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-yellow-300 p-4">
      <div className="flex gap-6 items-center justify-between">
        <div className="flex space-x-1">
          <Target />
          <span className="font-bold text-lg">Logo</span>
        </div>
        <div>
          <input
            type="text"
            id="search-navbar"
            className="block w-[60vw] p-2 text-sm text-gray-700 rounded-lg bg-white outline-none"
            placeholder="Search..."
          />
        </div>
        <nav className="flex items-center gap-4">
          <div className="flex space-x-1 border-r border-gray-600 pr-2">
            <User />
            <span>Login</span>
          </div>
          <div className="flex space-x-1 border-r border-gray-600 pr-2">
            <Heart />
            <span>Wishlist</span>
          </div>
          <div className="flex space-x-1 pr-2">
            <ShoppingCart />
            <span>Cart</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
