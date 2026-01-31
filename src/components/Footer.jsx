export default function Footer() {
  return (
    <footer className="bg-[#5b000b] text-[#ffb3b1]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* SHOP */}
          <FooterColumn
            title="Shop"
            links={[
              "Premium Core Nutrition",
              "The Beckham Stack",
              "Merchandise",
              "Shop All",
            ]}
          />

          {/* COMPANY */}
          <FooterColumn
            title="Company"
            links={["About Us", "Science", "Impact"]}
          />

          {/* LEARN */}
          <FooterColumn
            title="Learn"
            links={[
              "Reviews",
              "Ingredients",
              "Quality and Standards",
              "IM8 Inner Circle",
              "IM8 vs AG1 Next Gen",
              "IM8 vs Live it Up Super Greens",
              "IM8 vs Bloom Greens & Superfoods",
              "IM8 vs Huel Daily Greens",
            ]}
          />

          {/* SUPPORT */}
          <FooterColumn
            title="Support"
            links={[
              "FAQs",
              "Track My Order",
              "Returns / Exchanges",
              "Contact Us",
            ]}
          />

          {/* COMMUNITY */}
          <FooterColumn
            title="IM8 Community"
            links={["Instagram", "Facebook", "TikTok", "YouTube", "Pinterest"]}
          />

          {/* NEWSLETTER */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-sm font-semibold uppercase lg:w-75 text-[#ff9693] ">
              Join the community for exclusive wellness insights
            </h4>

            <input
              type="email"
              placeholder="Email address"
              className="mb-4 rounded-full bg-white px-5 lg:w-87.5 w-full py-3 text-sm text-black placeholder:text-gray-500 focus:outline-none"
            />

            <button className=" rounded-full lg:w-87.5 w-full bg-[#b30016] py-3 text-sm font-semibold uppercase text-white transition hover:bg-[#d1001b]">
              Join Now
            </button>

            <p className="mt-3 text-xs text-[#ffb3b1]/70 lg:w-75">
              *By joining, you'll receive our wellness insights and can
              unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        {" "}
        <img
          src="https://im8health.com/cdn/shop/files/IM8_Logo-R_Pink.svg?v=1729137155&width=900"
          className="lg:w-[1400px] mx-auto "
        />
      </div>
      <FooterLegal />
    </footer>
  );
}
export function FooterLegal() {
  return (
    <div className="bg-[#5b000b] text-[#ffb3b1]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top row */}
        <div className="mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
          <span>© 2026 IM8®</span>
          <span>•</span>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>

        {/* Disclaimer box */}
        <div className="border border-[#ff9693]/60 px-6 py-8 text-center">
          <p className="text-sm  text-[#ff9693] text-[20px] font-bold">
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
        </div>

        {/* Bottom note */}
        <p className="mt-6 text-center text-sm font-semibold text-[#ff9693]/80">
          **Free Welcome Kit available for new subscribers only.
        </p>
      </div>
    </div>
  );
}
function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-sm  uppercase tracking-wide font-bold text-[#ff9693]">
        {title}
      </h4>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition text-[#ff9693]">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
