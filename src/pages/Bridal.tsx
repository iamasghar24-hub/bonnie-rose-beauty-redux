import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check, Heart, Clock, Camera, Sparkles, Shield } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Personalised Look", text: "Tailored to your skin tone, style, and wedding aesthetic." },
  { icon: Clock, title: "Long-Wearing", text: "Makeup that lasts from morning prep through the last dance." },
  { icon: Camera, title: "Photography Ready", text: "Flawless in every photo — natural light or flash." },
  { icon: Sparkles, title: "Premium Products", text: "Only the best professional-grade products touch your skin." },
  { icon: Shield, title: "Hygiene First", text: "Sanitised kit, disposable applicators, and clean practices." },
];

const Bridal = () => {
  useEffect(() => {
    document.title = "Bridal Makeup | Bonnie Rose Beauty Hobart";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&h=800&fit=crop&q=80"
              alt="Bride getting ready on wedding day"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/60" />
          </div>
          <div className="relative z-10 container-narrow mx-auto px-5 md:px-8 py-20">
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 font-sans">
                Bridal Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6">
                Your Perfect
                <br />
                <span className="italic font-normal">Wedding Day Look</span>
              </h1>
              <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-md">
                A calm, professional experience from trial to touch-ups.
                Because you deserve to feel as beautiful as you look.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/booking">Book Your Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Why Brides Choose Me
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <b.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bridal Package */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-lg p-10 md:p-14">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2">
                  Bridal Makeup Package
                </h2>
                <p className="text-muted-foreground mb-8">
                  Everything you need for your wedding day, from $250
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Pre-wedding consultation",
                    "Trial session (booked separately)",
                    "Full bridal makeup application",
                    "Long-wearing, transfer-proof products",
                    "Individual & strip lashes included",
                    "Touch-up kit for the day",
                    "On-location service across Hobart",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/services">See All Services</Link>
                  </Button>
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
                Popular dates book months in advance
              </h2>
              <p className="text-muted-foreground mb-8">
                Secure your wedding date today with a consultation. I'd love
                to hear about your vision.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/booking">Enquire Now</Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Bridal;
