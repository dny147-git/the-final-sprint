import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import avatar from "../assets/images/avatar.avif";
import backgroundImg from "../assets/images/clinical-studies-min.webp";

export default function ProvenResultsSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center
        mt-8
      "
      style={{
        backgroundImage: "url(/images/red-bg-placeholder.jpg)", // bạn thay ảnh đỏ ở đây
      }}
    >
      {/* overlay để chữ nổi */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
      linear-gradient(rgba(122,13,22,0.85), rgba(122,13,22,0.85)),
      url(${backgroundImg})
    `,
        }}
      />

      <div
        className="
          relative
          z-10
          px-6
          py-10
          lg:px-14
          lg:py-16
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
        "
      >
        {/* LEFT – Stats */}
        <div>
          <p className="text-white text-[20px] font-semibold mb-6">
            Daily Ultimate Essentials
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <Stat
              percent="95%"
              text="Participants felt a noticeable boost in daily energy levels."
            />
            <Stat
              percent="85%"
              text="Felt less bloated and had improved digestion."
            />
            <Stat
              percent="80%"
              text="Participants reported getting better sleep."
            />
            <Stat
              percent="70%"
              text="Participants noticed sharper focus and improved mental clarity."
            />
          </div>
        </div>

        {/* RIGHT – Content */}
        <div className="text-white text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal leading-tight mb-6">
            Clinically Proven.
            <br />
            <span className=""> More Energy.</span>
            <br />A Healthier Gut.<sup>*</sup>
          </h2>

          {/* NSF badge */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              bg-[#FFE6A7]
              text-[#5B1D00]
              rounded-xl
              px-5
              py-4
              mb-6
            "
          >
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-[#C98A00]" />
              <div>
                <p className="font-bold text-sm">NSF CERTIFIED FOR SPORT</p>
                <p className="text-xs">280+ Substances Tested</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-xs font-medium">
                Trusted by Aryna Sabalenka
                <br />
                <span className="font-normal">World No.1 Tennis Player</span>
              </p>
              <img
                src={avatar}
                alt="avatar"
                className="w-15 h-15 rounded-full object-cover border-3 border-amber-400"
              />
            </div>
          </div>

          <p className="text-sm text-center font-[400px]  leading-relaxed mb-6 max-w-xl">
            Every ingredient is third-party tested and NSF Certified for Sport,
            ensuring it's free from over 280 banned substances, heavy metals and
            contaminants. Trusted by athletes and sports leagues, including
            WADA, NFL, MLB, NHL, and PGA.
          </p>

          <div className="flex flex-col gap-4">
            <button
              className="px-4 py-3 rounded-full bg-[#50000b] 
            lg:w-82.5 mx-auto hover:bg-[#a40011] cursor-pointer transition font-bold text-sm"
            >
              VIEW THIRD-PARTY TESTING RESULTS
            </button>
            <button
              className="px-6 py-3 rounded-full mx-auto w-82.5
             bg-[#ff9693] hover:bg-[#fd7772] transition-all duration-300 text-[#50000b] font-bold text-sm"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <p className="relative z-10 text-[12px] text-white pl-12 pb-6 max-w-7xl ">
        *Results Based on a 12-Week Randomized, Controlled, Clinical Trial
        Conducted by the San Francisco Research Institute. Please click here for
        full details of the National Library of Medicine trial.
      </p>
    </section>
  );
}

function AnimatedNumber({ value, duration = 10000 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * value);

      setDisplay(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <>{display}</>;
}

function Stat({ percent, text }) {
  const number = parseInt(percent); // "95%" -> 95

  return (
    <div>
      <p className="text-4xl lg:text-[80px] font-light text-white">
        <AnimatedNumber value={number} />%
      </p>
      <div className="w-50 h-px bg-white my-2" />
      <p className="text-sm text-white font-semibold max-w-55">{text}</p>
    </div>
  );
}
