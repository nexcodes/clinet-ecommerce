import Image from "next/image";
import Hero from "./_components/hero";
import Why from "./_components/why";
import Sales from "./_components/sales";
import Deliver from "./_components/deliver";
import SellerLab from "./_components/seller-lab";
import SellerAccount from "./_components/seller-account";
import Testimonial from "./_components/testimonial";
import KnowMore from "./_components/know-more";
import NewsLetter from "./_components/news-letter";
export default function Sell() {
  return (
    <>
      <Hero />
      <Why />
      <div className="relative h-28 sm:h-36 w-full">
        <Image src="/images/banner-6.webp" alt="" fill />
      </div>
      <div className="flex justify-center my-4 max-w-3xl mx-auto p-4">
        <div className="my-4 relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/vW7EzyL7cOo"
            title="seller lab: why sell on noon? | ليش تبيع على نون"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Sales />
      <Deliver />
      <SellerLab />
      <SellerAccount />
      <div className="flex justify-center my-4 max-w-3xl mx-auto p-4">
        <div className="my-4 relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/hmV3Py-q2Tg"
            title="Getting started selling on noon"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Testimonial />
      <KnowMore />
      <NewsLetter />
    </>
  );
}
