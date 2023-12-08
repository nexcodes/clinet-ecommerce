import Image from "next/image";
import BreadCrump from "./_components/breadcrump";
import { BadgeCheck, Box, Star, StarIcon, ThumbsUp } from "lucide-react";
import EMI from "@/components/icons/emi";
import StarFill from "@/components/icons/star-fill";

export default function Product() {
  return (
    <>
      <div className="py-4">
        <BreadCrump />
      </div>
      <section className="text-gray-600 overflow-hidden p-4">
        <div className="container py-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/*  product image */}
            <div className="w-full flex gap-4">
              <div className="space-y-2">
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
              <div className="relative w-full px-4 py-2">
                <img
                  alt=""
                  className="object-contain rounded"
                  src="/images/product-1.png"
                  fill
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
                  iPhone 15 Pro 256GB Natural Titaniflex-1 5G With FaceTime -
                  Middle East Version
                </h1>
                <div className="flex flex-col space-y-1 mt-4">
                  <p className="leading-relaxed">
                    Model Nflex-1ber : MTUF3AH/A,MTV53AA/A
                  </p>
                  <div className="flex items-center gap-x-2">
                    <span>4.6</span>
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <span>{"(136)"}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm">Now:</span>
                    <span className="font-bold text-2xl text-gray-900">
                      AED 5165.00
                    </span>
                    <span className="text-xs">{"(Inclusive of VAT)"}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/images/bag.png"
                      alt=""
                      width={15}
                      height={15}
                    />
                    <span className="text-sm">Only 1 left in stock</span>
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

      {/* overview */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl border-b border-gray-200 lg:pb-4">
            Overview
          </h1>
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h3 className="text-sm font-mediflex-1 text-gray-900 mb-4">
            Specification
          </h3>

          <div className="space-y-2">
            <div className="grid grid-cols-2 place-items-staw-3 odd:bg-gray-200 p-2">
              <div className="text-sm text-gray-600">Charging Type</div>
              <div className="text-sm text-gray-900">Type-C</div>
            </div>
            <div className="grid grid-cols-2 place-items-staw-3 odd:bg-gray-200 p-2">
              <div className="text-sm text-gray-600">Charging Type</div>
              <div className="text-sm text-gray-900">Type-C</div>
            </div>
            <div className="grid grid-cols-2 place-items-staw-3 odd:bg-gray-200 p-2">
              <div className="text-sm text-gray-600">Charging Type</div>
              <div className="text-sm text-gray-900">Type-C</div>
            </div>
            <div className="grid grid-cols-2 place-items-staw-3 odd:bg-gray-200 p-2">
              <div className="text-sm text-gray-600">Charging Type</div>
              <div className="text-sm text-gray-900">Type-C</div>
            </div>
            <div className="grid grid-cols-2 place-items-staw-3 odd:bg-gray-200 p-2">
              <div className="text-sm text-gray-600">Charging Type</div>
              <div className="text-sm text-gray-900">Type-C</div>
            </div>
            <div className="grid grid-cols-2 place-items-staw-3 odd:bg-gray-200 p-2">
              <div className="text-sm text-gray-600">Charging Type</div>
              <div className="text-sm text-gray-900">Type-C</div>
            </div>
            <div className="grid grid-cols-2 place-items-staw-3 odd:bg-gray-200 p-2">
              <div className="text-sm text-gray-600">Charging Type</div>
              <div className="text-sm text-gray-900">Type-C</div>
            </div>
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-staw-3-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">
                The Basic Tee 6-Pack allows you to fully express your vibrant
                personality with three grayscale options. Feeling adventurous?
                Put on a heather gray tee. Want to be a trendsetter? Try our
                exclusive colorway: &quot;Black&quot;. Need to add an extra pop
                of color to your outfit? Our white tee has you covered.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-mediflex-1 text-gray-900">
              Highlights
            </h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Hand cut and sewn locally
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Dyed with our proprietary colors
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Pre-washed &amp; pre-shrunk
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Ultra-soft 100% cotton</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-mediflex-1 text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray
                Basic Tees. Sign up for our subscription service and be the
                first to get new, exciting colors, like our upcoming
                &quot;Charcoal Gray&quot; limited release.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* reviews */}
      <div className="mx-auto px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-3 lg:pr-8">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl border-b border-gray-200 lg:pb-4">
            Product Ratings & Reviews
          </h3>
        </div>
        <div className="mt-8 lg:border-r lg:pr-8 lg:border-gray-200">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:pb-4">
            Overall Rating
          </h3>
          <span className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:pb-4">
            4.1
          </span>

          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-green-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-8 h-8 text-green-700 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-8 h-8 text-green-700 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-8 h-8 text-green-700 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-8 h-8 ms-1 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>

          <span className="text-xs font-normal tracking-tight text-gray-500 sm:text-sm lg:pb-4">
            based on 1148 rating
          </span>
          <div>
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-700 bg-gray-100 border-gray-300 rounded"
              />
              <span className="text-sm font-bold tracking-tight text-gray-900 sm:text-base">
                5
              </span>
              <svg
                className="w-4 h-4 text-green-700 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-700 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {"(119)"}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-700 bg-gray-100 border-gray-300 rounded"
              />
              <span className="text-sm font-bold tracking-tight text-gray-900 sm:text-base">
                4
              </span>
              <svg
                className="w-4 h-4 text-green-700 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-700 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {"(119)"}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-700 bg-gray-100 border-gray-300 rounded"
              />
              <span className="text-sm font-bold tracking-tight text-gray-900 sm:text-base">
                3
              </span>
              <svg
                className="w-4 h-4 text-green-700 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-700 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {"(119)"}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-700 bg-gray-100 border-gray-300 rounded"
              />
              <span className="text-sm font-bold tracking-tight text-gray-900 sm:text-base">
                2
              </span>
              <svg
                className="w-4 h-4 text-green-700 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-700 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {"(119)"}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                className="w-4 h-4 text-green-700 bg-gray-100 border-gray-300 rounded"
              />
              <span className="text-sm font-bold tracking-tight text-gray-900 sm:text-base">
                1
              </span>
              <svg
                className="w-4 h-4 text-green-700 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-700 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {"(119)"}
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h2 className="text-lg sm:text-xl font-semibold ">
                How do I review this product?
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                If you recently purchased this product from noon, you can go to
                your Orders page and click on the Submit Review button
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 col-span-2">
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:pb-4">
              3 Customer Reviews
            </h3>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-50 p-2 px-4 rounded-sm space-x-2">
                <span className="text-sm font-normal tracking-tight text-gray-500 sm:text-base">
                  All
                </span>
                <span className="text-sm tracking-tight bg-white text-blue-500 font-semibold sm:text-base p-2 rounded-lg">
                  English
                </span>
                <span className="text-sm font-normal tracking-tight text-gray-500 sm:text-base">
                  عربي
                </span>
              </div>
              <select className="bg-gray-50 text-gray-900 text-sm p-2.5 outline-none w-40">
                <option defaultChecked value="uae">
                  Highest Rating
                </option>
                <option defaultChecked value="uae">
                  Lowest rating
                </option>
              </select>
            </div>
          </div>
          <article className="mt-8 border-t border-gray-300 pt-4 w-full">
            <div className="flex items-center mb-4">
              <Image
                height={40}
                width={40}
                className="me-4 rounded-full"
                src="/images/pic-1.jpg"
                alt=""
              />
              <div className="font-medium">
                <div className="flex items-center space-x-1">
                  <span>Anonymous |</span>
                  <span className="text-blue-500 font-normal flex items-center space-x-0.5">
                    <BadgeCheck className="w-4 h-4 mr-2" />
                    Verified Purchase
                  </span>
                </div>
                <time className="block text-sm text-gray-500 dark:text-gray-400">
                  19 Nov, 2023
                </time>
              </div>
            </div>
            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Good
            </h3>
            <p className="text-gray-500 mt-1">Good</p>
            <button className="text-gray-400 border border-gray-600 p-1 rounded-md flex items-center space-x-1 text-sm mt-2">
              <ThumbsUp className="w-4 h-4" />
              <span className="font-medium">Helpful</span>
              <span>{"(1)"}</span>
            </button>
          </article>
          <article className="mt-8 border-t border-gray-300 pt-4 w-full">
            <div className="flex items-center mb-4">
              <Image
                height={40}
                width={40}
                className="me-4 rounded-full"
                src="/images/pic-1.jpg"
                alt=""
              />
              <div className="font-medium">
                <div className="flex items-center space-x-1">
                  <span>Anonymous |</span>
                  <span className="text-blue-500 font-normal flex items-center space-x-0.5">
                    <BadgeCheck className="w-4 h-4 mr-2" />
                    Verified Purchase
                  </span>
                </div>
                <time className="block text-sm text-gray-500 dark:text-gray-400">
                  19 Nov, 2023
                </time>
              </div>
            </div>
            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Good
            </h3>
            <p className="text-gray-500 mt-1">Good</p>
            <button className="text-gray-400 border border-gray-600 p-1 rounded-md flex items-center space-x-1 text-sm mt-2">
              <ThumbsUp className="w-4 h-4" />
              <span className="font-medium">Helpful</span>
              <span>{"(1)"}</span>
            </button>
          </article>
          <article className="mt-8 border-t border-gray-300 pt-4 w-full">
            <div className="flex items-center mb-4">
              <Image
                height={40}
                width={40}
                className="me-4 rounded-full"
                src="/images/pic-1.jpg"
                alt=""
              />
              <div className="font-medium">
                <div className="flex items-center space-x-1">
                  <span>Anonymous |</span>
                  <span className="text-blue-500 font-normal flex items-center space-x-0.5">
                    <BadgeCheck className="w-4 h-4 mr-2" />
                    Verified Purchase
                  </span>
                </div>
                <time className="block text-sm text-gray-500 dark:text-gray-400">
                  19 Nov, 2023
                </time>
              </div>
            </div>
            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Good
            </h3>
            <p className="text-gray-500 mt-1">Good</p>
            <button className="text-gray-400 border border-gray-600 p-1 rounded-md flex items-center space-x-1 text-sm mt-2">
              <ThumbsUp className="w-4 h-4" />
              <span className="font-medium">Helpful</span>
              <span>{"(1)"}</span>
            </button>
          </article>
        </div>
      </div>
    </>
  );
}
