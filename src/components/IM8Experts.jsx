import BeckhamComparisonTable from "./BeckhamComparisonTable";

const experts = [
  {
    name: "Prof. Suzanne Devkota",
    title: "Director of Cedars-Sinai Human Microbiome Research Institute",
    image:
      "https://im8health.com/cdn/shop/files/Frame_1000004731.png?v=1727767462&width=750",
  },
  {
    name: "Dr. James L. Green",
    title: "Former Chief Scientist of NASA",
    image:
      "https://im8health.com/cdn/shop/files/Frame_1000004729.png?v=1727767462&width=750",
  },
  {
    name: "Dr. Dawn Mussallem",
    title: "CMO of Fountain Life & Integrative Oncologist at Mayo Clinic",
    image:
      "https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298",
  },
  {
    name: "Dr. James DiNicolantonio",
    title: "Cardiovascular Research Scientist and Doctor of Pharmacy",
    image:
      "https://im8health.com/cdn/shop/files/Dr._James_D.png?v=1730708665&width=900",
  },
  {
    name: "Dr. Jeremy London",
    title: "Board Certified Cardiovascular Surgeon",
    image:
      "https://im8health.com/cdn/shop/files/sab_London_headshot.jpg?v=1741755281",
  },
  {
    name: "Dr. Amy Shah",
    title: "Double-Board Certified Physician & Host of Podcast “Save Yourself”",
    image:
      "https://im8health.com/cdn/shop/files/sab_Shah_headshot.jpg?v=1741754337",
  },
  {
    name: "Dr. Ara Suppiah",
    title:
      "Performance Strategist, Sports Physician, Creator of Functional Sports Medicine",
    image:
      "https://im8health.com/cdn/shop/files/sab_Suppiah_headshot.jpg?v=1750043459",
  },
  {
    name: "Dr. Darshan Shah",
    title:
      "Board Certified Surgeon & Physician, CEO and Founder of Next Health",
    image:
      "https://im8health.com/cdn/shop/files/sab_DarshanShah_headshot.jpg?v=1750043459",
  },
  {
    name: "Simon Hill",
    title: "MSc, BSc, Nutritionist, Physiologist, Author and Podcast Host",
    image:
      "https://im8health.com/cdn/shop/files/sab_Hill_headshot.jpg?v=1750043459",
  },
];

export default function IM8Experts() {
  return (
    <section className="bg-[#fff7f5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold tracking-widest text-[#7f0c14]">
            DRIVEN BY SCIENCE
          </p>
          <h2 className="font-serif text-4xl text-[#50000b]">
            Meet The Brilliant Minds Behind IM8
          </h2>
          <p className="mt-4 text-sm text-[#7e7e7e]">
            An unparalleled collaboration between academia, medicine, and space
            science.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col md:flex-row  gap-5 rounded-2xl
               bg-linear-to-br from-[#fdeeee] to-white  shadow-sm"
            >
              {/* Avatar */}
              <img
                src={item.image}
                alt={item.name}
                className="w-50 h-50 rounded-xl object-cover"
              />

              {/* Info */}
              <div className="px-2">
                <h3 className="text-sm font-bold text-[#50000b]">
                  {item.name}
                </h3>
                <p className="mt-1 text-[16px] leading-relaxed text-[#50000b] ">
                  {item.title}
                </p>
              </div>

              {/* Plus Button */}
              <button className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full cursor-pointer">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_142_1201)">
                    <g filter="url(#filter0_b_142_1201)">
                      <path
                        d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z"
                        fill="white"
                        fillOpacity="0.8"
                      ></path>
                      <path
                        d="M7.40974 7.40974L24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974Z"
                        stroke="#50000B"
                      ></path>
                    </g>
                    <path
                      d="M33 24H15"
                      stroke="#50000B"
                      strokeWidth="2"
                      strokeLinecap="square"
                    ></path>
                    <path
                      d="M24 15V33"
                      stroke="#50000B"
                      strokeWidth="2"
                      strokeLinecap="square"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_142_1201"
                      x="-12"
                      y="-12"
                      width="72"
                      height="72"
                      filterUnits="userSpaceOnUse"
                      colorInterpolation-filters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="6"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_142_1201"
                      ></feComposite>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_142_1201"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <clipPath id="clip0_142_1201">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <BeckhamComparisonTable />
    </section>
  );
}
