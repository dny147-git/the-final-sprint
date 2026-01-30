import { CircleCheck } from "lucide-react";
import IM8Ambassadors from "./IM8Ambassadors";
import IM8Transformation from "./IM8Transformation";
import ProductAccordion from "./ProductAccordion";
import ProductGallery from "./ProductGallery";
import ProvenResults from "./ProvenResults";
import Rating from "./Rating";
import SelectFormat from "./SelectFormat";
import SubscribeSave from "./SubscribeSave";

export default function ProductDetail() {
  return (
    <div
      className="
        max-w-[1400px]
        mx-auto
        px-4
        md:px-8
        lg:px-16
        pt-8
        pb-20
      "
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* LEFT – Gallery */}
        <div className="w-full lg:w-[660px] lg:sticky lg:top-24">
          <ProductGallery />
        </div>

        {/* RIGHT – Content */}
        <div className="flex-1 space-y-6">
          <Rating />

          <h1 className="text-[#50000b] text-2xl md:text-3xl lg:text-[40px] font-medium leading-tight">
            Daily Ultimate Essentials: All-in-One Supplement
          </h1>

          <p className="text-[#50000b] text-sm md:text-base">
            Engineered for peak absorption, this comprehensive formula replaces
            the need for 16 daily supplements with 92 nutrient-rich ingredients
            in one delicious drink.*
          </p>

          <ProvenResults />
          <SelectFormat />
          <SubscribeSave />

          {/* CTA */}
          <button
            className="
              bg-[#A40011]
              w-full
              py-3.5
              rounded-full
              text-white
              font-bold
              hover:bg-[#50000b]
              transition-all
              duration-300
              lg:text-sm
              md:text-base
              px-1
              text-[11px]
            "
          >
            START MY 90-DAY TRANSFORMATION PROGRAM
            <span className="ml-1 font-normal">-87.33 USD / MO</span>
          </button>

          {/* Discount */}
          <div
            className="
              w-full
              flex
              items-center
              gap-3
              bg-[#F0FDF4]
              px-4
              py-3
              rounded-xl
              border-2
              border-green-500
            "
          >
            <CircleCheck className="w-6 h-6 bg-green-500 text-white rounded-full" />
            <p className="text-green-800 text-sm md:text-base font-medium">
              <span className="font-bold">New Year discount</span> automatically
              applied at checkout
            </p>
          </div>

          <IM8Transformation />

          {/* Guarantee */}
          <div
            className="
              w-full
              flex
              items-start
              gap-4
              bg-[#F0FDF4]
              px-4
              py-4
              rounded-xl
              border-2
              border-green-500
            "
          >
            <CircleCheck className="w-8 h-8 bg-green-500 text-white rounded-full shrink-0" />
            <div>
              <p className="text-[#50000b] font-bold text-lg md:text-xl">
                30-Day 100% Money Back Guarantee
              </p>
              <p className="text-sm text-[#50000b]">
                We're so confident you'll love it, take a full 30 days to decide
              </p>
            </div>
          </div>

          <ProductAccordion />
          <IM8Ambassadors />
        </div>
      </div>
    </div>
  );
}
