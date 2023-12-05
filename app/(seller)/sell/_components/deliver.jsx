import Image from "next/image";
import React from "react";

const Deliver = () => {
  return (
    <div className="relative w-full h-full min-w-screen min-h-screen">
      <Image src="/images/deliver.webp" alt="" fill />
      <div className="absolute inset-0">
        <div className="container mx-auto px-5 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <h3 className="text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:text-5xl">
              Deliver to more customers
            </h3>
            <p className="text-gray-50">
              {`Thousands of vehicles on the road, serving over 450 cities in the
            Middle East - noon has built the region's largest last-mile fleet.`}
            </p>
          </div>
          <div className="flex justify-center my-4">
            <iframe
              width="702"
              height="395"
              src="https://www.youtube.com/embed/wIwM-wNcrFE"
              title="noon deliveries: Tabuk, KSA | نون: تبوك، السعودية"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
