import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const photoImages = [
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=750&fit=crop&q=80", alt: "Bridal soft glam look" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop&q=80", alt: "Bride portrait" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=750&fit=crop&q=80", alt: "Full glam editorial" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop&q=80", alt: "Natural beauty look" },
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=750&fit=crop&q=80", alt: "Bridal beauty close-up" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=750&fit=crop&q=80", alt: "Elegant portrait" },
  { src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600&h=750&fit=crop&q=80", alt: "Full glam beauty" },
  { src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=750&fit=crop&q=80", alt: "Makeup application" },
  { src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=750&fit=crop&q=80", alt: "Beauty portrait" },
  { src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=750&fit=crop&q=80", alt: "Bridal glow" },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=750&fit=crop&q=80", alt: "Soft glam finish" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=750&fit=crop&q=80", alt: "Professional result" },
];

const videoItems = [
  { title: "Bridal Before & After", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "See the transformation" },
  { title: "Client Testimonial", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Hear from a happy bride" },
  { title: "Wedding Day Prep", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Behind the scenes" },
  { title: "Makeup Tutorial", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Tips and techniques" },
];

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Bonnie Rose Beauty Hobart";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Photo Portfolio */}
        <section className="section-padding">
          <div className="container-wide mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                  My Work
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                  Photo Portfolio
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                  A selection of bridal and event looks created for clients
                  across Hobart and Tasmania.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {photoImages.map((img, i) => (
                <ScrollReveal key={i} delay={i * 50}>
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

        {/* Video Portfolio */}
        <section className="section-padding bg-secondary">
          <div className="container-wide mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                  Watch
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                  Video Portfolio
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Before & afters, client feedback, and behind-the-scenes moments.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videoItems.map((video, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift">
                    <div className="aspect-video">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding text-center">
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
