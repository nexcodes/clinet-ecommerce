"use client";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./product-card";
import Link from "next/link";

const BrowseProductSection = () => {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  return (
    <div className="bg-gray-50">
      <div className="container px-5 py-4 mx-auto">
        <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl text-center">
          Browse Product
        </h3>
        <div className="mb-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 space-x-2">
            <span className="text-gray-500">
              1392728 Results for &quot;
              <strong className="text-black">Deals</strong>&quot;
            </span>
            <div className="flex items-center space-x-4">
              <div>
                <span className="mr-2 text-gray-500">Sort by</span>
                <select className="text-gray-500 border-2 border-gray-300 rounded-md focus:outline-none">
                  <option>Best Seller</option>
                  <option>Price</option>
                  <option>Rating</option>
                </select>
              </div>
              <div>
                <span className="mr-2 text-gray-500">Display</span>
                <select className="text-gray-500 border-2 border-gray-300 rounded-md focus:outline-none">
                  <option>50 per pages</option>
                  <option>60 per pages</option>
                  <option>70 per pages</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex w-full overflow-x-auto no-scrollbar ">
            <div>
              <button
                type="button"
                className="text-gray-500 bg-gray-100 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 flex items-center"
              >
                Color
                <ChevronDown className="ml-2" />
              </button>
            </div>
            <div>
              <button
                type="button"
                className="text-gray-500 bg-gray-100 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 flex items-center"
              >
                Brand
                <ChevronDown className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2">
          {arr.map((item, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        {/* pagination */}

        <nav className="my-4">
          <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
            <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-current="page"
                className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </Link>
            </li>
            <li className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <ChevronRight className="w-5 h-5" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BrowseProductSection;
