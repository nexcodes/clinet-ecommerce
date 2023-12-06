import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import SubNav from "@/components/sub-nav";

export default function SiteLayout({ children }) {
  return (
    <>
      <MobileNav />
      <Navbar />
      <SubNav />

      {children}
      <Footer />
    </>
  );
}
