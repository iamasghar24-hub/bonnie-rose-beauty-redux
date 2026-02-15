import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, MessageCircle, Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  "I'll review your enquiry and respond within 24 hours.",
  "We'll discuss your vision, date, and any questions.",
  "Once confirmed, you'll secure your date with a deposit.",
  "I'll send you a preparation guide and we'll schedule your trial.",
];

const Booking = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Book Now | Bonnie Rose Beauty Hobart";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Enquiry sent!",
      description: "Thank you — I'll be in touch within 24 hours.",
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                  Get In Touch
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                  Book Your Look
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Fill out the form below and I'll get back to you within 24
                  hours. Popular dates book months in advance, so don't wait!
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  {submitted ? (
                    <div className="bg-rose-light rounded-lg p-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                        Thank you!
                      </h2>
                      <p className="text-muted-foreground">
                        Your enquiry has been received. I'll be in touch within
                        24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" required placeholder="Your full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" required placeholder="you@example.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone *</Label>
                          <Input id="phone" type="tel" required placeholder="04XX XXX XXX" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventType">Event Type *</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="engagement">Engagement</SelectItem>
                              <SelectItem value="formal">Formal / Prom</SelectItem>
                              <SelectItem value="event">Special Event</SelectItem>
                              <SelectItem value="photoshoot">Photoshoot</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="date">Event Date *</Label>
                          <Input id="date" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Start Time (approx)</Label>
                          <Input id="time" type="time" placeholder="e.g. 6:00 AM" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="location">Location / Suburb *</Label>
                          <Input id="location" required placeholder="e.g. Battery Point, Hobart" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="people">Number of People *</Label>
                          <Input id="people" type="number" min="1" required placeholder="e.g. 4" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="look">Desired Look</Label>
                          <Input id="look" placeholder="e.g. Soft glam, natural" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="instagram">Instagram Handle</Label>
                          <Input id="instagram" placeholder="@yourusername" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder="Tell me about your event, any special requests, or questions..."
                        />
                      </div>

                      <Button variant="hero" size="xl" type="submit" className="w-full sm:w-auto">
                        Send Enquiry
                      </Button>
                    </form>
                  )}
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <ScrollReveal delay={200}>
                  <div className="space-y-8">
                    {/* What happens next */}
                    <div className="bg-secondary rounded-lg p-8">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                        What happens next?
                      </h3>
                      <ol className="space-y-3">
                        {steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="text-sm text-muted-foreground">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Quick Contact */}
                    <div className="space-y-3">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        Prefer to reach out directly?
                      </h3>
                      <a
                        href="https://wa.me/61400000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                      >
                        <MessageCircle className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">WhatsApp</p>
                          <p className="text-xs text-muted-foreground">Quick chat</p>
                        </div>
                      </a>
                      <a
                        href="https://instagram.com/bonnierosebeauty"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                      >
                        <Instagram className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Instagram</p>
                          <p className="text-xs text-muted-foreground">@bonnierosebeauty</p>
                        </div>
                      </a>
                      <a
                        href="mailto:hello@bonnierosebeauty.com"
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Email</p>
                          <p className="text-xs text-muted-foreground">hello@bonnierosebeauty.com</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
