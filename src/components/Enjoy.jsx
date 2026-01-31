const steps = [
  {
    title: "Step 1: Scoop out one serving of Daily Ultimate Essentials",
    src: "https://im8health.com/cdn/shop/videos/c/vp/ce78e2bd331f47f79ac745c7ae51f01f/ce78e2bd331f47f79ac745c7ae51f01f.SD-480p-1.2Mbps-37195721.mp4?v=0",
  },
  {
    title: "Step 2: Add 8 to 12oz of Water or Your Favorite Smoothie",
    src: "https://im8health.com/cdn/shop/videos/c/vp/c204aec03aad4763993ff1eda15f0501/c204aec03aad4763993ff1eda15f0501.SD-480p-1.2Mbps-37195734.mp4?v=0",
  },
  {
    title: "Step 3: Stir Well and Enjoy Daily",
    src: "https://im8health.com/cdn/shop/videos/c/vp/1f885d4f9245483d97e7efcfffb8a6be/1f885d4f9245483d97e7efcfffb8a6be.SD-480p-1.2Mbps-37107501.mp4?v=0",
  },
];

export default function HowToEnjoy() {
  return (
    <section className="my-24">
      {/* Title */}
      <h2 className="mb-14 text-center font-serif text-4xl text-[#7f0c14]">
        How to Enjoy
      </h2>

      {/* Grid */}
      <div className="mx-auto grid max-w-375 grid-cols-1 gap-12 px-6 md:grid-cols-3">
        {steps.map((item, i) => (
          <div key={i}>
            {/* Video */}
            <div className="mx-auto h-115 w-115 overflow-hidden rounded-2xl bg-[#f5eaea] shadow-sm">
              <video
                src={item.src}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Caption */}
            <p className="mt-6 text-left text-[24px] font-medium text-[#50000b]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
