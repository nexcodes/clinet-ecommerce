import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const BreadCrump = () => {
  return (
    <nav className="flex mx-10">
      <ol className="hidden md:inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight />

            <a
              href="#"
              className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
            >
              Electronics & Mobiles
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Mobiles & Accessories
            </span>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Mobile Phones
            </span>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Smartphones
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrump;
