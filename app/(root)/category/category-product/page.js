import CategorySection from "./_components/category-section";
import Banner from "./_components/banner";
import Cards from "./_components/cards";
import ProductSection from "./_components/product-section";
import MegaDealsSection from "./_components/mega-deals-section";
import FlagshipSection from "./_components/flagship-section";
import Image from "next/image";
import ShopFromBrandSection from "./_components/shop-form-brand";
import ShopFromPriceSection from "./_components/shop-form-price";
import AllProducts from "./_components/all-product";

export default function ProductCategory() {
  return (
    <>
      <Banner />
      <main className="space-y-4">
        <CategorySection />
        <Cards />
        <ProductSection />
        <MegaDealsSection />
        <FlagshipSection />
        <div className="p-3 bg-gray-100">
          <div className="relative w-full h-24 md:h-32">
            <Image src="/images/banner-2.png" alt="" fill />
          </div>
        </div>
        <ShopFromBrandSection />
        <ShopFromPriceSection />
        <AllProducts />
      </main>
    </>
  );
}
