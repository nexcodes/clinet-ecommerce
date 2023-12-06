import React from "react";

const Testimonial = () => {
  return (
    <div className="container mx-auto px-5 py-8 text-center">
      <h3 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        See what our partners say
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center mt-4">
        <div className="border border-gray-300 rounded-lg p-12 space-y-2">
          <p className="text-gray-600 text-md leading-7">
            {`“noon had the fastest on-boarding time during the pandemic; half the
            time of other online players. noon is a source of regional pride in
            the Middle East. A high quality set up, powered by an A-class team;
            noon is amongst our top three e-commerce revenue generators.”`}
          </p>
          <div className="mt-4">
            <h5 className="text-md font-extrabold leading-none text-gray-900 md:text-lg">
              Iesmoenie Jakoet
            </h5>
            <span className="text-md font-semibold leading-none text-gray-400 md:text-lg">
              Landmark/Shoexpress
            </span>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg p-12 space-y-2">
          <p className="text-gray-600 text-md leading-7">
            {`“noon had the fastest on-boarding time during the pandemic; half the
            time of other online players. noon is a source of regional pride in
            the Middle East. A high quality set up, powered by an A-class team;
            noon is amongst our top three e-commerce revenue generators.”`}
          </p>
          <div className="mt-4">
            <h5 className="text-md font-extrabold leading-none text-gray-900 md:text-lg">
              Iesmoenie Jakoet
            </h5>
            <span className="text-md font-semibold leading-none text-gray-400 md:text-lg">
              Landmark/Shoexpress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
