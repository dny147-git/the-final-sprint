import { useState } from "react";
import img1 from "../../assets/images/product/product1.webp";
import img10 from "../../assets/images/product/product10.webp";
import img11 from "../../assets/images/product/product11.webp";
import img2 from "../../assets/images/product/product2.webp";
import img3 from "../../assets/images/product/product3.jpg";
import img4 from "../../assets/images/product/product4.webp";
import img5 from "../../assets/images/product/product5.webp";
import img6 from "../../assets/images/product/product6.webp";
import img7 from "../../assets/images/product/product7.webp";
import img8 from "../../assets/images/product/product8.webp";
import img9 from "../../assets/images/product/product9.webp";
import ThumbnailList from "./ThumbnailList";
export default function ProductGallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const [active, setActive] = useState(images[0]);

  return (
    <div className="flex gap-6">
      {/* Thumbnails */}
      <ThumbnailList images={images} active={active} setActive={setActive} />

      {/* Main image */}
      <div className="w-165 overflow-hidden">
        <img
          src={active}
          alt="Product"
          className="
            w-full h-165
            object-cover
            rounded-xl
          "
        />
      </div>
    </div>
  );
}
