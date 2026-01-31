"use client";

import { HeartPulse, Leaf, Shield } from "lucide-react";
import IM8PillarDetail from "./PillarDetail";

export default function IM8PillarsSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#ffb3b3,#5b0d14_60%,#2a0406)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* TOP TABS */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-white rounded-full p-1 shadow">
            <button className="px-6 py-4 rounded-full bg-[#7a0d16] text-white text-sm font-semibold">
              Daily Ultimate Essentials
            </button>
            <button className="px-6 py-4 rounded-full text-[#7a0d16] text-sm font-semibold">
              Daily Ultimate Longevity
            </button>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-10 text-center">
          <span className="inline-block rounded-full bg-[#7f0c14]/90 px-4 py-3 text-[11px] font-bold tracking-widest text-white">
            COMPREHENSIVE WELLNESS
          </span>

          <h2 className="mt-6 text-4xl text-[#50000B] font-semibold md:text-5xl">
            5 Pillars of Total Health
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[18px] text-[#50000B] font-medium">
            A holistic approach to wellness, addressing every dimension of your
            health with precision-formulated ingredients.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <IM8PillarDetail />

        {/* BOTTOM CARDS */}
        <div className="mt-20 grid gap-6 grid-cols-2 md:grid-cols-3  place-items-center">
          {[
            {
              icon: <Shield />,
              title: "Superior Ingredient Forms",
              desc: "Bioactive vitamins & organic minerals for maximum absorption",
            },
            {
              icon: <Leaf />,
              title: "Clean Formulation",
              desc: "No fillers, dyes, GMOs. Vegan-friendly & allergen-free.",
            },
            {
              icon: <HeartPulse />,
              title: "Branded Ingredients",
              desc: "Quatrefolic®, KSM-66®, FloraSMART®, AstraGin®",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/90 p-6 text-center shadow-md h-full lg:w-100"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7f0c14]/10 text-[#7f0c14]">
                {card.icon}
              </div>
              <h4 className="text-sm font-semibold text-[#5b1a1a]">
                {card.title}
              </h4>
              <p className="mt-2 text-xs text-[#6f2b2b]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
