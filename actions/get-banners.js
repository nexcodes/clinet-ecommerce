import axios from "axios";

export const getBanners = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/public/api/banner`);

    if (!res.data.success) throw new Error("Failed to fetch banners");

    return res.data.data;
  } catch (err) {
    return null;
  }
};
