import AmbassadorCard from "./AmbassadorCard";

const ambassadors = [
  {
    name: "dance10fikshun ",
    followers: "2.6M",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/4d801fb0e5524d5a9c43dc987966df6a/4d801fb0e5524d5a9c43dc987966df6a.SD-480p-0.9Mbps-39413304.mp4?v=0",
    quote:
      "My life is all about movement, balance, and expression. IM8 keeps me energized and feeling great, allowing me to bring my best to every performance.",
  },
  {
    name: "tavicastro",
    followers: "4.8M",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/4a3a9f0122d24d6988bbf5b9ed6a38bb/4a3a9f0122d24d6988bbf5b9ed6a38bb.SD-480p-0.9Mbps-39413270.mp4?v=0",
    quote:
      "As a professional freediver, I’m extremely careful with what I put into my body. With IM8, I know I'm fueling my body with only the best, helping me stay resilient both in and out of the water.",
  },
  {
    name: "dustinpoirier",
    followers: "5.3M",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/a7917aeeef894fc7af8d86db3acafef5/a7917aeeef894fc7af8d86db3acafef5.SD-480p-0.9Mbps-39412856.mp4?v=0",
    quote:
      "As a fighter, I’ve tried it all—endless pills and powders just to keep up. But after my team checked out the science, partnering with IM8 was a no-brainer. Now, I have all the nutrition I need in one powerful formula for training, recovery, and staying sharp.",
  },
  {
    name: "timbohacker",
    followers: "484K",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/90135e85a8eb49659fc3e2cbb43896e5/90135e85a8eb49659fc3e2cbb43896e5.SD-480p-0.9Mbps-39413342.mp4?v=0",
    quote:
      "I’m all about calling out products that fall short of their claims. IM8, though, delivers exactly what it promises—pure, effective ingredients, third-party tested, and backed by clinical trials. It fuels focus, energy, and resilience, with zero compromises",
  },
  {
    name: "davidnursenba ",
    followers: "162K",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/01fc5e8bd9934532b9120f5277539ccc/01fc5e8bd9934532b9120f5277539ccc.SD-480p-0.9Mbps-39412912.mp4?v=0",
    quote:
      "As a performance coach, I’m always seeking ways to stay sharp and energized. IM8 is hands down the best all-in-one supplement. It tastes amazing, and my wife and I take it daily—it’s a game-changer.",
  },
  {
    name: "thejosephabell  ",
    followers: "2M",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/cb2b8daf5bbe45299c834c593e147522/cb2b8daf5bbe45299c834c593e147522.SD-480p-0.9Mbps-39412954.mp4?v=0",
    quote:
      "Nutrition should be as exciting as it is nourishing. IM8 redefines nutrition for me, making health delicious and effective, whether in the kitchen or in my daily routine.",
  },
  {
    name: "tjdefalco ",
    followers: "274K",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/e2c97673de604d8d9395afdda954e1d8/e2c97673de604d8d9395afdda954e1d8.SD-480p-0.9Mbps-39413319.mp4?v=0",
    quote:
      "On the court, peak performance is non-negotiable. IM8 fuels my energy and mental clarity, helping me stay sharp and push my limits every day.",
  },
  {
    name: "mrbobbyrich  ",
    followers: "105K",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/277ed49454544ca4a856e0e3faf4730c/277ed49454544ca4a856e0e3faf4730c.SD-480p-0.9Mbps-39412880.mp4?v=0",
    quote:
      "As a former athlete and trainer to high performers, including David and Victoria Beckham, it means I need to always be on the top of my game. IM8 helps me to do just that and that's why I'm proud to be part of the team.",
  },
  {
    name: "carmelrodriguezfit",
    followers: "341",
    video:
      "https://im8health.com/cdn/shop/videos/c/vp/60ab4de92d314471a4bc1335539686a3/60ab4de92d314471a4bc1335539686a3.SD-480p-0.9Mbps-39412898.mp4?v=0",
    quote:
      "Body positivity and strength are at the heart of my wellness philosophy. IM8 helps me stay energized, strong, and ready to inspire others to achieve balance every day.",
  },
];

export default function IM8Ambassadors() {
  return (
    <section className="relative overflow-hidden bg-[#f9e7c2] py-20">
      <h2 className="mb-12 text-center font-serif text-4xl text-[#50000b]">
        What Our IM8 Ambassadors Are Saying
      </h2>

      {/* MARQUEE */}
      <div className="group flex gap-6  animate-[marquee_40s_linear_infinite]">
        {[...ambassadors, ...ambassadors].map((item, i) => (
          <AmbassadorCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
