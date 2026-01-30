import { ChevronRight } from "lucide-react";
import program1 from "../../assets/images/program/program1.webp";
import program2 from "../../assets/images/program/program2.avif";
import program3 from "../../assets/images/program/program3.avif";
import program4 from "../../assets/images/program/program4.avif";
import program5 from "../../assets/images/program/program5.avif";
import program6 from "../../assets/images/program/program6.avif";

const experts = [
  {
    name: "Dr. Dawn Mussallem",
    title: "Cancer Survivor & Physician at Mayo Clinic",
    image: program1,
  },
  {
    name: "Bobby Rich",
    title: "Trainer to David Beckham and World-class Athletes",
    image: program2,
  },
  {
    name: "Dr. Suzanne Devkota",
    title: "Gut Health Expert & Prof at Cedars Sinai",
    image: program3,
  },
  {
    name: "Tavi Castro",
    title: "Breathwork Expert & Free-Diving World Record Holder",
    image: program4,
  },
  {
    name: "Dr. Amy Shah",
    title: 'Double-Board Certified Physician & Host of "Save Yourself" Podcast',
    image: program5,
  },
  {
    name: "Dr. Ara Suppiah",
    title: "Performance & Longevity Physician at LIV Golf",
    image: program6,
  },
];

export default function IM8Transformation() {
  return (
    <section
      className="
        my-6
        rounded-xl
        bg-linear-to-b
        from-[#FFF1DC]
        to-[#FDE7C8]
        px-4
        py-8
        sm:px-6
        sm:py-10
        lg:px-10
      "
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3D29C] text-xs sm:text-sm font-semibold text-[#5B2A00] mb-5">
          🎓 90-DAY MEMBERS ONLY
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#5B1D00] mb-3">
          90-Day IM8 Transformation Program
        </h2>

        <p className="text-[#6B3A16] max-w-3xl mx-auto mb-10 text-xs sm:text-sm font-semibold">
          Exclusive access to quarterly masterclasses with our world-class
          Medical and Performance Experts
        </p>

        {/* Experts Grid */}
        <div className="grid grid-cols-3  lg:grid-cols-3 gap-x-4 gap-y-8">
          {experts.map((expert, index) => (
            <div key={index} className="text-center">
              <div className="aspect-square rounded-xl border-2 border-[#BF9C74] overflow-hidden mb-3">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold text-[12px] sm:text-[13px] text-[#5B1D00]">
                {expert.name}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#7A4A28] mt-1 leading-snug">
                {expert.title}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mt-10 text-[#6B3A16] max-w-4xl mx-auto text-xs sm:text-sm">
          Get personalized guidance, exclusive content, and direct access to
          leading experts in health optimization, performance, and longevity.
        </p>

        {/* CTA */}
        <button
          className="
            mt-6
            w-full
            sm:w-auto
            inline-flex
            justify-center
            items-center
            gap-1
            px-6
            py-3
            rounded-xl
            bg-linear-to-r
            from-[#F3C27A]
            to-[#E8D18A]
            text-[#5B2A00]
            font-bold
            text-sm
            hover:opacity-90
            transition
          "
        >
          LEARN MORE ABOUT THE PROGRAM
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
