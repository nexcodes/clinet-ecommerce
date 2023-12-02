import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import ProductSection from "@/components/product-section";
import CategorySection from "@/components/category-section";
import FashionSection from "@/components/fashion-section";
import Banner from "@/components/banner";
import ChristmasSection from "@/components/christmas";
import DealsGrid from "@/components/deals-grid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <main className="space-y-4">
        <DealsGrid />
        <CategorySection />
        <ProductSection />
        <ChristmasSection />
        <FashionSection />
      </main>
      <Footer />
    </>
  );
}
