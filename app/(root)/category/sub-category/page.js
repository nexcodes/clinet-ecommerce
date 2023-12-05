import BrowseProductSection from "./_components/browse-product";
import CategorySection from "./_components/category-section";
import ProductSection from "./_components/product-section";
import Sidebar from "../_components/side-bar";

export default function Category() {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="lg:w-[calc(100vw-320px)]">
        <CategorySection />
        <ProductSection />
        <BrowseProductSection />
      </main>
    </div>
  );
}
