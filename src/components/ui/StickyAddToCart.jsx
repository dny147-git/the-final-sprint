import { ChevronDown } from "lucide-react";

export default function StickyAddToCart() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-[#fbf6f3]">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 ">
        {/* Image */}
        <img
          src="https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg?v=1761040602&width=500"
          alt="product"
          className=" h-22.5 w-22.5 rounded object-cover hidden lg:block"
        />

        {/* Info */}
        <div className="hidden lg:flex flex-1 flex-col">
          <p className=" text-[#5b000b] font-bold">
            Daily Ultimate Essentials: All-in-One Supplement
          </p>
          <p className="text-[14px]  text-[#5b000b] ">(Forever Jar)</p>
        </div>

        <div className="rounded-3xl flex lg:justify-between border px-4 lg:py-2 text-sm gap-8 items-center">
          <div>
            <p className="text-[#5b000b] font-bold">90-Day Supply (Save 30%)</p>
            <p className=" text-[#5b000b] font-medium"> $2.61 USD / serving</p>
          </div>
          <div>
            {" "}
            <ChevronDown />
          </div>
        </div>

        {/* CTA */}
        <button className="hidden lg:block ml-auto rounded-full bg-[#5b000b] px-6 py-5 font-bold lg:w-75 text-sm  text-white transition hover:bg-[#7a0012]">
          ADD TO CART – $78.33 / MO
        </button>
        <button className="lg:hidden  rounded-full bg-[#5b000b] px-6 py-5 font-bold lg:w-full flex-1 text-sm  text-white transition hover:bg-[#7a0012]">
          ADD
        </button>
      </div>
    </div>
  );
}
