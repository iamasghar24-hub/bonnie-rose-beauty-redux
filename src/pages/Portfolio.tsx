import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const photoImages = [
  { src: "/lovable-uploads/portfolio-1.jpg", alt: "Beauty portrait" },
  { src: "/lovable-uploads/portfolio-4.jpg", alt: "Glam makeup look" },
  { src: "/lovable-uploads/portfolio-5.jpg", alt: "Bridal soft waves" },
  { src: "/lovable-uploads/portfolio-6.jpg", alt: "Smokey glam look" },
  { src: "/lovable-uploads/portfolio-7.jpg", alt: "Natural bridal look" },
  { src: "/lovable-uploads/portfolio-8.jpg", alt: "Warm tones beauty" },
  { src: "/lovable-uploads/portfolio-9.jpg", alt: "Full glam bridal" },
  { src: "/lovable-uploads/portfolio-10.jpg", alt: "Classic bridal beauty" },
  { src: "/lovable-uploads/portfolio-11.jpg", alt: "Soft glam portrait" },
  { src: "/lovable-uploads/portfolio-12.jpg", alt: "Bold lip bridal look" },
];

const videoItems = [
  { title: "Bridal Transformation", src: "/lovable-uploads/video-1.mp4" },
  { title: "Client Look", src: "/lovable-uploads/video-2.mp4" },
  { title: "Wedding Day Glam", src: "/lovable-uploads/video-3.mp4" },
  { title: "Bridal Beauty", src: "/lovable-uploads/video-4.mp4" },
  { title: "Soft Glam Look", src: "/lovable-uploads/video-5.mp4" },
  { title: "Full Glam Finish", src: "/lovable-uploads/video-6.mp4" },
  { title: "Before & After", src: "/lovable-uploads/video-7.mp4" },
  { title: "Beauty Reel", src: "/lovable-uploads/video-8.mp4" },
  { title: "Client Testimonial", src: "/lovable-uploads/video-9.mp4" },
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoItems.map((video, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift">
                    <div className="aspect-[9/16] max-h-[500px]">
                      <video
                        src={video.src}
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                        poster="/lovable-uploads/portfolio-1.jpg"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-base font-semibold text-card-foreground">
                        {video.title}
                      </h3>
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
