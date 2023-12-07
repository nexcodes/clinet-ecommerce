"use client";

import { AlertCircle, Facebook, Instagram, Plus, Twitter } from "lucide-react";
import { useState } from "react";
import GooglePlay from "./icons/google-play";
import Visa from "./icons/visa";
import clsx from "clsx";

const Footer = () => {
  const [according, setAccording] = useState("");

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <footer className="text-gray-600 ">
      <div className="bg-gray-100 border border-gray-200">
        <div className="container px-5 py-4 mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl">
              {"We're Always Here To Help"}
            </h3>
            <p className="text-gray-600">
              Reach out to us through any of these support channels
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row  md:space-x-4 space-y-4 md:space-y-0 my-4">
            <div className="flex">
              <AlertCircle
                size={40}
                className="bg-gray-50 p-2 text-black rounded-full mr-4"
              />
              <div>
                <span className="text-gray-600 block">HELP CENTER</span>
                <h6 className="text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                  help.example.com
                </h6>
              </div>
            </div>
            <div className="flex">
              <AlertCircle
                size={40}
                className="bg-gray-50 p-2 text-black rounded-full mr-4"
              />
              <div>
                <span className="text-gray-600 block">HELP CENTER</span>
                <h6 className="text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                  help.example.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hidden on mobile */}
      <div className="container px-5 py-2 mx-auto hidden md:block">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      {/* hidden on desktop */}
      <div className="px-5 py-2 space-y-4 md:hidden">
        {arr.map((item, index) => (
          <div
            key={index}
            className="bg-white flex items-center justify-between"
          >
            <div>
              <h6 className="text-lg font-bold dark:text-white">Electronic</h6>

              <a
                href="#"
                className={clsx(
                  "text-gray-500 hover:underline",
                  according === index ? "block" : "hidden"
                )}
              >
                Mobiles
              </a>
            </div>
            <Plus
              onClick={() =>
                setAccording((prev) => (according === index ? "" : index))
              }
              size={24}
            />
          </div>
        ))}
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between ">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-gray-600 text-lg font-bold text-center sm:text-left md:text-xl">
              SHOP ON THE GO
            </h3>
            <div className="flex items-center justify-center space-x-2 my-4">
              <GooglePlay />
              <GooglePlay />
              <GooglePlay />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-gray-600 text-lg font-bold text-center sm:text-left md:text-xl">
              Connect with us
            </h3>
            <div className="flex items-center justify-center space-x-2 my-4">
              <Facebook
                size={40}
                className="p-2 bg-yellow-400 text-black rounded-full"
              />
              <Twitter
                size={40}
                className="p-2 bg-yellow-400 text-black rounded-full"
              />
              <Instagram
                size={40}
                className="p-2 bg-yellow-400 text-black rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between ">
          <div className="space-y-2">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2023 Company Name
            </p>

            <ul className="flex flex-row font-medium mt-0 space-x-8 items-center justify-center md:justify-start text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center space-x-2 my-4">
            <Visa />
            <Visa />
            <Visa />
            <Visa />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
