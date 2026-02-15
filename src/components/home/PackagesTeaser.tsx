import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const packages = [
  {
    name: "Bridal Makeup",
    price: "$250",
    note: "starting from",
    includes: [
      "Consultation & planning",
      "Full bridal application",
      "Long-wearing, photo-ready finish",
      "Lashes included",
      "Touch-up kit",
    ],
    ideal: "For the bride",
    featured: true,
  },
  {
    name: "Bridal Party",
    price: "$150",
    note: "per person from",
    includes: [
      "Bridesmaids & mothers",
      "Coordinated group looks",
      "Individual consultations",
      "Lashes included",
    ],
    ideal: "For the whole crew",
    featured: false,
  },
  {
    name: "Trial Session",
    price: "$120",
    note: "starting from",
    includes: [
      "Full makeup application",
      "Look refinement",
      "Product discussion",
      "Photos for reference",
    ],
    ideal: "Before the big day",
    featured: false,
  },
];

const PackagesTeaser = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
              Investment
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Packages & Pricing
            </h2>
            <p className="text-sm text-muted-foreground">
              Prices may vary by date and location.{" "}
              <Link
                to="/booking"
                className="text-primary hover:underline"
              >
                Request a quote
              </Link>{" "}
              for your event.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                className={`rounded-lg p-8 h-full flex flex-col hover-lift ${
                  pkg.featured
                    ? "bg-foreground text-primary-foreground ring-2 ring-primary"
                    : "bg-card border border-border"
                }`}
              >
                <p
                  className={`text-xs tracking-wide uppercase mb-1 ${
                    pkg.featured
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {pkg.ideal}
                </p>
                <h3
                  className={`text-xl font-serif font-semibold mb-4 ${
                    pkg.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span
                    className={`text-3xl font-serif font-semibold ${
                      pkg.featured ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-xs ml-2 ${
                      pkg.featured
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.note}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          pkg.featured ? "text-primary-foreground/70" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          pkg.featured
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.featured ? "gold" : "hero-outline"}
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <Link to="/booking">Get a Quote</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesTeaser;
