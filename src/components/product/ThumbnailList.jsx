import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThumbnailList({ images, active, setActive }) {
  const ITEM_HEIGHT = 96 + 16; // height + gap
  const VISIBLE_COUNT = 4;

  // Nhân đôi ảnh
  const loopImages = [...images, ...images];

  const [index, setIndex] = useState(0);
  const maxIndex = images.length;

  const slideUp = () => {
    setIndex((prev) => prev - 1);
  };

  const slideDown = () => {
    setIndex((prev) => prev + 1);
  };

  // Reset index âm thầm để tạo vòng lặp
  useEffect(() => {
    if (index >= maxIndex) {
      setTimeout(() => {
        setIndex(0);
      }, 300);
    }

    if (index < 0) {
      setTimeout(() => {
        setIndex(maxIndex - 1);
      }, 300);
    }
  }, [index, maxIndex]);

  return (
    <div className="hidden md:block relative w-28">
      {/* Arrow Up */}
      <button
        onClick={slideUp}
        className="
          absolute -top-6 left-1/2 -translate-x-1/2
          w-6 h-6 rounded-full bg-white shadow-md
          flex items-center justify-center hover:bg-[#f6e2d6]
        "
      >
        <ChevronUp size={16} />
      </button>

      {/* Viewport */}
      <div className="overflow-hidden h-175">
        <div
          className="flex flex-col gap-4 transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(-${index * ITEM_HEIGHT}px)`,
          }}
        >
          {loopImages.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActive(img)}
              className={`
                w-26 h-24
                object-cover rounded-xl cursor-pointer
                transition
                ${
                  active === img
                    ? "ring-2 ring-[#50000b]/40"
                    : "hover:ring-1 hover:ring-[#50000b]/30"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Arrow Down */}
      <button
        onClick={slideDown}
        className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          w-6 h-6 rounded-full bg-white shadow-md
          flex items-center justify-center hover:bg-[#f6e2d6]
        "
      >
        <ChevronDown size={16} />
      </button>
    </div>
  );
}
