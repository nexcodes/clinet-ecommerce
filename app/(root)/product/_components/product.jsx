"use client";

import { useState } from "react";
import EMI from "@/components/icons/emi";
import StarFill from "@/components/icons/star-fill";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const Product = ({ product }) => {
  const [imageUrl, setImageURL] = useState(product.images[0]);

  return (
    <section className="text-gray-600 overflow-hidden p-4">
      <div className="container py-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/*  product image */}
          <div className="w-full flex gap-4">
            <div className="space-y-2">
              {product.images.map((item) => {
                return (
                  <Image
                    key={item}
                    width={100}
                    height={100}
                    alt=""
                    onClick={() => setImageURL(item)}
                    className="object-cover object-center rounded border-2 border-gray-300 p-2 cursor-pointer"
                    src={item}
                  />
                );
              })}
            </div>
            <div className="relative w-full px-4 py-2">
              <img
                alt=""
                className="object-contain rounded"
                src={imageUrl || "/images/product-1.png"}
              />
            </div>
          </div>
          {/* product description */}
          <div className="w-full flex flex-col lg:flex-row pb-4 lg:pr-4">
            <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Apple
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-mediflex-1 mb-1">
                {product.name}
              </h1>
              <div className="flex flex-col space-y-1 mt-4">
                <p className="leading-relaxed">{product.shortDescription}</p>
                <div className="flex items-center gap-x-2">
                  <span>4.6</span>
                  <StarIcon className="w-4 h-4 text-yellow-500" />
                  <span>{"(136)"}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="text-sm">Now:</span>
                  {product?.saleStatus ? (
                    <div>
                      <span className="text-black font-bold text-md md:text-lg line-through">
                        ${product?.price}
                      </span>{" "}
                      <span className="text-black font-bold text-lg md:text-xl">
                        ${product?.salePrice}
                      </span>{" "}
                      <span className="text-green-600 font-bold text-xs">
                        {product?.discount}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-xl font-bold text-gray-900">
                      ${product?.price}
                    </span>
                  )}
                  <span className="text-xs">{"(Inclusive of VAT)"}</span>
                </div>
                {product?.quantity < 40 && (
                  <>
                    <div className="flex items-center gap-x-2">
                      <Image
                        src="/images/bag.png"
                        alt=""
                        width={15}
                        height={15}
                      />
                      <span className="text-sm">
                        Only {product?.quantity} left in stock
                      </span>
                    </div>
                  </>
                )}

                <div className="bg-pink-50 rounded px-4 py-2 flex items-center space-x-4">
                  <EMI />
                  <span className="text-sm">
                    Monthly payment plans from AED 215.
                  </span>
                  <a className="text-sm text-yellow-400 underline font-bold">
                    View more details
                  </a>
                </div>
                <div className="bg-pink-50 rounded px-4 py-2 flex items-center space-x-4">
                  <EMI />
                  <span className="text-sm">
                    Monthly payment plans from AED 215.
                  </span>
                  <a className="text-sm text-yellow-400 underline font-bold">
                    View more details
                  </a>
                </div>
                <div className="bg-pink-50 rounded px-4 py-2 flex items-center space-x-4">
                  <EMI />
                  <span className="text-sm">
                    Monthly payment plans from AED 215.
                  </span>
                  <a className="text-sm text-yellow-400 underline font-bold">
                    View more details
                  </a>
                </div>
              </div>

              <div className="flex items-end justify-between space-x-2">
                <div className="flex flex-col items-center">
                  <span className="mr-3 font-semibold">Quantity</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="w-full text-center">
                  <button className="w-full font-semibold text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to Cart
                  </button>
                </div>
                <div>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 my-4">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  className="object-cover object-center rounded border-2 border-gray-300 p-2"
                  src="/images/product-1.png"
                />
                <Image
                  width={100}
                  height={100}
                  alt=""
                  className="object-cover object-center rounded border-2 border-gray-300 p-2"
                  src="/images/product-1.png"
                />
                <Image
                  width={100}
                  height={100}
                  alt=""
                  className="object-cover object-center rounded border-2 border-gray-300 p-2"
                  src="/images/product-1.png"
                />
                <Image
                  width={100}
                  height={100}
                  alt=""
                  className="object-cover object-center rounded border-2 border-gray-300 p-2"
                  src="/images/product-1.png"
                />
              </div>

              <div>
                <div>
                  <span className="text-sm">
                    Internal Memory: <strong>512gb</strong>
                  </span>

                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500 bg-gray-50 rounded px-3 py-2">
                      128gb
                    </div>
                    <div className="text-sm text-blue-500 bg-white border border-blue-500 rounded px-3 py-2">
                      512gb
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-50 rounded px-3 py-2">
                      1tb
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* seller & other misc info */}
          <div className="border-t lg:border-t-0 lg:border-l border-gray-300 p-2">
            <div className="border-b border-gray-300 rounded px-4 py-2 flex items-center space-x-4">
              <EMI />
              <span className="text-sm">1 year warranty.</span>
              <a className="text-sm text-blue-500 underline font-bold">
                Learn more
              </a>
            </div>
            <div className="border-b border-gray-300 rounded px-4 py-2 flex items-center space-x-4">
              <EMI />
              <span className="text-sm">1 year warranty.</span>
              <a className="text-sm text-blue-500 underline font-bold">
                Learn more
              </a>
            </div>
            <div className="border-b border-gray-300 rounded px-4 py-2 flex items-center space-x-4">
              <EMI />
              <span className="text-sm">1 year warranty.</span>
              <a className="text-sm text-blue-500 underline font-bold">
                Learn more
              </a>
            </div>

            {/* seller box */}
            <div className="border border-gray-300 rounded-md">
              <div className="border-b border-gray-300 p-4">
                <div className="flex items-center mb-4 space-y-2">
                  <Image
                    height={40}
                    width={40}
                    className="me-4 rounded-full"
                    src="/images/pic-1.jpg"
                    alt=""
                  />
                  <div className="font-medium">
                    <div className="flex items-center space-x-1">
                      Sold by
                      <span className="ml-2 selection:text-blue-500 underline font-semibold">
                        Company
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 bg-green-600 flex items-center space-x-1 rounded-lg">
                        <span className="text-white">4.6</span>
                        <StarFill className="w-4 h-4 text-white" />
                      </div>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">
                        79% positive rating
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400">
                  TDRA registered stock with 1 year warrenty
                </p>
              </div>
              <div className="grid grid-cols-2 place-items-center p-4">
                <div className="text-center flex flex-col items-center justify-center border-r border-gray-300 pr-2">
                  <Image
                    src="/images/rating.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="block text-md text-gray-500 ">
                    Great recent rating
                  </span>
                </div>
                <div className="text-center flex flex-col items-center justify-center">
                  <span className="block text-2xl text-green-600 font-bold">
                    80%
                  </span>
                  <span className="block text-md text-gray-500">
                    product as described
                  </span>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="px-4 py-2 space-y-2">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-50 p-2 rounded-full">
                  <EMI />
                </div>
                <div className="flex flex-col">
                  <span className="text-md font-bold">Free returns</span>
                  <span className="text-sm">
                    get free return on eligible items
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 py-2 space-y-2">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-50 p-2 rounded-full">
                  <EMI />
                </div>
                <div className="flex flex-col">
                  <span className="text-md font-bold">Free returns</span>
                  <span className="text-sm">
                    get free return on eligible items
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 py-2 space-y-2">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-50 p-2 rounded-full">
                  <EMI />
                </div>
                <div className="flex flex-col">
                  <span className="text-md font-bold">Free returns</span>
                  <span className="text-sm">
                    get free return on eligible items
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
