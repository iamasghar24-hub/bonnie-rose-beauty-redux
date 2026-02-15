import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", role: "Bride, 2024", text: "Bonnie made me feel so calm and beautiful on my wedding day. My makeup lasted from sunrise photos all the way through to the last dance. Couldn't have asked for a better experience!" },
  { name: "Emily R.", role: "Bride, 2024", text: "Absolutely stunning work. Every single photo from my wedding looks flawless. Bonnie really listened to what I wanted and delivered even more than I imagined." },
  { name: "Jessica T.", role: "Bride, 2023", text: "Professional, punctual, and incredibly talented. Bonnie is hands down the best makeup artist in Hobart. My bridesmaids all looked amazing too!" },
  { name: "Amanda L.", role: "Bride, 2023", text: "I was so nervous about choosing a makeup artist, but from the moment I met Bonnie at my trial I knew I was in safe hands. She's a true perfectionist." },
  { name: "Kate W.", role: "Event Client, 2024", text: "Bonnie did my makeup for a gala event and I received so many compliments. She has a real gift for making you look like the best version of yourself." },
  { name: "Rachel D.", role: "Bride, 2024", text: "From the trial to the wedding day, Bonnie was an absolute dream. She even helped calm my nerves on the morning! My makeup lasted over 14 hours." },
  { name: "Megan H.", role: "Bride, 2023", text: "Worth every cent. Bonnie travels to your venue, arrives early, and creates the most beautiful looks. I cried multiple times and my makeup stayed perfect!" },
  { name: "Lauren S.", role: "Bridesmaid, 2024", text: "Bonnie did makeup for the entire bridal party and we all looked incredible. She managed the timing perfectly and kept the morning relaxed and fun." },
];

const Reviews = () => {
  useEffect(() => {
    document.title = "Reviews | Bonnie Rose Beauty Hobart";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto text-center">
            <ScrollReveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                Client Love
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Reviews
              </h1>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground">
                5.0 average from 200+ happy clients
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((r, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="bg-card border border-border rounded-lg p-8 hover-lift h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed mb-6 italic">
                      "{r.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary text-center">
          <ScrollReveal>
            <div className="container-narrow mx-auto max-w-xl">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                Ready to be my next happy client?
              </h2>
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

export default Reviews;
