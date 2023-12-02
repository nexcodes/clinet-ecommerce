"use client";

import { Heart, Menu, ShoppingCart, Target, User } from "lucide-react";
import React from "react";
import SubNav from "./sub-nav";

const Navbar = () => {
  const [isMenuClosed, setIsMenuClosed] = React.useState(true);
  return (
    <>
      <div className="bg-yellow-300 p-4">
        <div className="flex gap-6 items-center justify-between">
          <div className="flex space-x-1">
            <Target />
            <span className="font-bold text-lg">Logo</span>
          </div>
          <div
            onClick={() => setIsMenuClosed((prev) => !prev)}
            className="md:hidden"
          >
            <Menu />
          </div>
          <div className="hidden md:flex space-x-4">
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
        <div className="md:hidden" hidden={isMenuClosed}>
          <div className="mt-3">
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 text-sm text-gray-700 rounded-lg bg-white outline-none"
              placeholder="Search..."
            />
          </div>
          <nav className="bg-gray-50 space-y-4 p-4 my-4">
            <div className="flex space-x-1">
              <User />
              <span>Login</span>
            </div>
            <div className="flex space-x-1">
              <Heart />
              <span>Wishlist</span>
            </div>
            <div className="flex space-x-1">
              <ShoppingCart />
              <span>Cart</span>
            </div>
          </nav>
        </div>
      </div>
      <SubNav />
    </>
  );
};

export default Navbar;
