"use client";

import {
  ChevronDown,
  Heart,
  Menu,
  ShoppingCart,
  Target,
  User,
} from "lucide-react";
import React from "react";
import UaeFlag from "./icons/uae-flag";
import LoginModal from "./login-modal";
import MapModal from "./map-modal";

const MobileNav = () => {
  const [isMenuClosed, setIsMenuClosed] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMapOpen, setIsMapOpen] = React.useState(false);

  return (
    <>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <div className="bg-yellow-300 p-4 lg:hidden">
        <div className="flex gap-6 items-center justify-between">
          <div className="flex space-x-1">
            <Target />
            <span className="font-bold text-lg">Logo</span>
          </div>
          <div
            onClick={() => setIsMenuClosed((prev) => !prev)}
            className="lg:hidden"
          >
            <Menu />
          </div>
        </div>
        <div className="lg:hidden" hidden={isMenuClosed}>
          <div className="mt-3">
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 text-sm text-gray-700 rounded-lg bg-white outline-none"
              placeholder="Search..."
            />
          </div>
          <nav className="bg-gray-50 space-y-4 p-4 my-4">
            <div
              onClick={() => setIsMapOpen(true)}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex items-center space-x-2">
                <UaeFlag />
                <p className="text-gray-800 text-xs">
                  Deliver to <strong>Dubai</strong>
                </p>
              </div>
              <ChevronDown />
            </div>
            <div className="flex space-x-1">Language</div>
            <div onClick={() => setIsOpen(true)} className="flex space-x-1">
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
    </>
  );
};

export default MobileNav;
