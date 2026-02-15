import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&h=900&fit=crop&q=80"
          alt="Professional bridal makeup application"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-5 md:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
            {[
              { icon: MapPin, label: "Hobart Based" },
              { icon: Sparkles, label: "On Location" },
              { icon: Heart, label: "Bridal Specialist" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/15 backdrop-blur-sm rounded-full text-xs tracking-wide text-primary-foreground border border-primary-foreground/20"
              >
                <Icon className="w-3 h-3" />
                {label}
              </span>
            ))}
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-foreground leading-[1.1] mb-6 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Makeup That Lasts
            <br />
            <span className="italic font-normal">As Long As Your Day</span>
          </h1>

          <p
            className="text-base md:text-lg text-primary-foreground/80 max-w-lg mb-10 leading-relaxed font-sans animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Professional bridal & event makeup in Hobart, Tasmania.
            Photography-ready, long-wearing looks crafted for your most
            beautiful moments.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
