import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is IM8?",
    answer: `IM8 is the pinnacle of premium core nutrition, born from a collaboration between Prenetics (NASDAQ:PRE), David Beckham as a co-founding partner, and an elite team of scientists spanning space exploration, medical professionals, and academic excellence.

Combining cutting-edge science with nature's most potent ingredients, IM8 delivers a holistic, science-backed approach to health, empowering you to live your most vibrant life.`,
  },
  {
    id: 2,
    question: "What is David Beckham’s involvement in IM8?",
    answer: `David Beckham is a co-founding partner of IM8, driven by his commitment to simplifying wellness. After years of working with top medical professionals and nutrition experts, David wanted to make core nutrition more accessible. In collaboration with the Prenetics team and world-class scientists, IM8 was developed to deliver essential nutrients in a simple and effective way. David's vision for IM8 is to provide best-in-class core nutrition for today and tomorrow, making it easy for everyone to prioritize their health. `,
  },
  {
    id: 3,
    question: "Who is on the IM8 Scientific Advisory Board?",
    answer: `The IM8 Scientific Advisory Board comprises distinguished professionals with impressive backgrounds: 
<br/>
Dr. Dawn Mussallem, a renowned oncologist at the Mayo Clinic, brings her expertise in integrative and lifestyle medicine. 
<br/>
Dr. James L. Green, the former Chief Scientist at NASA, has an extensive career in space and planetary science. 
<br/>
Dr. David Katz,is a globally recognized preventive medicine specialist and the founding director of the Yale-Griffin Prevention Research Center.
<br/>
Prof. Suzanne Devkota serves as an Associate Professor and Director of the Microbiome Research Institute at Cedars-Sinai Medical Center, specializing in gut health and microbiome research. 
<br/>
Prof. Stephen Anton is a Professor and Chief of the Division of Clinical Research at the University of Florida's Department of Aging and Geriatric Research, focusing on metabolism and healthy aging. 
<br/>
Dr. James DiNicolantonio is a cardiovascular research scientist and Doctor of Pharmacy, known for his influential work in the field of heart health and evidence-based nutrition.
<br/>
Prof. Ock Chun is a distinguished expert in nutritional sciences at University of Connecticut with over 25 years of experience in the field.
<br/>
Their combined academic credentials and scientific expertise form the backbone of IM8's innovation and product development.`,
  },
  {
    id: 4,
    question: "What are the main benefits of IM8 Daily Essentials + Hydration?",
    answer: `IM8 Daily Essentials is your all-in-one solution, replacing the need for 16 supplements, targeting eight key areas of health: Energy, Immunity, Cognitive Function, Digestion, Cardiovascular Health, Hydration, Nourishment, and Cellular Renewal. With 92 carefully selected premium ingredients, including CoQ10 (100mg) for heart health and MSM (1,000mg) for joint support, IM8 Daily Essentials makes it easier to live a healthier, more vibrant life. Plus, it tastes great, so it's something you'll look forward to each day. `,
  },
  {
    id: 5,
    question: "What does IM8 Daily Ultimate Essentials taste like?",
    answer: `We've worked hard to make sure IM8 Daily Essentials is something you enjoy drinking every day. Experience a delightful blend of flavors with earthy undertones, complemented by a subtle tartness and a hint of chocolate. The flavor then culminates in a smooth finish of acai and mixed berries.

For a more robust flavor, use less water, or add more water for a delicate, lighter taste. This balance of flavors makes IM8 Daily Essentials both refreshing and satisfying, turning your daily supplement into an enjoyable part of your routine.`,
  },
  {
    id: 6,
    question: "What countries do you currently ship to?",
    answer: `IM8 currently ships to 31 countries (with free shipping for all subscriptions to the United States, United Kingdom, Canada, Singapore and Hong Kong), including but not limited to the United States, Canada, United Kingdom, Australia, and many countries across Europe, Asia, and South America. The full list of countries we ship to can be found here.

Please note that international shipping rates vary by country and will be reflected during checkout. We do not add any margins to the shipping cost—what you see is the direct charge from our shipping provider.`,
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="bg-[#9b0d0d]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-15">
        {/* LEFT – FAQ */}
        <div className="px-6 py-20 text-white order-2 lg:order-1 ">
          <h2 className="mb-10 text-[#ff9693] text-[52px]">FAQs</h2>

          <div className="divide-y divide-white/30">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div key={faq.id} className="py-6">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="text-base font-medium">
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 cursor-pointer" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 cursor-pointer" />
                    )}
                  </button>

                  {isOpen && (
                    <p
                      className="mt-4 max-w-xl"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  )}
                </div>
              );
            })}
          </div>

          <button className="mt-10 w-full lg:w-66 rounded-full bg-[#50000b] px-10 py-2 text-sm font-semibold uppercase tracking-wide transition hover:bg-[#6a0a0a]">
            Explore All FAQs
          </button>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="min-h-100 order-1 lg:order-2 lg:min-h-full">
          <img
            src="https://im8health.com/cdn/shop/files/Rectangle_98-min_2.jpg?v=1731857082"
            className="h-full w-full object-cover"
            alt="FAQ visual"
          />
        </div>
      </div>
    </section>
  );
}
