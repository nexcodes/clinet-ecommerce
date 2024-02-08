"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <Toaster position="bottom-center" />
      {children}
    </SessionProvider>
  );
};

export default Providers;
