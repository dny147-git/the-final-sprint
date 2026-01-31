const experts = [
  {
    handle: "@drjamesdinic",
    followers: "3.2M",
    name: "Dr. James Dinicolantonio",
    title: "Cardiovascular Scientist & Best-Selling Author",
    src: "https://im8health.com/cdn/shop/videos/c/vp/18ce63f7f6154e888f2a48c2a478e480/18ce63f7f6154e888f2a48c2a478e480.HD-1080p-7.2Mbps-38131720.mp4?v=0",
  },
  {
    handle: "@dramyshah",
    followers: "1.4M",
    name: "Dr. Amy Shah",
    title: "Double-Board Certified Physician",
    src: "https://im8health.com/cdn/shop/videos/c/vp/ec95f3f8f55f4c1eb679982d43bf091d/ec95f3f8f55f4c1eb679982d43bf091d.HD-1080p-4.8Mbps-38234483.mp4?v=0",
  },
  {
    handle: "@monasharma",
    followers: "183K",
    name: "Mona Sharma",
    title: "Celebrity Nutritionist",
    src: "https://im8health.com/cdn/shop/videos/c/vp/936fe1ac73a046a98e1ff7e701676228/936fe1ac73a046a98e1ff7e701676228.HD-1080p-7.2Mbps-38131732.mp4?v=0",
  },
  {
    handle: "@elissagoodman",
    followers: "189K",
    name: "Elissa Goodman",
    title: "Holistic Nutritionist",
    src: "https://im8health.com/cdn/shop/videos/c/vp/17fb74b0dd5d46e8ac4d1668b46b2134/17fb74b0dd5d46e8ac4d1668b46b2134.HD-1080p-7.2Mbps-38131729.mp4?v=0",
  },
  {
    handle: "@drberthabaum",
    followers: "229K",
    name: "Dr. Bertha Baum",
    title: "Board-Certified Dermatologist",
    src: "https://im8health.com/cdn/shop/videos/c/vp/db58a8d3630b47a597fb148aba8a1790/db58a8d3630b47a597fb148aba8a1790.HD-1080p-3.3Mbps-38232043.mp4?v=0",
  },
  {
    handle: "@drjenandjuice",
    followers: "284K",
    name: "Dr. Jennifer Tsai",
    title: "Board-Certified Optometrist & Nutrition Specialist",
    src: "https://im8health.com/cdn/shop/videos/c/vp/9d07478703af48a2903deb8e3fbd5076/9d07478703af48a2903deb8e3fbd5076.HD-1080p-4.8Mbps-38192239.mp4?v=0",
  },
  {
    handle: "@timbiohacker",
    followers: "484",
    name: "Tim Biohacker",
    title: "UK’s Leading Bio-hacker",
    src: "https://im8health.com/cdn/shop/videos/c/vp/1cfa80d2973d44619564e370d8fb9a5a/1cfa80d2973d44619564e370d8fb9a5a.HD-1080p-7.2Mbps-38201373.mp4?v=0",
  },
  {
    handle: "@dr.robinb",
    followers: "1.4M",
    name: "Dr. Robin Barrett",
    title: "Doctor of Pharmacy & Wellness Coach",
    src: "https://im8health.com/cdn/shop/videos/c/vp/0cdc39d7dda145e29a333ee5f43ed507/0cdc39d7dda145e29a333ee5f43ed507.HD-1080p-2.5Mbps-38319373.mp4?v=0",
  },
];

import { useRef, useState } from "react";

export default function ExpertVideoCarousel() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    sliderRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    setIsDown(false);
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // tốc độ kéo
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="my-20">
      <h2 className="mb-10 text-center font-serif text-[52px] text-[#7f0c14]">
        Trusted by Physicians and Nutrition Experts
      </h2>

      <div
        ref={sliderRef}
        className="
          hide-scrollbar
          flex gap-6 px-6
          overflow-x-scroll
          cursor-grab
          select-none
        "
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {experts.map((item, i) => (
          <div key={i} className="w-100 shrink-0">
            <div className="rounded-2xl bg-[#f5eaea] shadow-sm">
              <div className="relative h-150 w-100 overflow-hidden rounded-t-2xl">
                <video
                  src={item.src}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute top-0 w-full bg-[#f5eaea]/90 px-3 py-3 text-sm font-semibold text-[#7f0c14]">
                  {item.handle} ({item.followers})
                </div>
              </div>

              <div className="px-5 py-4 text-center">
                <h4 className="text-sm font-semibold text-[#5b1a1a]">
                  {item.name}
                </h4>
                <p className="mt-1 text-xs text-[#6f2b2b]">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
