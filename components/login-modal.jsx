import React from "react";
import Model from "./modal";
import clsx from "clsx";
import axios from "axios";
import { signIn , useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginModal = ({ isOpen, onClose }) => {

  const session = useSession()

  const [variant, setVariant] = React.useState("login"); // can be login or register
  const [isLoading, setIsLoading] = React.useState(false);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    // if variant is REGISTER, then register the user
    if (variant === "register") {
      axios
        .post("/api/register", data)
        .then(() => {
          signIn("credentials", data).then(() => {
            onClose();
          });
        })
        .catch(() => {
          toast.error("Something went wrong!");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    // if variant is LOGIN, then login the user
    if (variant === "login") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
            console.error(callback?.error);
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Signed In Successfully");
            onClose();
          }
        })
        .catch(() => {
          toast.error("Something went wrong!");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
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
        <form
          className="my-4 space-y-4 max-w-sm w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === "register" && (
            <>
              <div className="w-full">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  {...register("name", { required: true })}
                  className="border border-gray-500 rounded-lg px-4 py-2 outline-none text-sm w-full"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="w-full">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  {...register("phone", { required: true })}
                  className="border border-gray-500 rounded-lg px-4 py-2 outline-none text-sm w-full"
                  placeholder="Enter your phone number..."
                />
              </div>
            </>
          )}
          <div className="w-full">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              {...register("email", { required: true })}
              className="border border-gray-500 rounded-lg px-4 py-2 outline-none text-sm w-full"
              placeholder="Enter your email..."
            />
          </div>
          <div className="w-full">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              {...register("password", { required: true })}
              className="border border-gray-500 rounded-lg px-4 py-2 outline-none text-sm w-full"
              placeholder="Enter your password..."
            />
          </div>
          <button
            className={clsx(
              "mt-4 w-full rounded-lg px-4 py-2",
              isLoading ? "bg-blue-500/50" : "bg-blue-500 text-white"
            )}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Continue
          </button>
        </form>
      </div>
    </Model>
  );
};

export default LoginModal;
