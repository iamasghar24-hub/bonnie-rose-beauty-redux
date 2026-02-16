import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { number: "01", title: "Enquire", description: "Send me your details through the booking form or reach out via WhatsApp. I'll respond within 24 hours." },
  { number: "02", title: "Confirm Your Date", description: "Once we've discussed your vision and confirmed availability, secure your date with a deposit." },
  { number: "03", title: "Trial Session", description: "For bridal bookings, we'll schedule a trial run to perfect your look before the big day." },
  { number: "04", title: "Wedding Day Schedule", description: "I'll create a detailed timeline so everyone is camera-ready — no stress, just beauty." },
  { number: "05", title: "Touch Ups & Beyond", description: "I'll stay for touch-ups through the ceremony and photos, ensuring you look flawless all day." },
];

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">The Process</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">How It Works</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={cn("flex flex-col md:flex-row items-start gap-6 md:gap-12", i % 2 === 1 ? "md:flex-row-reverse" : "")}>
                  <div className={cn("flex-1", i % 2 === 1 ? "md:text-left" : "md:text-right")}>
                    <span className="text-3xl font-serif font-semibold text-accent/30">{step.number}</span>
                    <h3 className="text-xl font-serif font-semibold text-foreground mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-accent shrink-0 relative z-10 mt-2" />
                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
