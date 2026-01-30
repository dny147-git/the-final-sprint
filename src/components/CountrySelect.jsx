"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
const COUNTRIES = [
  "Australia",
  "Belgium",
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Netherlands",
  "Spain",
  "United Kingdom",
  "United States",
];

export default function CountrySelect() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const filteredCountries = COUNTRIES.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-[256px] h-10 bg-white ">
      {/* Header */}
      <div
        className="flex items-center bg-[#a40011] h-10 px-4 py-3"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="font-inter text-sm font-semibold uppercase text-white hover:underline">
          USD
        </span>
        <span className="ml-1 text-white">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>

      {/* Search */}
      {isOpen && (
        <div className="shadow-md my-2 -translate-x-45">
          <div className="p-1 relative border border-black">
            <span className="uppercase text-[#a40011] text-[10px] font-medium absolute left-5 top-2">
              Search
            </span>
            <input
              type="text"
              placeholder=""
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
            w-full
            px-4 py-4
            text-sm
            tracking-wide
            text-[#a40011]
            border border-[#a40011]
            focus:outline-none
          "
            />
          </div>

          {/* List */}
          <div className="max-h-65 overflow-y-auto px-4 py-2 pb-4 font-inter">
            <ul className="space-y-4">
              {filteredCountries.map((country) => (
                <li
                  key={country}
                  className="
                font-architekt
                text-sm
                font-medium
                uppercase
                tracking-wide
                text-[#7a1f2b]
                cursor-pointer
                hover:opacity-70
              "
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
