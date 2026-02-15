import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Users, Palette } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Heart,
    title: "Bridal Makeup",
    description:
      "Your perfect wedding day look — long-wearing, photography-ready, and designed to make you feel like the best version of yourself.",
    link: "/bridal",
  },
  {
    icon: Sparkles,
    title: "Event Makeup",
    description:
      "Birthdays, formals, engagements, or any special occasion. Flawless makeup that lasts all night.",
    link: "/services",
  },
  {
    icon: Users,
    title: "Bridal Party",
    description:
      "Coordinated looks for bridesmaids, mothers of the bride, and the whole bridal party. Group bookings welcome.",
    link: "/services",
  },
  {
    icon: Palette,
    title: "Trial Session",
    description:
      "A relaxed trial run before the big day. We refine your look together until it's absolutely perfect.",
    link: "/bridal",
  },
];

const SignatureServices = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
              What I Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Signature Services
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <Link
                to={s.link}
                className="group block bg-card border border-border rounded-lg p-8 hover-lift hover-glow"
              >
                <s.icon className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureServices;
