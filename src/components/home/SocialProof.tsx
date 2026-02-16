import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Bonnie made me feel so calm and beautiful on my wedding day. My makeup lasted from sunrise photos to the last dance!",
    role: "Bride, 2024",
  },
  {
    name: "Emily R.",
    text: "Absolutely stunning work. Every photo from my wedding looks flawless — I couldn't have asked for anything more.",
    role: "Bride, 2024",
  },
  {
    name: "Jessica T.",
    text: "Professional, punctual, and incredibly talented. Bonnie is the best makeup artist in Hobart, hands down.",
    role: "Bride, 2023",
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        {/* Stats Row */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">5.0 Average Rating</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-serif font-semibold text-foreground">
                200+
              </p>
              <p className="text-sm text-muted-foreground">Happy Brides</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-serif font-semibold text-foreground">
                8+
              </p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card border border-border rounded-lg p-8 hover-lift hover-glow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
