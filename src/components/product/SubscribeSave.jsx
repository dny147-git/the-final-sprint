import {
  BadgeDollarSign,
  Gift,
  GraduationCap,
  PauseCircle,
  Truck,
} from "lucide-react";
import { useState } from "react";

export default function SubscribeSave() {
  const [selected, setSelected] = useState("90");

  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold text-[#5a000b]">
        2. Subscribe & Save:
      </h3>

      {/* 90 DAY */}
      <PlanCard
        active={selected === "90"}
        onClick={() => setSelected("90")}
        bestValue
        newYear
        title="90-Day Supply"
        save="Save 22%"
        billing="Billed $262.00 USD every 12 weeks"
        price="$87"
        oldPrice="$112"
        perServing="$2.91 USD / SERVING"
        features={[
          {
            icon: GraduationCap,
            text: "Exclusive Access to 90 Day IM8 Transformation Program",
          },
          {
            icon: BadgeDollarSign,
            text: "Maximum savings – lowest price per serving",
          },
          { icon: Gift, text: "Free Daily Ultimate Mixer (US$18)" },
          {
            icon: Truck,
            text: "Free Shipping to US, UK, CA, and most of EU and APAC",
          },
          { icon: PauseCircle, text: "Cancel or pause anytime" },
          {
            icon: Gift,
            text: "Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)",
          },
        ]}
      />

      {/* 30 DAY */}
      <PlanCard
        active={selected === "30"}
        onClick={() => setSelected("30")}
        title="30-Day Supply"
        save="Save 12%"
        billing="Billed $99.00 USD every 4 weeks"
        price="$99"
        oldPrice="$112"
        perServing="$3.30 USD / SERVING"
        features={[
          { text: "30-day money back guarantee" },
          { text: "Cancel or pause anytime" },
          {
            text: "Free Shipping to US, UK, CA, and most of EU and APAC",
          },
          {
            text: "Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)",
          },
        ]}
      />

      {/* One time purchase */}
      <button className="text-[#5a000b] mx-auto underline font-medium self-start">
        One Time Purchase $112
      </button>
    </section>
  );
}

/* ---------- Card ---------- */

function PlanCard({
  active,
  onClick,
  title,
  save,
  billing,
  price,
  oldPrice,
  perServing,
  features,
  bestValue,
  newYear,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full text-left
        rounded-3xl border
        p-6 transition-all
        ${
          active
            ? "border-red-500 bg-[#fff5f3]"
            : "border-[#e7d5c8] bg-white hover:border-red-400"
        }
      `}
    >
      {/* Badges */}
      <div className="absolute -top-3 left-6 flex gap-2">
        {newYear && (
          <span className="bg-yellow-400 text-[#50000b] text-xs font-bold px-3 py-1 rounded-full">
            NEW YEAR OFFER
          </span>
        )}
      </div>

      {bestValue && (
        <span className="absolute -top-3 right-6 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          BEST VALUE
        </span>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="flex gap-2">
            <div
              className="w-8 h-8 rounded-full bg-white border-2 border-red-500
             flex items-center justify-center cursor-pointer"
            >
              {active && (
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
              )}
            </div>
            <h4 className="text-xl font-semibold text-[#5a000b]">
              {title} <span className="text-green-600 font-bold">({save})</span>
            </h4>
          </div>
          <p className="text-sm text-[#5a000b]/80 mt-1 font-bold">{billing}</p>
        </div>

        <div className="text-right">
          <div className="text-lg font-semibold text-[#5a000b]">
            {price}{" "}
            <span className="line-through text-[#5a000b]/40 ">{oldPrice}</span>
            /mo
          </div>
          <div className="text-xs text-[#5a000b]/70 mt-1 font-bold">
            {perServing}
          </div>
        </div>
      </div>

      <hr className="my-5 border-[#e7d5c8]" />

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 text-[#5a000b]">
            {f.icon ? (
              <f.icon className="w-5 h-5 text-red-500 mt-0.5" />
            ) : (
              <span className="text-[#5a000b] font-bold">✓</span>
            )}
            <span className="">{f.text}</span>
          </li>
        ))}
      </ul>
    </button>
  );
}
