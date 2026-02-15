import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Instagram, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground">
      <div className="container-narrow mx-auto text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4 font-sans">
            Ready to Book?
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 leading-tight">
            Let's Create Something
            <br />
            <span className="italic font-normal">Beautiful Together</span>
          </h2>
          <p className="text-base opacity-70 max-w-lg mx-auto mb-10 leading-relaxed">
            Your wedding day deserves a makeup artist who cares as much as you
            do. Book your trial or enquire about availability — popular dates
            fill fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="gold" size="xl" asChild>
              <Link to="/booking">
                <Calendar className="w-4 h-4" />
                Book a Consultation
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/61400000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <span className="opacity-30">|</span>
            <a
              href="https://instagram.com/bonnierosebeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
