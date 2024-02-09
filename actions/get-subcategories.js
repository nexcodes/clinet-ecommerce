import axios from "axios";

export const getSubCategories = async (categoryId) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/public/api/category/subcategories?categoryId=${categoryId}`);

    if (!res.data.success) throw new Error("Failed to fetch categories");

    return res.data.data;
  } catch (err) {
    return null;
  }
};
