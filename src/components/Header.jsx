import CountrySelect from "./CountrySelect";

export default function Header() {
  return (
    <header className="w-full bg-[#a40011] text-white cursor-pointer">
      <div
        className="
          h-auto
          flex flex-col items-center justify-center
          text-center
          md:flex-row
          md:justify-between
          md:text-left
          py-2
          
        "
      >
        {/* Spacer trái (desktop only) */}
        <div className="hidden md:block md:w-[162.5px]" />

        {/* Text */}
        <div className="flex flex-col md:flex-row md:gap-x-2">
          <strong className="text-[14px] font-medium uppercase">
            2026 Starts Now:
          </strong>
          <span className="text-[14px] font-medium uppercase">
            35% Off — Feel Like Yourself Again
          </span>
        </div>

        {/* Country select (desktop only) */}
        <div className="hidden md:block">
          <CountrySelect />
        </div>
      </div>
    </header>
  );
}
