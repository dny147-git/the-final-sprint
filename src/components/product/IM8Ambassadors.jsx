const videos = [
  {
    id: 1,
    poster: "/images/ambassador-1.jpg",
    src: "https://im8health.com/cdn/shop/videos/c/vp/12eb3b01fd54404d81ef22a20d415f15/12eb3b01fd54404d81ef22a20d415f15.HD-1080p-2.5Mbps-38313438.mp4?v=0", // thêm video sau
  },
  {
    id: 2,
    poster: "/images/ambassador-2.jpg",
    src: "https://im8health.com/cdn/shop/videos/c/vp/e83246a2555949139036fce9bc1359a2/e83246a2555949139036fce9bc1359a2.HD-1080p-3.3Mbps-38232086.mp4?v=0",
  },
  {
    id: 3,
    poster: "/images/ambassador-3.jpg",
    src: "https://im8health.com/cdn/shop/videos/c/vp/f7f68153342f4566ad00f411e2fb407b/f7f68153342f4566ad00f411e2fb407b.HD-1080p-7.2Mbps-38222859.mp4?v=0",
  },
  {
    id: 4,
    poster: "/images/ambassador-4.jpg",
    src: "https://im8health.com/cdn/shop/videos/c/vp/064b8beaa0b04a4fad25676155936d3a/064b8beaa0b04a4fad25676155936d3a.HD-1080p-2.5Mbps-38221672.mp4?v=0",
  },
  {
    id: 5,
    poster: "/images/ambassador-5.jpg",
    src: "https://im8health.com/cdn/shop/videos/c/vp/809d17a1684d40058d499ecd9afe9e21/809d17a1684d40058d499ecd9afe9e21.HD-1080p-4.8Mbps-38222820.mp4?v=0",
  },
  {
    id: 6,
    poster: "/images/ambassador-5.jpg",
    src: "https://im8health.com/cdn/shop/videos/c/vp/1f4b2af008104c92a29f9d78814f1aa0/1f4b2af008104c92a29f9d78814f1aa0.HD-1080p-3.3Mbps-38232121.mp4?v=0",
  },
];

export default function IM8Ambassadors() {
  return (
    <section className="px-4 ">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#6B0F1A] mb-6">
        What our IM8 Ambassadors are saying
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative w-full aspect-3/5 rounded-2xl overflow-hidden bg-black"
          >
            {/* Poster / Video */}
            {video.src ? (
              <video
                src={video.src}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={video.poster}
                alt=""
                className="w-full h-full object-cover"
              />
            )}

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
              {/* Play button */}
              {!video.src && (
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  ▶
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
