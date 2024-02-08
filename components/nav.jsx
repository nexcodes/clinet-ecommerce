"use client";

import { ChevronDown, Heart, ShoppingCart, Target, User } from "lucide-react";
import React from "react";
import UaeFlag from "./icons/uae-flag";
import LoginModal from "./login-modal";
import MapModal from "./map-modal";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMapOpen, setIsMapOpen] = React.useState(false);

  const session = useSession();

  return (
    <>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <div className="bg-[#feee00] p-4 hidden lg:block">
        <div className="flex gap-6 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <div className="flex space-x-1">
                <Target />
                <span className="font-bold text-lg">Logo</span>
              </div>
            </Link>
            <div
              onClick={() => setIsMapOpen(true)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <UaeFlag />
              <p className="text-gray-800 text-xs">
                Deliver to <br />
                <strong>Dubai</strong>
              </p>
              <ChevronDown />
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <input
                type="text"
                id="search-navbar"
                className="block w-[40vw] xl:w-[50vw] p-2 text-sm text-gray-700 rounded-lg bg-white outline-none"
                placeholder="Search..."
              />
            </div>
            <nav className="flex items-center gap-4">
              <div className="flex space-x-1 border-r border-gray-600 pr-2 cursor-pointer text-sm">
                Language
              </div>
              {session?.status === "authenticated" ? (
                <div className="flex items-center space-x-1 border-r border-gray-600 pr-2 cursor-pointer text-sm">
                  <span>{session?.data?.user?.name}</span>
                  <User size={16} />
                </div>
              ) : (
                <div
                  onClick={() => setIsOpen(true)}
                  className="flex items-center space-x-1 border-r border-gray-600 pr-2 cursor-pointer text-sm"
                >
                  <span>Login</span>
                  <User size={16} />
                </div>
              )}
              <Link href="/wishlist">
                <div className="flex items-center space-x-1 border-r border-gray-600 pr-2 cursor-pointer text-sm">
                  <span>Wishlist</span>
                  <Heart size={16} />
                </div>
              </Link>
              <div className="flex items-center space-x-1 pr-2 cursor-pointer text-sm">
                <span>Cart</span>
                <ShoppingCart size={16} />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
