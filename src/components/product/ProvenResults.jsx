import { ChevronDown } from "lucide-react";
import proven1 from "../../assets/images/proven1.avif";
import proven2 from "../../assets/images/proven2.avif";
import proven3 from "../../assets/images/proven3.avif";
export default function ProvenResults() {
  return (
    <section
      className="
        border-[1.5px] border-[#16A34A] rounded-3xl
        bg-[#eef8f1]
        p-8
        mt-4
        flex flex-col gap-6
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-[22px] font-bold text-[#5a000b]">
          Clinically Proven Results
        </h2>

        <span
          className="
            bg-[#0f7a3a] text-white
            px-4 py-1 rounded-[18px]
            text-sm font-semibold
          "
        >
          90-DAY CLINICAL STUDY
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ResultItem icon="⚡" value="95%" label="More energy" />
        <ResultItem icon="🦠" value="85%" label="Better gut health" />
        <ResultItem icon="😴" value="80%" label="Better sleep quality" />
        <ResultItem icon="🧠" value="70%" label="Sharper focus" />
      </div>

      {/* Footnote */}
      <p className="text-sm italic text-gray-600">
        *Based on 12-week randomized controlled trial by San Francisco Research
        Institute
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between flex-wrap gap-6">
        {/* Dropdown text */}
        <button
          className="
            flex items-center gap-2
            text-[#5a000b] font-semibold
            underline underline-offset-4
          "
        >
          Why These Results Matter?
          <ChevronDown size={18} />
        </button>

        {/* Badges */}
        <div className="flex gap-4">
          <img src={proven1} className="h-12.5 object-cover" alt="" />
          <img src={proven2} className="h-12.5 object-cover" alt="" />
          <img src={proven3} className="h-12.5 object-cover" alt="" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Components ---------- */

function ResultItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="flex">
        <span className="text-3xl">{icon}</span>
        <span className="text-3xl font-bold text-green-600">{value}</span>
      </div>
      <span className="text-[#5a000b] text-[12px] font-medium">{label}</span>
    </div>
  );
}

function Badge({ label }) {
  return (
    <div
      className="
        border border-[#5a000b]
        rounded-lg
        px-3 py-2
        text-xs font-semibold text-[#5a000b]
        text-center
      "
    >
      {label}
    </div>
  );
}
