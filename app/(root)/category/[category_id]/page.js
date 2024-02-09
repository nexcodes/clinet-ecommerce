import { getCategoriesTree } from "@/actions/get-categories-tree";
import BrandsSection from "../_components/brands";
import BrowseProductSection from "../_components/browse-product";
import CategorySection from "../_components/category-section";
import ProductSection from "../_components/product-section";
import ShopFromSection from "../_components/shop-form";
import Sidebar from "../_components/side-bar";
import { getSubCategories } from "@/actions/get-subcategories";

export default async function Category({ params }) {
  const subCategory = await getSubCategories(params.category_id);
  
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="lg:w-[calc(100vw-320px)]">
        {subCategory && (
          <CategorySection categories={subCategory} />
        )}
        <ProductSection />
        <BrandsSection />
        <ShopFromSection />
        <BrowseProductSection />
      </main>
    </div>
  );
}
