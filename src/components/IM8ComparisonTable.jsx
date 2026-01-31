import { Check, X } from "lucide-react";

export default function IM8ComparisonTable() {
  const rows = [
    {
      left: "Superfoods, Greens, Fruits, Herbs",
      right: "Superfoods, Greens, Fruits, Herbs",
    },
    {
      left: "Clinical Dosed B Vitamins",
      right: "Clinical Dosed B Vitamins",
    },
    {
      left: "30mcg Clinical Dosed Vitamin D3",
      right: "No Vitamin D3",
      negative: true,
    },
    {
      left: "40mcg Clinical Dosed Vitamin K2",
      right: "Vitamin K2 dosage not disclosed",
      negative: true,
    },
    {
      left: "100mg Clinical Dosed CoQ10",
      right: "CoQ10 dosage not disclosed",
      negative: true,
    },
    {
      left: "1000mg Clinical Dosed MSM",
      right: "No MSM",
      negative: true,
    },
    {
      left: "3g Prebiotic fiber (50% more)",
      right: "2g Prebiotic fiber",
      negative: true,
    },
    {
      left: "900mg Clinical Dosed Vitamin C (114% more)",
      right: "420mg Vitamin C",
      negative: true,
    },
    {
      left: "4.2mg Clinical Dosed Riboflavin (110% more)",
      right: "2mg Riboflavin",
      negative: true,
    },
    {
      left: "65mg Magnesium (150% more)",
      right: "26mg Magnesium",
      negative: true,
    },
  ];

  return (
    <section className="bg-[#efe6d8] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* TITLE */}
        <h2 className="mb-12 relative -top-10 text-center font-normal text-[40px]  lg:text-[52px] text-[#50000b]">
          IM8: The New Gold Standard
        </h2>

        {/* TABLE */}
        <div className="relative rounded-2xl border border-[#7a1d1d]/30">
          {/* Product images */}
          <img
            src="https://im8health.com/cdn/shop/files/sachet-thumb.png?v=1761040601"
            alt="IM8 Red"
            className="absolute -top-25 left-25 lg:left-[45%] lg:-top-20 z-10  w-21.25 h-30 -translate-x-1/2"
          />
          <img
            src="https://im8health.com/cdn/shop/files/179-_Converted_B_1.png?v=1730093105"
            alt="Greens"
            className="absolute right-25 -top-25 lg:right-20 lg:-top-20 z-10  w-21.25 h-30  translate-x-1/2"
          />

          {/* HEADER */}
          <div className="grid grid-cols-2 bg-[#50000b] text-white font-bold">
            <div className="px-6 py-4 text-sm font-semibold linear-red">
              Daily Ultimate Essentials
            </div>
            <div className="px-6 py-4 text-sm font-semibold">
              Leading Greens Powder
            </div>
          </div>

          {/* ROWS */}
          <div className="divide-y border ">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2">
                {/* LEFT */}
                <div className="flex items-center gap-3 bg-[#f8efef] px-6 py-4 text-sm text-[#50000b] font-bold">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9b0f19] text-white">
                    <Check size={14} />
                  </span>
                  {row.left}
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3 bg-[#bfc8bb] px-6 py-4 text-sm text-[#2d3b32!] font-bold">
                  <span>
                    {row.negative ? (
                      <X
                        strokeWidth={3}
                        size={14}
                        className="flex h-5 w-5 p-1 items-center justify-center rounded-full bg-[#5a6e64] text-white"
                      />
                    ) : (
                      <Check
                        strokeWidth={3}
                        size={14}
                        className="bg-green-900 flex p-1 h-5 w-5 items-center justify-center rounded-full  text-white"
                      />
                    )}
                  </span>
                  {row.right}
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="bg-[#f8efef] py-4 text-center text-sm text-[#5b1a1a] underline border">
            See More
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-[#9b0f19] px-10 py-4 text-sm font-semibold text-white transition hover:bg-[#7f0c14]">
            VIEW SUPPLEMENT FACTS
          </button>
        </div>
      </div>
    </section>
  );
}
