import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

const services = [
  {
    name: "Bridal Makeup",
    price: "From $250",
    duration: "60–90 min",
    ideal: "For the bride",
    inclusions: [
      "Full makeup application",
      "Long-wearing, photo-ready products",
      "Individual or strip lashes",
      "Touch-up kit",
      "Pre-wedding consultation",
    ],
  },
  {
    name: "Trial Session",
    price: "From $120",
    duration: "60–75 min",
    ideal: "Before your wedding",
    inclusions: [
      "Full makeup application",
      "Look refinement & discussion",
      "Photos for reference",
      "Product & skincare advice",
    ],
  },
  {
    name: "Bridesmaids & Mothers",
    price: "From $150 per person",
    duration: "45–60 min each",
    ideal: "Bridal party",
    inclusions: [
      "Full makeup application",
      "Coordinated looks",
      "Lashes included",
      "Group booking discounts",
    ],
  },
  {
    name: "Event Makeup",
    price: "From $130",
    duration: "45–60 min",
    ideal: "Special occasions",
    inclusions: [
      "Full makeup application",
      "Occasion-appropriate styling",
      "Lashes included",
      "Long-wearing finish",
    ],
  },
];

const addOns = [
  { name: "Airbrush foundation upgrade", price: "+$30" },
  { name: "Additional touch-ups (per hour)", price: "+$80" },
  { name: "Extra lash styles", price: "+$15" },
  { name: "Skin prep & primer treatment", price: "+$20" },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services & Pricing | Bonnie Rose Beauty Hobart";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto text-center">
            <ScrollReveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                Services & Pricing
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                What I Offer
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Clear, transparent pricing for every service. Every look is
                customised to you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="bg-card border border-border rounded-lg p-8 h-full flex flex-col hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-serif font-semibold text-foreground">
                          {s.name}
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">
                          {s.ideal} · {s.duration}
                        </p>
                      </div>
                      <span className="text-lg font-serif font-semibold text-primary">
                        {s.price}
                      </span>
                    </div>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {s.inclusions.map((inc, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {inc}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="hero-outline" size="default" asChild className="w-full">
                      <Link to="/booking">Get a Quote</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto max-w-2xl">
            <ScrollReveal>
              <h2 className="text-2xl font-serif font-semibold text-foreground text-center mb-10">
                Add-Ons
              </h2>
              <div className="bg-card rounded-lg divide-y divide-border">
                {addOns.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-5"
                  >
                    <span className="text-sm text-foreground">{a.name}</span>
                    <span className="text-sm font-medium text-primary">
                      {a.price}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-8 flex items-start gap-3 p-5 bg-rose-light rounded-lg">
                <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-foreground">
                  <p className="font-medium mb-1">Travel fee note</p>
                  <p className="text-muted-foreground">
                    A travel fee may apply for locations outside the greater
                    Hobart area. I'll include this in your personalised quote.
                    Prices may vary by date and location —{" "}
                    <Link to="/booking" className="text-primary hover:underline">
                      request a quote
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding text-center">
          <ScrollReveal>
            <div className="container-narrow mx-auto max-w-xl">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                Ready to book your look?
              </h2>
              <p className="text-muted-foreground mb-8">
                Send me an enquiry and I'll get back to you within 24 hours
                with a personalised quote.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
