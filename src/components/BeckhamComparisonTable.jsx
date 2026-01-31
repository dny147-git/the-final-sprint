import { Check, X } from "lucide-react";

const RowCheck = ({ value }) =>
  value ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#9c0f16] text-white">
      <Check size={14} />
    </span>
  ) : (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-500">
      <X size={14} />
    </span>
  );

export default function BeckhamComparisonTable() {
  return (
    <section className="bg-[#fff7f5] py-24">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* TITLE */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <h2 className="text-3xl font-semibold text-[#50000b]">
            UPGRADE TO THE BECKHAM STACK
          </h2>
          <span className="rounded-md bg-[#9c0f16] px-4 py-3 text-sm font-semibold text-white">
            Save $12 / month
          </span>
        </div>
        {/* img1 */}
        <div className="absolute top-10 right-60">
          <img
            src={
              "https://im8health.com/cdn/shop/files/bstack-up.png?v=1760679754&width=300"
            }
            className="w-37.5 h-27.5 object-cover hidden lg:block"
            alt="img"
          />
        </div>
        <div className="absolute top-10 right-140">
          <img
            src={
              "https://im8health.com/cdn/shop/files/ess-up.png?v=1760679753&width=300"
            }
            className="w-37.5 h-27.5 object-cover hidden lg:block"
            alt="img"
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
          <table className="w-full min-w-175 border-collapse text-sm">
            {/* HEADER */}
            <thead>
              <tr className="bg-[#5b0008] text-white">
                <th className="px-6 py-4 text-left">Feature</th>
                <th className="px-6 py-4 text-center">
                  Daily Ultimate Essentials
                </th>
                <th className="px-6 py-4 text-center">
                  The Beckham Stack
                  <br />
                  <span className="text-xs font-semibold">
                    (Essentials + Longevity)
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* IMMEDIATE */}
              <tr className="bg-[#fff3f0]">
                <td
                  colSpan={3}
                  className="px-6 py-3 font-semibold text-[#7f0c14]"
                >
                  IMMEDIATE ESSENTIALS BENEFIT
                </td>
              </tr>

              {[
                "92 Nutrient-Rich Ingredients",
                "All-Day Energy & Focus",
                "Better Sleep Quality",
                "Digestive Health & Gut Support",
                "Immune System Protection",
                "Mental Clarity & Performance",
              ].map((label, i) => (
                <tr key={i} className="border-t font-semibold">
                  <td className="px-6 py-4">{label}</td>
                  <td className="px-6 py-4 text-center">
                    <RowCheck value />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <RowCheck value />
                  </td>
                </tr>
              ))}

              {/* ADVANCED */}
              <tr className="bg-[#f6ede8]">
                <td
                  colSpan={3}
                  className="px-6 py-3 font-semibold text-[#7f0c14]"
                >
                  ADVANCED LONGEVITY BENEFIT
                </td>
              </tr>

              {[
                "10 Longevity Compounds",
                "Autophagy Cellular Cleanup Activation",
                "NMN NAD+ Cellular Restoration",
                "Targets All 12 Hallmarks of Aging",
                "Triple Senolytic Zombie Cell Removal",
              ].map((label, i) => (
                <tr key={i} className="border-t">
                  <td className="px-6 py-4">{label}</td>
                  <td className="px-6 py-4 text-center">
                    <RowCheck value={false} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <RowCheck value />
                  </td>
                </tr>
              ))}

              {/* PRICING */}
              {[
                ["Monthly Subscription", "$99", "$196"],
                ["Cost per Daily Serving", "$3", "$7"],
                ["Savings vs. Buying Separately", "-", "$12/month"],
              ].map(([label, v1, v2], i) => (
                <tr key={i} className="border-t bg-[#fffafa] font-semibold">
                  <td className="px-6 py-4 text-[#7f0c14]">{label}</td>
                  <td className="px-6 py-4 text-center text-[#50000b] font-bold">
                    {v1}
                  </td>
                  <td className="px-6 py-4 text-center text-[#50000b] font-bold">
                    {v2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
