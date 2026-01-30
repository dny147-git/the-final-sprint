function Star() {
  return (
    <svg
      class="product-review-stats__star"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 "
      fill="#50000b"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  );
}
export default function Rating() {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex">
        {" "}
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-[#50000b] text-[14px] font-medium">
        4.8 from 11,825 Reviews
      </p>
      <p className="text-[#6b4c3a] text-[14px] font-medium">
        | 620k+ customer purchases | 19M+ servings
      </p>
    </div>
  );
}
