export default function AmbassadorCard({ video, name, followers, quote }) {
  return (
    <div className=" w-100 shrink-0 rounded-2xl bg-white p-4 px-8 shadow-lg">
      <p className="text-sm font-semibold text-[#50000b] my-4">
        @{name}{" "}
        <span className="font-normal text-[#50000b]">({followers})</span>
      </p>
      <div className="overflow-hidden rounded-xl">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="h-90 w-full object-cover"
        />
      </div>

      <div className="mt-4">
        <div className="flex gap-1 mb-4 text-[#a40011] text-xl">★★★★★</div>

        <p className="mt-2 text-[20px] text-[#50000b] font-semibold leading-5">
          {quote}
        </p>
      </div>
    </div>
  );
}
