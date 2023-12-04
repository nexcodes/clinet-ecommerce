import ProductSection from "@/app/(root)/_components/product-section";
import CategorySection from "@/app/(root)/_components/category-section";
import FashionSection from "@/app/(root)/_components/fashion-section";
import Banner from "@/app/(root)/_components/banner";
import ChristmasSection from "@/app/(root)/_components/christmas";
import DealsGrid from "@/app/(root)/_components/deals-grid";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="space-y-4">
        <DealsGrid />
        <CategorySection />
        <ProductSection />
        <ChristmasSection />
        <FashionSection />
      </main>
    </>
  );
}
