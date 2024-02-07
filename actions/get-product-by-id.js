import axios from "axios";

export const getProductById = async (productId) => {
  try {
    const res = await axios.get(`${process.env.SERVER_URL}/public/api/product/${productId}`);

    if (!res.data.success) throw new Error("Failed to fetch products");

    return res.data.data;
  } catch (err) {
    return null;
  }
};
