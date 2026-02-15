import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How much does bridal makeup cost?", a: "Bridal makeup starts from $250. The final price depends on the complexity of the look, your location, and the start time. I'll provide a personalised quote after our initial chat." },
  { q: "Do you offer a trial session?", a: "Absolutely! I highly recommend a trial session (from $120) so we can perfect your look before the big day. Trials are typically booked 4–8 weeks before the wedding." },
  { q: "How far in advance should I book?", a: "I recommend booking as soon as you have your date confirmed. Popular dates (especially during peak wedding season) can book 6–12 months in advance." },
  { q: "Do you travel to my venue?", a: "Yes! I offer on-location services across Hobart and Tasmania. A travel fee may apply for locations outside the greater Hobart area — I'll include this in your quote." },
  { q: "What if my wedding starts very early?", a: "I'm very used to early starts! There may be a small surcharge for starts before 6am. We'll create a detailed timeline together so everyone is ready on time." },
  { q: "How should I prepare my skin before makeup?", a: "Maintain a consistent skincare routine in the weeks leading up. Stay hydrated, avoid trying new products close to the date, and arrive with clean, moisturised skin. I'll send you a full preparation guide." },
  { q: "How long does bridal makeup take?", a: "A full bridal application takes 60–90 minutes. Bridesmaids and mothers take 45–60 minutes each. I'll build a detailed schedule for the morning." },
  { q: "What products do you use?", a: "I use only premium, professional-grade products from brands like Charlotte Tilbury, MAC, NARS, and Bobbi Brown. All products are long-wearing and photography-friendly." },
  { q: "Will my makeup last all day?", a: "Yes! I use long-wearing, transfer-proof products and professional techniques to ensure your makeup lasts from morning prep through to the last dance. I'll also provide a touch-up kit." },
  { q: "Do you do hair as well?", a: "I specialise exclusively in makeup. However, I can recommend talented hair stylists in Hobart who I regularly work alongside at weddings." },
  { q: "What is your cancellation policy?", a: "Please see my Policies page for full details on deposits, cancellations, and rescheduling. I understand things change and I try to be as flexible as possible." },
  { q: "Can I bring inspiration photos?", a: "Please do! I love seeing your Pinterest boards and reference photos. They help me understand your vision so I can create a look that's perfectly you." },
];

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ | Bonnie Rose Beauty Hobart";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto text-center">
            <ScrollReveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
                FAQ
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Everything you need to know before booking. Can't find your
                answer?{" "}
                <Link to="/booking" className="text-primary hover:underline">
                  Get in touch
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <ScrollReveal>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                    <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:text-primary py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding bg-secondary text-center">
          <ScrollReveal>
            <div className="container-narrow mx-auto max-w-xl">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                I'm always happy to chat. Send me a message and I'll get
                back to you within 24 hours.
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

export default FAQ;
