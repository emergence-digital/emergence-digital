import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    quote:
      "I absolutely loved working with Shane in building my business's website. He was so responsive, listened to what I wanted, and met my brief to a tee. Nothing was too hard, and he gave so much genuine, enthusiastic advice.",
    name: "Grace Andrews",
    company: "Loop Electrical",
  },
  {
    quote:
      "Shane has been absolutely fantastic to deal with since the day we started our business. He was accommodating when our business was young and has continued to evolve his services as our business has become more established. We couldn't recommend Shane highly enough to anyone needing any assistance with IT or website development.",
    name: "Jack Blain",
    company: "The Fine Food Merchant",
  },
  {
    quote:
      "Shane set up my website for my business and I love it so much, it complements my business and salon space perfectly. He was super professional and had the website up and running straight away. I couldn't be happier with the process and the end result. 100% recommend Shane!",
    name: "Darian Brazier",
    company: "A Hairstylist Secret",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-green">
            What our clients say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col">
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-body italic leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-dark-green/10 pt-4">
                <p className="font-semibold text-dark-green text-sm">{t.name}</p>
                <p className="text-muted text-xs mt-0.5">{t.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
