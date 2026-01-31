import { Check } from "lucide-react";

export default function IM8StarterKit() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#fdeeee] to-white py-24">
      <div className="mx-auto grid max-w-350 grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1">
          <h2 className="mb-10 font-serif text-[40px] leading-snug text-[#50000b]">
            GET STARTED WITH IM8 FOR
            <br />
            DAILY ULTIMATE NUTRITION
          </h2>

          {/* Price List */}
          <div className="space-y-4 text-[#50000b]">
            {/* Main product */}
            <div className="flex justify-between border-b pb-4  text-lg font-bold">
              <span>Daily Ultimate Essentials</span>
              <span>$89</span>
            </div>

            {/* Bonus */}
            <div className="text-xs font-semibold uppercase text-[#7E7E7E]/70">
              First time purchase:
            </div>

            {[
              { name: "Signature Red Cup", price: "$28" },
              {
                name: "Daily Ultimate Essentials Single-Serve Storage Box",
                price: "$8",
              },
              {
                name: "5x Bonus Daily Ultimate Essentials Single-Serve Sachets",
                price: "$18",
              },
            ].map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-[#50000b] font-semibold">
                  {item.name}
                </span>
                <span className="flex items-center gap-16">
                  <span className="text-gray-400 line-through">
                    {item.price}
                  </span>
                  <span className="text-[#50000b] font-bold">Free</span>
                </span>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between border-t pt-6 text-lg font-semibold">
              <span>Total</span>
              <span className="flex items-center gap-16">
                <span className="text-sm text-gray-500">Save $54</span>
                <span>$89</span>
              </span>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-10 w-full rounded-full bg-[#a40011] hover:bg-[#50000b] py-4 text-sm font-semibold uppercase tracking-wide text-white transition cursor-pointer">
            Get Your Free IM8 Welcome Kit Now**
          </button>

          {/* Guarantees */}
          <div className="mt-6 flex flex-wrap justify-center gap-6  text-[#5b1a1a]">
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#a0000c] text-white text-xs">
                <Check />
              </span>
              <p className="font-semibold">
                {" "}
                <strong className="text-black">30-Day</strong> money back
                guarantee
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#a0000c] text-white text-lg">
                <Check />
              </span>
              <p className="font-semibold">
                {" "}
                <strong className="text-black">Update</strong> or{" "}
                <strong className="text-black">cancel</strong> anytime
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center order-1 md:order-2">
          <img
            src="https://im8health.com/cdn/shop/files/welcome-kit-sach.png?v=1761040602&width=1200"
            alt="IM8 Starter Kit"
            className="max-w-125 lg:max-w-175 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
