import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background pt-20">
      <div className="container-wide mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
              {[
              { icon: MapPin, label: "Hobart Based" },
              { icon: Sparkles, label: "On Location" },
              { icon: Heart, label: "Bridal Specialist" }].
              map(({ icon: Icon, label }) =>
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-xs tracking-wide text-foreground border border-border">

                  <Icon className="w-3 h-3" />
                  {label}
                </span>
              )}
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: "100ms" }}>

              Makeup That Lasts
              <br />
              <span className="italic font-normal">As Long As Your Day</span>
            </h1>

            <p
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed font-sans animate-fade-up"
              style={{ animationDelay: "200ms" }}>

              Professional bridal & event makeup in Hobart, Tasmania.
              Photography-ready, long-wearing looks crafted for your most
              beautiful moments.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "300ms" }}>

              <Button variant="hero" size="xl" asChild>
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Right - Editable Image */}
          <div
            className="aspect-[4/5] rounded-lg overflow-hidden animate-fade-up order-first lg:order-last"
            style={{ animationDelay: "200ms" }}>

            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop&q=80"
              alt="Professional bridal makeup application"
              className="w-full h-full object-cover rounded-3xl" />

          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;