export default function ReviewsSection() {
  const reviews = [
    {
      text: "I absolutely love IM8. I see a difference with my gut health and immune system. I have been spreading the word about this great product.",
      author: "Erika Friesenhahn",
    },
    {
      text: "I am really feeling full of energy. After about 2 weeks of the IM8, my wife said 'What's got into you?'",
      author: "Charlie West",
    },
    {
      text: "The taste is so delicious and I'm excited to feel the difference. Fingers crossed this one is better.",
      author: "Trina Fautoux",
    },
    {
      text: "I'm on my second month of IM8 and feel more energy, more brain clarity and overall improved well-being.",
      author: "Jennifer Dunn",
    },
    {
      text: "Since I started this a month ago I have felt great, energetic, and sleeping better. I have taken a lot of vitamins and am hopeful this will replace most of them. Thank you..",
      author: " Lisa Tradewell., Verified Customer",
    },
    {
      text: `I love it. I have a lot more energy. I am recommending it to all my friends. It is so nice
to have almost everything I take in one drink`,
      author: `- Bernae VeraKruse., Verified Customer`,
    },
  ];

  return (
    <section className="bg-[#fbf4ec] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-medium text-[#6b0f1a] mb-4">
            10,000+ 5 Star Reviews
          </h2>
          <p className="text-[#6b0f1a]/80 max-w-2xl mx-auto text-sm leading-relaxed">
            These are actual IM8 verified customers that have seen successful
            health outcomes with the consistent use of IM8 Daily Ultimate
            Essentials.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div
          className="
            flex gap-6
            animate-[marquee_40s_linear_infinite]
          "
        >
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-14 text-[18px] text-[#6b0f1a]">
        <strong>11,825 Reviews</strong> | Average Rating: <span>4.8/5</span>
      </p>
    </section>
  );
  function ReviewCard({ text, author }) {
    return (
      <div
        className="
        bg-white
        rounded-xl
        p-6
        shadow-sm
        w-100
        shrink-0
      "
      >
        {/* Stars */}
        <div className="flex gap-1 mb-4 text-[#a40011] text-xl">★★★★★</div>

        {/* Content */}
        <p className="text-[#50000b] text-sm leading-relaxed mb-6">“{text}”</p>

        {/* Author */}
        <p className="text-[#6b0f1a] font-medium text-sm">
          — {author}, <span className="font-normal">Verified Customer</span>
        </p>
      </div>
    );
  }
}
