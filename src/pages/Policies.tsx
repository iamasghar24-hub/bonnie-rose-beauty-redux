import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Deposit & Payment",
    content: [
      "A non-refundable deposit of $50 is required to secure your booking date.",
      "The remaining balance is due 14 days prior to your event.",
      "Payment can be made via bank transfer, PayPal, or cash on the day (by prior arrangement).",
      "Invoices will be sent via email with clear payment instructions.",
    ],
  },
  {
    title: "Cancellation Policy",
    content: [
      "Cancellations made more than 30 days before the event: deposit is forfeited, no further charges.",
      "Cancellations made 14–30 days before: 50% of the total booking fee is charged.",
      "Cancellations made within 14 days: 100% of the booking fee is charged.",
      "I understand circumstances change — please communicate as early as possible and I'll do my best to accommodate.",
    ],
  },
  {
    title: "Rescheduling",
    content: [
      "Rescheduling is subject to availability and must be requested at least 14 days in advance.",
      "One reschedule is permitted at no additional charge (subject to availability).",
      "Additional rescheduling may incur a $30 administration fee.",
      "Date changes within 14 days of the original event are treated as cancellations.",
    ],
  },
  {
    title: "Travel Fees",
    content: [
      "On-location services within the greater Hobart area are included at no extra cost.",
      "Locations outside greater Hobart attract a travel fee based on distance — this will be quoted upfront.",
      "For regional Tasmania (e.g. Launceston, East Coast), accommodation may be required for very early starts.",
      "Travel fees are included in your personalised quote before booking.",
    ],
  },
  {
    title: "Timing & Schedule",
    content: [
      "I will arrive at your venue at the agreed time — punctuality is guaranteed.",
      "A detailed timeline will be created for your wedding morning, factoring in hair, photos, and ceremony start.",
      "Please allow 60–90 minutes for the bride and 45–60 minutes per additional person.",
      "Early starts (before 6am) may attract a small surcharge.",
      "I recommend building buffer time into the morning schedule for a relaxed experience.",
    ],
  },
  {
    title: "Trial Sessions",
    content: [
      "Bridal trials are strongly recommended and booked separately.",
      "Trial sessions are typically scheduled 4–8 weeks before the wedding.",
      "The trial fee is non-refundable and separate from the wedding day booking.",
      "Photos will be taken during the trial for reference on the day.",
    ],
  },
];

const Policies = () => {
  useEffect(() => {
    document.title = "Policies | Bonnie Rose Beauty Hobart";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto text-center">
            <ScrollReveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                Important Info
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Policies
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Transparency is important to me. Here's everything you need
                to know about bookings, payments, and what to expect.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-3xl space-y-12">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="section-padding bg-secondary text-center">
          <ScrollReveal>
            <div className="container-narrow mx-auto max-w-xl">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                Questions about policies?
              </h2>
              <p className="text-muted-foreground mb-8">
                I'm happy to clarify anything. Just get in touch.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/booking">Contact Me</Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;
