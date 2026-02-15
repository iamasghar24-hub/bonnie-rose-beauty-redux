import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Bridal", "Soft Glam", "Full Glam"] as const;

const images = [
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=750&fit=crop&q=80", alt: "Bridal soft glam look", cat: "Bridal" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop&q=80", alt: "Bride portrait", cat: "Bridal" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=750&fit=crop&q=80", alt: "Full glam editorial", cat: "Full Glam" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop&q=80", alt: "Natural beauty look", cat: "Soft Glam" },
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=750&fit=crop&q=80", alt: "Bridal beauty close-up", cat: "Bridal" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=750&fit=crop&q=80", alt: "Elegant portrait", cat: "Soft Glam" },
  { src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600&h=750&fit=crop&q=80", alt: "Full glam beauty", cat: "Full Glam" },
  { src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=750&fit=crop&q=80", alt: "Makeup application", cat: "Soft Glam" },
  { src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=750&fit=crop&q=80", alt: "Beauty portrait", cat: "Full Glam" },
  { src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=750&fit=crop&q=80", alt: "Bridal glow", cat: "Bridal" },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=750&fit=crop&q=80", alt: "Soft glam finish", cat: "Soft Glam" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=750&fit=crop&q=80", alt: "Professional result", cat: "Bridal" },
];

const Portfolio = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  useEffect(() => {
    document.title = "Portfolio | Bonnie Rose Beauty Hobart";
  }, []);

  const filtered = active === "All" ? images : images.filter((i) => i.cat === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-wide mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                  My Work
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                  Portfolio
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                  A selection of bridal and event looks created for clients
                  across Hobart and Tasmania.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={cn(
                      "px-5 py-2 rounded-full text-xs tracking-wide font-medium transition-all duration-300",
                      active === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {filtered.map((img, i) => (
                <ScrollReveal key={img.src + active} delay={i * 50}>
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
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
                Love what you see?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's create your perfect look together.
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

export default Portfolio;
