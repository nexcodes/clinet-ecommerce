"use client";

import {
  ChevronDown,
  Gift,
  Heart,
  Home,
  MapPinned,
  ShoppingCart,
  Tags,
  Target,
  User,
} from "lucide-react";
import React from "react";
import LoginModal from "./login-modal";
import MapModal from "./map-modal";

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMapOpen, setIsMapOpen] = React.useState(false);

  return (
    <>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <div className="bg-white p-4 lg:hidden">
        <div className="flex gap-4 items-center justify-between">
          <div className="flex space-x-1">
            <Target />
            <span className="font-bold text-lg">Logo</span>
          </div>
          <div className="grow">
            <input
              type="text"
              className="block w-full p-2 text-sm text-gray-700 rounded-lg bg-white outline-none border border-gray-500"
              placeholder="Search..."
            />
          </div>
          <div>
            <Heart />
          </div>
        </div>
        <div className="mt-4">
          <div
            onClick={() => setIsMapOpen(true)}
            className="flex items-center gap-2"
          >
            <MapPinned className="w-4 h-4 text-gray-500" />
            <p className="text-gray-800 text-xs">
              Deliver to <strong>Dubai</strong>
            </p>
            <ChevronDown />
          </div>
        </div>
      </div>
      {/* bottom nav */}

      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 place-items-center mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Home className="w-5 h-5 mb-2 text-gray-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Home
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Tags className="w-5 h-5 mb-2 text-gray-500" />

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Categories
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Gift className="w-5 h-5 mb-2 text-gray-500" />

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Clearance
            </span>
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <User className="w-5 h-5 mb-2 text-gray-500" />

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              profile
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <ShoppingCart className="w-5 h-5 mb-2 text-gray-500" />

            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Cart
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
