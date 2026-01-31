import { useEffect, useState } from "react";

export default function StickyPromoBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // scroll qua 80px thì hiện
      setShow(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-[#5b000b] text-white
        transition-transform duration-300 ease-out
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-widest">I·M·8</div>

        {/* Text */}
        <p className="hidden text-sm md:block">
          <span className="font-semibold">2026 STARTS NOW:</span> 35% OFF — Feel
          Like Yourself Again
        </p>

        {/* CTA */}
        <button className="rounded-full bg-[#b30016] px-6 py-2 text-sm font-semibold uppercase transition hover:bg-[#d1001b]">
          Get Started
        </button>
      </div>
    </div>
  );
}
