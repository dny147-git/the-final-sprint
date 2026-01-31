import sachetBoxImg from "../assets/images/sachet-box.webp";
export default function IM8SavingsSection() {
  return (
    <section className="w-full bg-[#f7f1ed] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-3">
        {/* LEFT CONTENT */}
        <div className="space-y-8 lg:relative -top-30">
          <h1 className="text-[40px] font-serif font-medium w-120 leading-tight text-[#5b1a1a] lg:text-5xl">
            Replaces 16 Supplements.
            <br />
            Saving You Money.
          </h1>

          <button className="hidden lg:block rounded-full bg-[#9b0f19] px-5 py-3 w-80 text-sm font-bold tracking-wide text-white transition hover:bg-[#7f0c14]">
            SHOP NOW
          </button>
        </div>
        <div>
          {/* Img + Circle */}
          <div className="relative left-10 flex items-center">
            <div className=" mt-16 absolute z-100 -top-20 left-50 lg:-left-30 lg:top-50 w-45 h-45 lg:h-64 lg:w-64 ">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#5b0d14] text-center text-white shadow-lg">
                <p className="text-xs tracking-widest opacity-80">
                  ANNUAL SAVINGS
                </p>
                <p className="mt-2 text-2xl font-semibold">$2,532 – $3,000</p>
                <p className="text-sm">per year</p>
                <p className="mt-2 text-xs opacity-70">when switching to IM8</p>
              </div>
            </div>
            <img
              src={sachetBoxImg}
              alt="IM8 Product"
              className="mx-auto absolute top-5 left-1/2 md:static -translate-x-full lg:translate-x-0 w-26.75 lg:w-90"
            />
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="">
          {/* Product Image */}

          {/* Monthly Breakdown */}
          <div className="mt-12 space-y-4">
            <h3 className="text-[40px]  text-[#5b1a1a] hidden lg:inline-block">
              Monthly Breakdown
            </h3>

            <ul
              className="space-y-3 text-sm text-[#5b1a1a] border-2 p-4 pt-20 lg:border-0 
            lg:p-0
            rounded-3xl"
            >
              {[
                ["Multivitamins, Minerals & Antioxidants", "$35"],
                ["Superfoods, Greens & Fruits", "$50"],
                ["Immunity", "$20"],
                ["Electrolytes", "$40"],
                ["Adaptogens & Super Mushrooms", "$30"],
                ["Prebiotics, Probiotics & Postbiotics", "$40"],
                ["CoQ10 (Heart Vitality)", "$30"],
                ["MSM (Joint & Muscle Vitality)", "$25"],
                ["Essential Amino Acids", "$20"],
              ].map(([label, price]) => (
                <li key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#9b0f19]" />
                    <span className="text-[#50000b] font-medium">{label}</span>
                  </div>
                  <span className="opacity-70 line-through text-[#50000b] font-medium">
                    {price}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price Comparison */}
            <div className="mt-8 rounded-xl border border-[#9b0f19]/30 bg-white">
              <div className="flex items-center justify-between border-b px-6 py-4 text-sm">
                <span>Your Traditional Supplements</span>
                <span className="line-through">$290</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 font-semibold text-[#9b0f19]">
                <span>IM8 Daily Ultimate Essentials</span>
                <span>$89</span>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile button */}
        <div className="lg:hidden flex justify-center">
          <button className="rounded-full bg-[#9b0f19] px-5 py-3 w-80 text-sm font-bold tracking-wide text-white transition hover:bg-[#7f0c14]">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
