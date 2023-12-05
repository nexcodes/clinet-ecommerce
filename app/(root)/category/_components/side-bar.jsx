"use client";

import clsx from "clsx";
import { ChevronDown, Search } from "lucide-react";
import React from "react";

const Sidebar = () => {
  const [brandHidden, setBrandHidden] = React.useState(true);
  const [priceHidden, setPriceHidden] = React.useState(true);
  const [ratingHidden, setRatingHidden] = React.useState(true);
  const [colorHidden, setColorHidden] = React.useState(true);

  const [range, setRange] = React.useState(3);

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bg-gray-50 h-full w-full min-h-screen overflow-y-auto lg:static lg:w-[300px] z-50 p-4">
        <div className="space-y-2">
          {/* brand */}
          <div>
            <div className="flex items-center justify-between">
              <h6 className="text-lg font-bold">Brand</h6>
              <ChevronDown
                onClick={() => setBrandHidden((prev) => !prev)}
                className={clsx(
                  "transition cursor-pointer",
                  brandHidden && "-rotate-90"
                )}
              />
            </div>
            <div hidden={brandHidden} className="space-y-2">
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-600" />
                  </div>
                  <input
                    type="search"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-900 bg-white "
                    placeholder="Search..."
                    required
                  />
                </div>
              </form>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Puma
                  </label>
                </div>
                <p className="text-gray-500 text-xs">{"(50)"}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Puma
                  </label>
                </div>
                <p className="text-gray-500 text-xs">{"(50)"}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Puma
                  </label>
                </div>
                <p className="text-gray-500 text-xs">{"(50)"}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Puma
                  </label>
                </div>
                <p className="text-gray-500 text-xs">{"(50)"}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Puma
                  </label>
                </div>
                <p className="text-gray-500 text-xs">{"(50)"}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Puma
                  </label>
                </div>
                <p className="text-gray-500 text-xs">{"(50)"}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Puma
                  </label>
                </div>
                <p className="text-gray-500 text-xs">{"(50)"}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Puma
                  </label>
                </div>
                <p className="text-gray-500 text-xs">{"(50)"}</p>
              </div>
            </div>
          </div>
          {/* Price */}
          <div>
            <div className="flex items-center justify-between">
              <h6 className="text-lg font-bold">Price</h6>
              <ChevronDown
                onClick={() => setPriceHidden((prev) => !prev)}
                className={clsx(
                  "transition cursor-pointer",
                  priceHidden && "-rotate-90"
                )}
              />
            </div>
            <div
              className={clsx(
                "flex items-center gap-4",
                priceHidden && "hidden"
              )}
            >
              <input
                type="number"
                className="block w-1/3 p-2 text-sm text-gray-900 border border-gray-600 bg-white "
                placeholder="from..."
                required
              />
              <p className="text-lg text-gray-600">TO</p>
              <input
                type="number"
                className="block w-1/3 p-2 text-sm text-gray-900 border border-gray-600 bg-white "
                placeholder="to..."
                required
              />
            </div>
          </div>
          {/* Rating */}
          <div>
            <div className="flex items-center justify-between">
              <h6 className="text-lg font-bold">Product Rating</h6>
              <ChevronDown
                onClick={() => setRatingHidden((prev) => !prev)}
                className={clsx(
                  "transition cursor-pointer",
                  ratingHidden && "-rotate-90"
                )}
              />
            </div>
            <div className={clsx(ratingHidden && "hidden")}>
              <input
                type="range"
                min="0"
                max="5"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">0 star</span>
                <span className="text-xs text-gray-400">5 star</span>
              </div>
            </div>
          </div>
          {/* color */}
          <div>
            <div className="flex items-center justify-between">
              <h6 className="text-lg font-bold">Color</h6>
              <ChevronDown
                onClick={() => setColorHidden((prev) => !prev)}
                className={clsx(
                  "transition cursor-pointer",
                  colorHidden && "-rotate-90"
                )}
              />
            </div>
            <div
              className={clsx(
                "flex flex-wrap items-center gap-4",
                colorHidden && "hidden"
              )}
            >
              <div className="bg-white rounded px-4 py-2 flex items-center space-x-1">
                <div className="h-10 w-10 border border-gray-300 bg-white rounded mr-2"></div>
                <div>
                  <p className="text-sm text-gray-600">white</p>
                  <span className="text-xs text-gray-400">{"(34)"}</span>
                </div>
              </div>
              <div className="bg-white rounded px-4 py-2 flex items-center space-x-1">
                <div className="h-10 w-10 border border-gray-300 bg-white rounded mr-2"></div>
                <div>
                  <p className="text-sm text-gray-600">white</p>
                  <span className="text-xs text-gray-400">{"(34)"}</span>
                </div>
              </div>
              <div className="bg-white rounded px-4 py-2 flex items-center space-x-1">
                <div className="h-10 w-10 border border-gray-300 bg-white rounded mr-2"></div>
                <div>
                  <p className="text-sm text-gray-600">white</p>
                  <span className="text-xs text-gray-400">{"(34)"}</span>
                </div>
              </div>
              <div className="bg-white rounded px-4 py-2 flex items-center space-x-1">
                <div className="h-10 w-10 border border-gray-300 bg-white rounded mr-2"></div>
                <div>
                  <p className="text-sm text-gray-600">white</p>
                  <span className="text-xs text-gray-400">{"(34)"}</span>
                </div>
              </div>
              <div className="bg-white rounded px-4 py-2 flex items-center space-x-1">
                <div className="h-10 w-10 border border-gray-300 bg-white rounded mr-2"></div>
                <div>
                  <p className="text-sm text-gray-600">white</p>
                  <span className="text-xs text-gray-400">{"(34)"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
