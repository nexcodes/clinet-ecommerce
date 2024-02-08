import ProductSection from "@/app/(root)/_components/product-section";
import CategorySection from "@/app/(root)/_components/category-section";
import FashionSection from "@/app/(root)/_components/fashion-section";
import { Banner, BannerFull } from "@/app/(root)/_components/banner";
import ChristmasSection from "@/app/(root)/_components/christmas";
import DealsGrid from "@/app/(root)/_components/deals-grid";
import { getBanners } from "@/actions/get-banners";
import { getCategories } from "@/actions/get-categories";
import { getProducts } from "@/actions/get-products";

export default async function Home() {
  const banners = await getBanners();

  const categories = await getCategories();

  const { recommendedProducts , moreReasonsToShop , megaDeals } = (await getProducts()) || {
    recommendedProducts: null,
    moreReasonsToShop: null,
    megaDeals: null,
  };

  return (
    <>
      {banners && <BannerFull banners={banners} />}
      <main className="space-y-4">
        {categories && <CategorySection categories={categories} />}
        {(!!moreReasonsToShop || !!megaDeals) && <DealsGrid moreReasonsToShop={moreReasonsToShop} megaDeals={megaDeals}/>}
        {recommendedProducts && (
          <ProductSection products={recommendedProducts} />
        )}
        <ChristmasSection />
        <Banner />
        <FashionSection />
      </main>
    </>
  );
}
