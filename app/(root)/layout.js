import Navbar from "@/components/nav";
import Footer from "@/components/footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
