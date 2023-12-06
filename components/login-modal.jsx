import React from "react";
import Model from "./modal";
import clsx from "clsx";

const LoginModal = ({ isOpen, onClose }) => {
  const [variant, setVariant] = React.useState("login"); // can be login or register
  const [email, setEmail] = React.useState("");

  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <div className="bg-image-login h-64"></div>
      <div className="mx-auto flex flex-col items-center justify-center space-y-4">
        <h3 className="text-2xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl">
          {"Hala! Let's get started"}
        </h3>
        <div className="max-w-xs bg-gray-600 rounded-full w-full grid grid-cols-2 p-2">
          <button
            onClick={() => setVariant("login")}
            className={clsx(
              "text-xs w-full rounded-full px-2 py-2",
              variant === "login"
                ? "bg-white text-gray-600"
                : "bg-gray-600 text-white"
            )}
          >
            Login
          </button>
          {"  "}
          <button
            onClick={() => setVariant("register")}
            className={clsx(
              "text-xs w-full rounded-full px-2 py-3",
              variant === "register"
                ? "bg-white text-gray-600"
                : "bg-gray-600 text-white"
            )}
          >
            Sign up
          </button>
        </div>
        <form className="my-4 max-w-sm w-full">
          <div className="w-full">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="border border-gray-500 rounded-lg px-4 py-2 outline-none text-sm w-full"
              placeholder="Enter your email..."
            />
          </div>
          <button
            className={clsx(
              "mt-4 w-full rounded-lg px-4 py-2",
              email.length > 0
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-400"
            )}
          >
            Continue
          </button>
        </form>
      </div>
    </Model>
  );
};

export default LoginModal;
