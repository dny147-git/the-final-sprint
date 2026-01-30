import { useState } from "react";
import img1 from "../../assets/images/UX-Input_1.avif";
import img2 from "../../assets/images/UX-Input_2.avif";
export default function SelectFormat() {
  const [selected, setSelected] = useState("jar");

  return (
    <section className="flex flex-col gap-4 my-4">
      <h3 className="text-lg font-semibold text-[#5a000b]">
        1. Select Format:
      </h3>

      <div className="flex gap-8">
        {/* Forever Jar */}
        <FormatCard
          active={selected === "jar"}
          popular
          image={img1}
          title="Forever Jar"
          price="(354g) $2.61 USD / serving"
          onClick={() => setSelected("jar")}
        />

        {/* Single Serve */}
        <FormatCard
          active={selected === "sachet"}
          image={img2}
          title="Single-Serve Sachets"
          price="(354g) $2.91 USD / serving"
          onClick={() => setSelected("sachet")}
        />
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function FormatCard({ active, popular, image, title, price, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-71.25
        relative flex items-center justify-start 
        rounded-3xl border
      text-left
      gap-4
        transition-all
        ${
          active
            ? "bg-[#fdf1f1] border-[#5a000b]"
            : "bg-white border-[#e7d5c8] hover:border-[#5a000b]/50"
        }
      `}
    >
      {/* Popular badge */}
      {popular && (
        <span
          className="
            absolute -top-3 left-1/2 -translate-x-5
            bg-[#a40011] text-white
            text-xs font-bold
            px-4 py-1 rounded-full
          "
        >
          MOST POPULAR
        </span>
      )}

      {/* Image */}
      <div className="w-15 h-23.5 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h4 className="text-xl font-semibold text-[#5a000b]">{title}</h4>
        <p className="text-[#5a000b]/80 text-[12px] font-medium">{price}</p>
      </div>
    </button>
  );
}
