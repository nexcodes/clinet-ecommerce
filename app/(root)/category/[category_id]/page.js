import { getCategoriesTree } from "@/actions/get-categories-tree";
import BrandsSection from "../_components/brands";
import BrowseProductSection from "../_components/browse-product";
import CategorySection from "../_components/category-section";
import ProductSection from "../_components/product-section";
import ShopFromSection from "../_components/shop-form";
import Sidebar from "../_components/side-bar";
import { getSubCategories } from "@/actions/get-subcategories";
import { getProductByCategory } from "@/actions/get-product-by-category";

export default async function Category({ params }) {
  const subCategory = await getSubCategories(params.category_id);
  const products = await getProductByCategory(params.category_id);

  const bestSellingProducts = products.filter(
    (item) => item.best_selling === true
  );

  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="lg:w-[calc(100vw-320px)]">
        {!!subCategory && <CategorySection categories={subCategory} />}
        {!!bestSellingProducts && (
          <ProductSection products={bestSellingProducts} />
        )}
        <BrandsSection />
        <ShopFromSection />
        {!!products && <BrowseProductSection products={products} />}
      </main>
    </div>
  );
}
