import { useState } from "react";

const items = [
  {
    title: "Ingredients",
    content: (
      <>
        <p className="mb-4">
          Our comprehensive formula combines 92 nutrient-rich ingredients to
          fuel your body with everything it needs for optimal health. Packed
          with essential vitamins, minerals, antioxidants, superfoods, greens,
          pre-pro-post-biotics and clinical dosages of CoQ10 and MSM.*
        </p>
        <a href="#" className="underline underline-offset-4 hover:opacity-80">
          View Supplement Facts
        </a>
      </>
    ),
  },
  {
    title: "Third-Party Tested",
    content:
      "Every ingredient and dosage in IM8 is third-party tested. This guarantees that what you see on the label is what you get, so you know exactly what you’re putting into your body.",
  },
  {
    title: "How to Enjoy",
    content: [
      "Scoop out one serving (12 grams)",
      "Add 8–12 oz of cold water, juice, smoothie, or your favorite drink (Use less liquid for a stronger taste)",
      "Shake or blend well then enjoy",
    ],
  },
  {
    title: "Tasting Notes",
    content:
      "Experience a delightful blend with earthy undertones, a subtle tartness, and a hint of chocolate, culminating in a smooth acai and mixed berries finish.",
  },
];

export default function ProductAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-[#6B0F1A]">
      {/* Top note */}
      <p className="text-sm mb-6 flex gap-2 justify-center">
        <strong> Pay with HSA/FSA</strong>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <g clip-path="url(#clip0_4962_240)">
              <mask
                id="mask0_4962_240"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="19"
                height="19"
              >
                <path
                  d="M0.453613 0.639894H18.5366V18.7229H0.453613V0.639894Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0_4962_240)">
                <path
                  d="M9.42359 3.96507C8.52032 3.96507 7.78809 4.69731 7.78809 5.60058C7.78809 6.50385 8.52032 7.23608 9.42359 7.23608C10.3269 7.23608 11.0591 6.50385 11.0591 5.60058C11.0582 4.69762 10.3265 3.96595 9.42359 3.96507Z"
                  fill="#50000B"
                ></path>
                <path
                  d="M8.97401 10.1572L4.25241 15.0868C3.12222 13.9971 2.36465 12.5785 2.08768 11.0331C2.03484 10.7432 1.99865 10.4505 1.97928 10.1564L8.97401 10.1572ZM2.03348 8.64283C2.48571 5.42538 4.94758 2.85911 8.14351 2.27377C8.59471 2.19119 9.05252 2.14959 9.51121 2.14943C13.2631 2.15708 16.4367 4.92644 16.9523 8.64283H2.03348ZM13.5322 16.044C11.0621 17.6042 7.91341 17.5985 5.44875 16.0297L9.48332 11.8174L13.5322 16.044ZM17.0113 10.1572C16.9261 11.5224 16.4701 12.8386 15.6923 13.9638C15.4084 14.3737 15.0851 14.755 14.727 15.102L9.99102 10.1604L17.0113 10.1572ZM14.6409 2.24189C10.5327 -0.597452 4.90056 0.431274 2.0613 4.53948C-0.778042 8.64777 0.250684 14.2799 4.35889 17.1192C8.46503 19.957 14.0939 18.931 16.9347 14.827C19.7715 10.7172 18.7453 5.08648 14.6409 2.24189Z"
                  fill="#50000B"
                ></path>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_4962_240">
                <rect
                  width="18.083"
                  height="18.083"
                  fill="white"
                  transform="translate(0.453613 0.639893)"
                ></rect>
              </clipPath>
            </defs>
          </svg>{" "}
          · Save an average of 30%{" "}
        </p>
        <a href="#" className="underline">
          Learn more
        </a>
      </p>

      {/* Accordion */}
      <div className="divide-y divide-[#6B0F1A]">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-6">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-2xl font-semibold cursor-pointer">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 text-base  leading-relaxed">
                  {Array.isArray(item.content) ? (
                    <ol className="list-decimal pl-5 space-y-2">
                      {item.content.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  ) : (
                    item.content
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
