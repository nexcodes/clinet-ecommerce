import Image from "next/image";
import React from "react";

const SellerLab = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-5 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Access noon seller lab
          </h3>
          <p className="text-gray-600">
            Our team of selling experts are here to make your experience on noon
            a successful one. Each week, the Seller Lab team will share new
            videos with tips, tutorials, and more to support your selling
            success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mt-8">
          <article className="shadow">
            <div className="relative h-52 w-full">
              <Image src="/images/news-letter.webp" alt="" fill />
            </div>
            <div className="p-4 bg-white">
              <h5 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
                Newsletters
              </h5>
              <p className="text-gray-600">
                Every month, receive updates, news, and industry insights
                delivered to your inbox.
              </p>
            </div>
          </article>
          <article className="shadow">
            <div className="relative h-52 w-full">
              <Image src="/images/news-letter.webp" alt="" fill />
            </div>
            <div className="p-4 bg-white">
              <h5 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
                Newsletters
              </h5>
              <p className="text-gray-600">
                Every month, receive updates, news, and industry insights
                delivered to your inbox.
              </p>
            </div>
          </article>
          <article className="shadow">
            <div className="relative h-52 w-full">
              <Image src="/images/news-letter.webp" alt="" fill />
            </div>
            <div className="p-4 bg-white">
              <h5 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
                Newsletters
              </h5>
              <p className="text-gray-600">
                Every month, receive updates, news, and industry insights
                delivered to your inbox.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SellerLab;
