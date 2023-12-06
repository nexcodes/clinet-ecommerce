import BrandsSection from "./_components/brands";
import BrowseProductSection from "./_components/browse-product";
import CategorySection from "./_components/category-section";
import ProductSection from "./_components/product-section";
import ShopFromSection from "./_components/shop-form";
import Sidebar from "./_components/side-bar";

export default function Category() {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="lg:w-[calc(100vw-320px)]">
        <CategorySection />
        <ProductSection />
        <BrandsSection />
        <ShopFromSection />
        <BrowseProductSection />
      </main>
    </div>
  );
}
