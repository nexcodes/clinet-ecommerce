import Image from "next/image";
import Hero from "./_components/hero";
import Why from "./_components/why";
import Sales from "./_components/sales";
import Deliver from "./_components/deliver";
import SellerLab from "./_components/seller-lab";
import SellerAccount from "./_components/seller-account";
export default function Sell() {
  return (
    <>
      <Hero />
      <Why />
      <div className="relative h-20 sm:h-28 w-full">
        <Image src="/images/banner-6.webp" alt="" fill />
      </div>
      <div className="flex justify-center my-4">
        <iframe
          width="749"
          height="421"
          src="https://www.youtube.com/embed/vW7EzyL7cOo"
          title="seller lab: why sell on noon? | ليش تبيع على نون"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Sales />
      <Deliver />
      <SellerLab />
      <SellerAccount />
    </>
  );
}
