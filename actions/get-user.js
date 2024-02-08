import axios from "axios";

export const getUser = async (email, password) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
      {
        email,
        password,
      }
    );

    if (!res.data.success) throw new Error("Failed to fetch products");

    const user = res.data.data;

    return user;
  } catch (err) {
    return null;
  }
};
