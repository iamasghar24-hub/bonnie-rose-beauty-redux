import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold mb-2">
              Bonnie Rose
            </h3>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-70">
              Beauty
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Professional bridal & event makeup artist based in Hobart,
              Tasmania. Creating timeless, photography-ready looks for your
              most important moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase mb-6 opacity-70">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
              { label: "Bridal Makeup", to: "/bridal" },
              { label: "Services & Pricing", to: "/services" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "About", to: "/about" },
              { label: "Reviews", to: "/reviews" },
              { label: "FAQ", to: "/faq" }].
              map((link) =>
              <li key={link.to}>
                  <Link
                  to={link.to}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">

                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase mb-6 opacity-70">
              Policies
            </h4>
            <ul className="space-y-3">
              {[
              { label: "Deposit & Payment", to: "/policies" },
              { label: "Cancellation Policy", to: "/policies" },
              { label: "Travel Fees", to: "/policies" },
              { label: "Timing & Schedule", to: "/policies" }].
              map((link, i) =>
              <li key={i}>
                  <Link
                  to={link.to}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">

                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase mb-6 opacity-70">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-70 shrink-0" />
                <span className="text-sm opacity-70">
                  Hobart, Tasmania
                  <br />
                  Australia
                </span>
              </li>
              <li>
                <a
                  href="tel:+61400000000"
                  className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity">

                  <Phone className="w-4 h-4 shrink-0" />
                  0400 000 000
                </a>
              </li>
              <li>
                <a

                  className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity" href="mailto:contact@bonnierosebeauty.com">

                  <Mail className="w-4 h-4 shrink-0" />
                  hello@bonnierosebeauty.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bonnierosebeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity">

                  <Instagram className="w-4 h-4 shrink-0" />
                  @bonnierosebeauty
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Bonnie Rose Beauty. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/bonnierosebeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity">

              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;