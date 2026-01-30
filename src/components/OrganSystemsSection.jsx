import { CircleCheck } from "lucide-react";
import { useState } from "react";
import {
  CardiovascularIcon,
  DigestiveIcon,
  EndocrineIcon,
  ImmuneIcon,
  IntegumentaryIcon,
  MuscularIcon,
  NervousIcon,
  SkeletalIcon,
  UrinaryIcon,
} from "../constant/index";
const ICON_MAP = {
  Digestive: DigestiveIcon,
  Immune: ImmuneIcon,
  Cardiovascular: CardiovascularIcon,
  Muscular: MuscularIcon,
  Skeletal: SkeletalIcon,
  Integumentary: IntegumentaryIcon,
  Nervous: NervousIcon,
  Endocrine: EndocrineIcon,
  Urinary: UrinaryIcon,
};
const ORGAN_LIST = [
  "Digestive",
  "Immune",
  "Cardiovascular",
  "Muscular",
  "Skeletal",
  "Integumentary",
  "Nervous",
  "Endocrine",
  "Urinary",
];
const ORGAN_CONTENT = {
  Digestive: {
    order: <DigestiveIcon />,
    title: "Digestive Support",
    subtitle: "Prebiotics, Probiotics, Postbiotics, Enzymes",
    description:
      "A complete 4-tier digestive support system featuring 10 Billion CFU of probiotics and clinically proven enzymes to optimize nutrient absorption and gut health.",
  },
  Immune: {
    order: <ImmuneIcon />,
    title: "Immune Support",
    subtitle: "Vit C, D, Zinc, Mushrooms",
    description:
      "Fortifies your body's natural defenses with high-potency Vitamin C (1000% DV), Zinc, and a specialized mushroom complex including Reishi and Chaga",
  },
  Cardiovascular: {
    order: <CardiovascularIcon />,
    title: "Cardiovascular Support ",
    subtitle: "COQ10, NITRATES, POTASSIUM",
    description:
      "Supports heart health and circulation with natural nitrates from beetroot, CoQ10 for cellular energy, and potassium for healthy blood pressure levels",
  },
  Muscular: {
    order: <MuscularIcon />,
    title: "Cardiovascular Support",
    subtitle: "COQ10, NITRATES, POTASSIUM",
    description:
      "Accelerates recovery and maintains muscle function with a full spectrum of amino acids, MSM for joint comfort, and essential electrolytes.",
  },
  Skeletal: {
    order: <SkeletalIcon />,
    title: "Skeletal Support",
    subtitle: "Calcium, Vit D, K2, Boron",
    description: `Builds and maintains strong bones with bioavailable Calcium, Vitamin D3 from vegan lichen, and Vitamin K2 to direct calcium to where it's needed.`,
  },
  Integumentary: {
    order: <IntegumentaryIcon />,
    title: "Skin, Hair & Nail Support",
    subtitle: "MSM, Vit C, E, Biotin, Silica",
    description: `Promotes radiant skin, hair, and nails through collagen-supporting Vitamin C, Biotin, and MSM to combat oxidative stress.`,
  },
  Nervous: {
    order: <NervousIcon />,
    title: "Nervous System Support",
    subtitle: "B-Vitamins, Magnesium, Adaptogens",
    description: `Calms the mind and supports cognitive function with a complete B-Complex (including Methylcobalamin) and stress-adapting herbs like Reishi & Ashwagandha.`,
  },

  Endocrine: {
    order: <EndocrineIcon />,
    title: "Endocrine Support",
    subtitle: "Adaptogens, Vit D, Chromium",
    description: `Balances hormones and metabolism with targeted adaptogens and Chromium to support healthy blood sugar levels already within normal range.`,
  },

  Urinary: {
    order: <UrinaryIcon />,
    title: "Urinary Support",
    subtitle: "Hydra Electrolytes Complex",
    description: `Optimizes fluid balance and kidney function with a precision hydration complex featuring Potassium Citrate and Magnesium Glycinate`,
  },

  // 👉 bạn bổ sung tiếp
};

export default function OrganSystemsSection() {
  const [active, setActive] = useState("Digestive");
  const ActiveIcon = ICON_MAP[active];
  const content = ORGAN_CONTENT[active];
  return (
    <section className="relative w-full py-24 bg-[#f6dede] overflow-hidden">
      {/* background grid placeholder */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e7bcbc_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white rounded-full p-1 shadow">
            <button className="px-6 py-2 rounded-full bg-[#7a0d16] text-white text-sm font-semibold">
              Daily Ultimate Essentials
            </button>
            <button className="px-6 py-2 rounded-full text-[#7a0d16] text-sm font-semibold">
              Daily Ultimate Longevity
            </button>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-6 py-2 rounded-full bg-[#7a0d16] text-white text-xs tracking-widest font-semibold">
            COMPREHENSIVE BODY SUPPORT
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-[#6b0f1a] text-4xl md:text-[56px] font-medium mb-4">
          9 Major Organ Systems
        </h2>
        <p className="text-center text-[18px]  text-[#6b0f1a]/80 max-w-137.5 mx-auto mb-16 text-sm">
          One serving delivers comprehensive support for your entire body,
          replacing multiple supplements with a single, powerful formula.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 ">
          {/* LEFT – Icons grid */}
          <div className="grid grid-cols-3 gap-4">
            {ORGAN_LIST.map((item) => {
              const Icon = ICON_MAP[item];
              const isActive = active === item;

              return (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`h-28 rounded-2xl flex flex-col items-center justify-center gap-2 text-sm font-medium shadow transition
        ${
          isActive
            ? "bg-[#7a0d16] text-white scale-[1.02]"
            : "bg-white text-[#6b0f1a] hover:bg-[#f7e9ea]"
        }`}
                >
                  <Icon className="w-8 h-8" />
                  {item}
                </button>
              );
            })}
          </div>

          {/* RIGHT – Detail Card */}
          <div className="bg-[#fbf4f1] rounded-3xl p-10 shadow relative overflow-hidden">
            {/* watermark icon */}
            <div className="absolute right-8 bottom-8 opacity-10">
              <ActiveIcon className="w-40 h-40" />
            </div>

            <div className="flex gap-8 mb-6">
              <div
                className="w-12 h-12 rounded-xl 
              bg-[linear-gradient(135deg,rgba(80,0,11,0.08)_0%,rgba(80,0,11,0.03)_100%)]
              text-[#6b0f1a] flex items-center justify-center font-bold"
              >
                {content?.order}
              </div>
              <h3 className="text-[34px] font-medium text-[#6b0f1a]">
                {content?.title}
                <p className="text-xs uppercase text-[11px] tracking-widest text-[#6b0f1a]/60 my-4">
                  ------- {content?.subtitle}
                </p>

                <p className="text-sm text-[#7B1E2A] max-w-xl mb-6">
                  {content?.description}
                </p>

                <button
                  className="inline-flex items-center gap-2 px-6 
                py-3 rounded-full border border-[#7a0d16]/20 
                bg-[linear-gradient(135deg,rgba(80,0,11,0.04)_0%,transparent_100%)]
                text-[#6b0f1a] text-sm font-semibold"
                >
                  <CircleCheck /> Clinically Dosed Ingredients
                </button>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
