import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/actions/get-user";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Invalid credentials");

        const user = await getUser(credentials?.email, credentials?.password);

        if (!user) throw new Error("Invalid credentials");

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: "SECRET",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
