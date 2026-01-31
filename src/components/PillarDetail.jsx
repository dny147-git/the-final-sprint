"use client";

import { Check } from "lucide-react";

export default function IM8PillarDetail() {
  return (
    <section className="relative py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          {/* LEFT LIST */}
          <div className="space-y-4 ">
            {/* ACTIVE */}
            <div className="relative rounded-2xl bg-linear-to-r from-[#7f0c14] to-[#5b0d14] p-5 text-white shadow-xl">
              <span className="absolute left-4 top-3 text-xs opacity-70">
                01
              </span>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <span className="text-lg">🧬</span>
                </div>

                <div>
                  <h4 className="leading-snug font-bold">
                    Comprehensive Nutritional Foundation
                  </h4>
                  <p className="mt-1 text-[12px] opacity-80">
                    Complete Vitamin & Mineral Profile
                  </p>
                </div>
              </div>
            </div>

            {/* INACTIVE */}
            {[
              {
                id: "02",
                title: "Superior Digestive Health Support",
                desc: "4-Tier Digestive System",
                icon: "🧠",
              },
              {
                id: "03",
                title: "Powerful Superfood & Antioxidant Complex",
                desc: "4100mg Raw Superfoods Blend",
                icon: "🌿",
              },
              {
                id: "04",
                title: "Specialized Health Complexes",
                desc: "Targeted Support for Performance",
                icon: "🎯",
              },
              {
                id: "05",
                title: "Cell Rejuvenation Technology 8™",
                desc: "Proprietary Longevity Complex",
                icon: "⚙️",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="relative rounded-2xl bg-white/85 p-5 text-[#50000B] font-bold backdrop-blur transition hover:bg-white"
              >
                <span className="absolute left-4 top-3 text-xs opacity-50">
                  {item.id}
                </span>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7f0c14]/10 text-[#7f0c14]">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold leading-snug">{item.title}</h4>
                    <p className="mt-1 text-sm opacity-70 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT DETAIL CARD */}
          <div className="relative rounded-4xl bg-white/90 p-12 shadow-2xl backdrop-blur">
            {/* Icon */}
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7f0c14]/10 text-[#7f0c14]">
              🧬
            </div>

            {/* Pill */}
            <span className="absolute right-8 top-8 rounded-full bg-[#7f0c14] px-4 py-1 text-xs font-semibold text-white">
              PILLAR 1
            </span>

            <h3 className="font-serif text-[38px] leading-tight text-[#5b1a1a]">
              Comprehensive Nutritional
              <br />
              Foundation
            </h3>

            <div className="mt-4 flex items-center gap-4">
              <div className="h-px w-10 bg-[#7f0c14]/40" />
              <p className="text-[11px] tracking-widest text-[#7f0c14]">
                COMPLETE VITAMIN & MINERAL PROFILE
              </p>
            </div>

            {/* INGREDIENTS */}
            <div className="mt-10">
              <h4 className="mb-5 text-sm font-semibold tracking-widest text-[#5b1a1a]">
                KEY INGREDIENTS
              </h4>

              <ul className="space-y-4 text-sm text-[#5b1a1a]">
                {[
                  "All essential vitamins (A, C, D, E, K1, K2, B-complex)",
                  "Full mineral spectrum (12 essential)",
                  "Vitamin C: 900mg (1000% DV) – Antioxidant Support",
                  "Vitamin D3: 1200 IU – From Vegan Lichen",
                  "Vitamin B12: 24mcg – Bioactive Methylcobalamin",
                  "Bioactive Forms: Quatrefolic® & Methylcobalamin for Superior Absorption",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#7f0c14] text-[#7f0c14]">
                      <Check size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
