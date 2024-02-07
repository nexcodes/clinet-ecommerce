import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get(`${process.env.SERVER_URL}/public/api/product/getAllProducts`);

    if (!res.data.success) throw new Error("Failed to fetch products");

    const products = res.data.data;

    const recommendedProducts = products.filter((product) => product.recommendedForYou);
    const moreReasonsToShop = products.filter((product) => product.moreReasonsToShop);
    const megaDeals = products.filter((product) => product.megaDeals);
    const dealsOnlyOnNoon = products.filter((product) => product.dealsOnlyOnNoon);

    return {
      recommendedProducts,
      moreReasonsToShop,
      megaDeals,
      dealsOnlyOnNoon,
    }
  } catch (err) {
    return null;
  }
};
