import Facebook from '@/components/icons/facebook'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-5 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-center ">
                <Facebook />
                <Facebook />
                <Facebook />
                <Facebook />
          </div>
          <div className='text-center space-x-1'>
                <span className='text-gray-500 hover:underline cursor-pointer'>Terms of use</span>
                <span>.</span>
                <span className='text-gray-500 hover:underline cursor-pointer'>Privacy Policy</span>
                <span>.</span>
                <span className='text-gray-500 hover:underline cursor-pointer'>Sell with us</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
