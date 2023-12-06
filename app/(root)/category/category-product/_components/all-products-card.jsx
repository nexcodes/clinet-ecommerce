import { Heart, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AllProductsCard = () => {
  return (
    <div className="w-full sm:max-w-[14rem] bg-white border-[1px] border-gray-200 rounded-lg shadow p-2">
      <div className="flex justify-center relative bg-gray-50 rounded-lg">
        <Image
          src={"/images/product-1.png"}
          width={200}
          height={350}
          alt="product image"
        />
        <div className="absolute top-4 right-4 bg-white shadow rounded-full cursor-pointer p-2">
          <Heart size={20} className="text-gray-700" />
        </div>
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="flex justify-between items-center">
            <div className="bg-white rounded-full cursor-pointer px-3 py-1 space-x-1 flex items-center">
              <span className="text-gray-800 font-bold">4.4</span>
              <Star size={16} />
              <span className="text-gray-500 font-normal">{"(7)"}</span>
            </div>
            <div className="bg-white rounded-full cursor-pointer p-2">
              <ShoppingCart size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <a href="#">
          <h5 className="text-md font-semibold tracking-tight text-gray-900">
            Apple iPhone 14 Pro Max
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">$599</span>
        </div>
      </div>
    </div>
  )
}

export default AllProductsCard
