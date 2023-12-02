import Image from "next/image";
import React from "react";

const FashionCard = () => {
  return (
    <div>
      <Image className="rounded-sm" src="/fashion.png" width={200} height={200} alt="" />
      <h2 className="font-bold text-lg mt-2">Hoodies</h2>
    </div>
  );
};

export default FashionCard;
