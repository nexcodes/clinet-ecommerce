import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import ProductSection from "@/components/product-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container px-5 py-4 mx-auto">
          <ProductSection />
      </main>
      <Footer />
    </>
  )
}
