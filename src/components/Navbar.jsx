import { ChevronDown, Menu } from "lucide-react";
import headerLogo from "../assets/images/header-logo.svg";
import ShopMegaMenu from "./ShopMegaMenu";
export default function Navbar() {
  return (
    <nav className="relative z-9999 flex items-center justify-between px-4 lg:mx-24 lg:px-12.5 h-14">
      {/* ===== Mobile Left (Hamburger) ===== */}
      <div className="lg:hidden">
        <Menu className="w-6 h-6 text-[#50000b]" />
      </div>

      {/* ===== Desktop Left Menu ===== */}
      <div className="hidden lg:block">
        <ul className="flex gap-x-2">
          <li className="relative group p-5 flex items-center gap-2">
            <a className="nav-link">Shop</a>
            <ChevronDown className="w-4 h-4" />

            {/* Mega menu */}
            <div
              className="invisible opacity-0 translate-y-2
                    group-hover:visible
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-300"
            >
              <ShopMegaMenu />
            </div>
          </li>
          <li className="p-5">
            <a className="nav-link">Science</a>
          </li>
          <li className="p-5">
            <a className="nav-link">The Beckham Stack</a>
          </li>
          <li className="p-5">
            <a className="nav-link">Welcome from David</a>
          </li>
        </ul>
      </div>

      {/* ===== Logo (center) ===== */}
      <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
        <img src={headerLogo} alt="logo" className="h-6 w-auto" />
      </div>

      {/* ===== Right ===== */}
      <div className="flex items-center gap-x-3">
        {/* Desktop Right Menu */}
        <ul className="hidden lg:flex items-center gap-x-2 cursor-pointer">
          <li className="p-5">
            <a className="nav-link">Reviews</a>
          </li>
          <li className="p-5">
            <a className="nav-link">Ingredients</a>
          </li>
          <li className="relative p-5 flex items-center gap-2 group cursor-pointer">
            {/* Text + icon */}
            <a className="nav-link">Discover</a>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />

            {/* Dropdown */}
            <div
              className="
      absolute left-1/2 top-10 mt-2
      -translate-x-12.5
      w-53

      rounded-xl
      bg-white
      shadow-xl
      p-6

      opacity-0
      translate-y-3
      pointer-events-none

      transition-all duration-300 ease-out
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:pointer-events-auto
    "
            >
              {/* Nội dung */}
              <ul className="flex flex-col gap-3 text-[#50000b]">
                <li className="hover:text-[#b11226]">
                  <a className="nav-link">About us</a>
                </li>
                <li className="hover:text-[#b11226]">
                  <a className="nav-link">Our Impact</a>
                </li>
                <li className="hover:text-[#b11226]">
                  <a className="nav-link">Quality and Standards</a>
                </li>
                <li className="hover:text-[#b11226]">
                  <a className="nav-link">The Healthspan Blog</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/* Icons (mobile + desktop) */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M3 30C3 22.82 8.82 17 16 17C23.18 17 29 22.82 29 30"
            stroke="#50000B"
            strokeWidth="2"
          />
          <path
            d="M16 17C20.1421 17 23.5 13.6421 23.5 9.5C23.5 5.35786 20.1421 2 16 2C11.8579 2 8.5 5.35786 8.5 9.5C8.5 13.6421 11.8579 17 16 17Z"
            stroke="#50000B"
            strokeWidth="2"
          />
        </svg>

        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          className="cursor-pointer"
        >
          <path
            d="M5.45 5.45L16 1.08L26.55 5.45L30.92 16L26.55 26.55L16 30.92L5.45 26.55L1.08 16L5.45 5.45Z"
            stroke="#50000B"
            strokeWidth="2"
          />
        </svg>
      </div>
    </nav>
  );
}
