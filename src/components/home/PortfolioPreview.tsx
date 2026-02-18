import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const portfolioImages = [
  { src: "/lovable-uploads/portfolio-1.jpg", alt: "Beauty portrait" },
  { src: "/lovable-uploads/portfolio-4.jpg", alt: "Glam makeup look" },
  { src: "/lovable-uploads/portfolio-5.jpg", alt: "Bridal soft waves" },
  { src: "/lovable-uploads/portfolio-6.jpg", alt: "Smokey glam look" },
  { src: "/lovable-uploads/portfolio-7.jpg", alt: "Natural bridal look" },
  { src: "/lovable-uploads/portfolio-8.jpg", alt: "Warm tones beauty" },
  { src: "/lovable-uploads/portfolio-9.jpg", alt: "Full glam bridal" },
  { src: "/lovable-uploads/portfolio-10.jpg", alt: "Classic bridal beauty" },
];

const PortfolioPreview = () => {
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

        {/* Grid - No filters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {portfolioImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 60}>
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
