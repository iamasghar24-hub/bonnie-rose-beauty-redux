import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Clock, ShieldCheck, Sparkles, Heart, Award, MapPin } from "lucide-react";

const values = [
  { icon: Heart, title: "Calm Experience", text: "Your morning should be relaxing. I create a stress-free, joyful atmosphere." },
  { icon: Clock, title: "Always On Time", text: "Punctuality is non-negotiable. I plan meticulously so everything runs smoothly." },
  { icon: Sparkles, title: "Premium Products", text: "I use only professional-grade, long-wearing products from trusted brands." },
  { icon: ShieldCheck, title: "Hygiene Standards", text: "Sanitised kit, single-use applicators, and clinical-grade cleaning every time." },
  { icon: Award, title: "Continuous Learning", text: "I regularly train with industry leaders to stay at the forefront of techniques." },
  { icon: MapPin, title: "Proudly Local", text: "Born and based in Hobart, I know and love Tasmania's unique beauty." },
];

const About = () => {
  useEffect(() => {
    document.title = "About | Bonnie Rose Beauty - Hobart Makeup Artist";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Video instead of image */}
              <ScrollReveal>
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
                  <video
                    src="/lovable-uploads/about-video.mp4"
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/lovable-uploads/portfolio-1.jpg"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                    About Me
                  </p>
                  <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                    Hi, I'm Bonnie
                  </h1>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a professional makeup artist based in beautiful
                      Hobart, Tasmania, with over 8 years of experience
                      specialising in bridal and event makeup.
                    </p>
                    <p>
                      My passion is helping women feel confident and radiant on
                      their most important days. I believe that great makeup
                      isn't about changing who you are — it's about enhancing
                      your natural beauty so you feel like the very best version
                      of yourself.
                    </p>
                    <p>
                      I work exclusively with premium, long-wearing products to
                      ensure your look is flawless from the first photo to the
                      last dance. Every application is personalised, because no
                      two faces — and no two weddings — are the same.
                    </p>
                    <p>
                      When I'm not behind my brushes, you'll find me exploring
                      Tasmania's stunning landscapes, hunting for the best
                      coffee, or dreaming up new beauty looks to try.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/booking">Work With Me</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  What I Stand For
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center mx-auto mb-4">
                      <v.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
