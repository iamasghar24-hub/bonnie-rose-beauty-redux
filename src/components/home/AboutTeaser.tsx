import { Link } from "react-router-dom";
import { ArrowRight, Clock, ShieldCheck, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AutoplayVideo from "@/components/AutoplayVideo";

const credentials = [
  { icon: Clock, label: "8+ years of experience" },
  { icon: Sparkles, label: "Premium products only" },
  { icon: ShieldCheck, label: "Strict hygiene standards" },
  { icon: Heart, label: "Calm, professional service" },
];

const AboutTeaser = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video */}
          <ScrollReveal>
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <AutoplayVideo
                src="/lovable-uploads/about-video.mp4"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={150}>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                Meet Your Artist
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Hi, I'm Bonnie
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a professional makeup artist based in Hobart, Tasmania,
                specialising in bridal and event makeup. My goal is simple: to
                make you feel confident, calm, and absolutely beautiful on your
                most important day.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I use only premium, long-wearing products to create
                photography-ready looks that last from morning prep to the
                last dance. Every bride deserves to feel like the best version
                of herself.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {credentials.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{label}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/about">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
