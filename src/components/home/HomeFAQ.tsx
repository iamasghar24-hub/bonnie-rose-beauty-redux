import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does bridal makeup cost?",
    a: "Bridal makeup starts from $250. The final price depends on the complexity of the look, your location, and the start time. Contact me for a personalised quote.",
  },
  {
    q: "Do you travel outside of Hobart?",
    a: "Yes! I'm available across Tasmania. A travel fee may apply for locations outside the greater Hobart area. I'll provide a quote based on your venue.",
  },
  {
    q: "What if my wedding starts very early?",
    a: "No problem at all — I'm used to early starts. There may be a small surcharge for starts before 6am. We'll work out a timeline that keeps everything stress-free.",
  },
  {
    q: "How should I prepare my skin before the wedding?",
    a: "I recommend a consistent skincare routine in the weeks leading up to your wedding. Stay hydrated, avoid trying new products close to the date, and come to your appointment with clean, moisturised skin.",
  },
  {
    q: "How long does bridal makeup take?",
    a: "A full bridal application typically takes 60–90 minutes. I'll build extra time into our schedule so there's absolutely no rush on the morning of your wedding.",
  },
];

const HomeFAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-sans">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Frequently Asked
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
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
  );
};

export default HomeFAQ;
