import React from "react";
import Model from "./modal";
import UaeFlag from "./icons/uae-flag";

const MapModal = ({ isOpen, onClose }) => {
  return (
    <Model isOpen={isOpen} onClose={onClose} widthFull>
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
          Add a new Address
        </h3>
        <select className="bg-gray-50 text-gray-900 text-sm p-2.5 outline-none w-40">
          <option defaultChecked value="uae">
            <UaeFlag /> UAE
          </option>
          <option defaultChecked value="uae">
            <UaeFlag /> UAE
          </option>
        </select>
      </div>
      <iframe
        className="w-full h-[75vh]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54426.06613901443!2d74.31295740472412!3d31.506876298605118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc71bcb60c83fe952!2sOptions%20-%20Coffee%20%26%20More!5e0!3m2!1sen!2s!4v1669056808375!5m2!1sen!2s"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex items-center">
        <button className="mt-4 w-full rounded-lg px-4 py-2 bg-gray-100 text-gray-400">
          Confirm Location
        </button>
      </div>
    </Model>
  );
};

export default MapModal;
