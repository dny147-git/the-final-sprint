import { CircleCheck } from "lucide-react";
import premium1 from "../assets/images/premium1.png";
import premium2 from "../assets/images/premium2.png";
import premium3 from "../assets/images/premium3.png";
const products = [
  {
    id: 1,
    tag: "FEEL AMAZING TODAY",
    title: "Daily Ultimate Essentials:",
    subtitle: "All-in-One Supplement",
    desc: "Core nutrition with 92 nutrient-rich ingredients in one delicious drink.",
    price: "From $89",
    image: premium1, // thay ảnh thật nếu có
  },
  {
    id: 2,
    tag: "STAY YOUNG TOMORROW",
    title: "Daily Ultimate Longevity:",
    subtitle: "Healthy Aging",
    desc: "The World’s first supplement scientifically formulated to support all 12 hallmarks of aging.",
    price: "From $119",
    image: premium2,
  },
  {
    id: 3,
    tag: "THE ULTIMATE DAILY RITUAL",
    title: "The Beckham Stack:",
    subtitle: "Essentials + Longevity Set",
    desc: "Daily Ultimate Essentials and Daily Ultimate Longevity Ultimate Longevity.",
    price: "From $196",
    image: premium3,
  },
];

export default function PremiumCoreNutrition() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-left text-[52px] font-medium text-[#50000b]">
            Premium Core Nutrition
          </h2>

          <div className="mt-4 flex flex-wrap gap-6 text-[12px] text-[#7a0c0c]">
            <span className="flex gap-2">
              <span className="bg-[#50000b] rounded-full">
                <CircleCheck className=" text-white rounded-full w-full w-5 h-5" />
              </span>{" "}
              <p>
                {" "}
                <strong> 30-Day</strong> money back guarantee
              </p>
            </span>
            <span className="flex gap-2">
              {" "}
              <span className="bg-[#50000b] rounded-full">
                {" "}
                <CircleCheck className="text-white rounded-full  w-5 h-5" />{" "}
              </span>
              <p>
                {" "}
                <strong> Update </strong>or <strong>cancel</strong> anytime
              </p>
            </span>
            <span className="flex gap-2">
              {" "}
              <span className="bg-[#50000b] rounded-full">
                {" "}
                <CircleCheck className="text-white rounded-full w-5 h-5 " />{" "}
              </span>
              <p>
                {" "}
                <strong> Free shipping</strong> for all subscriptions
              </p>
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((item) => (
            <div key={item.id} className="group">
              {/* Image card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f6c7a5] to-[#f08b74]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto w-114 h-100 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                <span className="inline-block rounded-full bg-[#9b0d0d] px-3 py-1 text-xs font-semibold text-white">
                  {item.tag}
                </span>

                <h3 className="mt-4 font-serif text-lg font-semibold text-[#7a0c0c]">
                  {item.title}
                  <br />
                  {item.subtitle}
                </h3>

                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>

                <p className="mt-2 text-sm font-semibold text-[#7a0c0c]">
                  {item.price}
                </p>
                <button
                  className="w-full py-2 bg-[#A40011] hover:bg-[#50000b] 
                cursor-pointer transition-all duration-300 rounded-xl my-2 text-white"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
