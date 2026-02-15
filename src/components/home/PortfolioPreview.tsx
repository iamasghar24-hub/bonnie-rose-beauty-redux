import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const categories = ["All", "Bridal", "Soft Glam", "Full Glam"] as const;

const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=750&fit=crop&q=80", alt: "Bridal soft glam look", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop&q=80", alt: "Bride on wedding day", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=750&fit=crop&q=80", alt: "Full glam editorial look", category: "Full Glam" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop&q=80", alt: "Natural soft glam", category: "Soft Glam" },
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=750&fit=crop&q=80", alt: "Bridal beauty portrait", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=750&fit=crop&q=80", alt: "Elegant soft glam", category: "Soft Glam" },
  { src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600&h=750&fit=crop&q=80", alt: "Full glam beauty", category: "Full Glam" },
  { src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=750&fit=crop&q=80", alt: "Professional makeup result", category: "Soft Glam" },
];

const PortfolioPreview = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === active);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
              My Work
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Portfolio
            </h2>
          </div>
        </ScrollReveal>

        {/* Filters */}
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
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 60}>
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

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/portfolio">
                View Full Portfolio <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PortfolioPreview;
