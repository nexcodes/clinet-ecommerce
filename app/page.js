import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import ProductSection from "@/components/product-section";
import CategorySection from "@/components/category-section";
import FashionSection from "@/components/fashion-section";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <main className="container px-5 py-4 mx-auto space-y-4">
        <CategorySection />
        <ProductSection />
        <FashionSection />
      </main>
      <Footer />
    </>
  );
}
