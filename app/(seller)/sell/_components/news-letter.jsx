import { Rocket } from "lucide-react";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-yellow-400">
      <div className="container mx-auto px-5 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <h3 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl">
          subscribe to our newsletter

          </h3>
          <p className="text-black">
          Get tips, tutorials, news, and more delivered to your inbox to help you successfully sell with noon. Click the button below to join our mailing list:


          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-3 bg-black text-white hover:text-black hover:bg-white transition duration-200 font-semibold rounded-lg">
              Sign up to our mailing list
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
