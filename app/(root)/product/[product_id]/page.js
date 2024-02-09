import Image from "next/image";
import BreadCrump from "../_components/breadcrump";
import Product from "../_components/product";
import { BadgeCheck, Box, Star, StarIcon, ThumbsUp } from "lucide-react";
import { notFound } from "next/navigation";
import { getProductById } from "@/actions/get-product-by-id";

export default async function ProductPage({ params }) {

  if(!params.product_id) {
    notFound();
  };

  const product = await getProductById(params?.product_id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="py-4">
        <BreadCrump />
      </div>
    
    <Product product={product}/>

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

            <div
              className="space-y-6 text-base text-gray-900"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </div>

          {/* <div className="mt-10">
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
          </div> */}
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
