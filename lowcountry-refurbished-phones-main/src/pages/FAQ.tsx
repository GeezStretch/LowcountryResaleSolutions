import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What does 'refurbished' mean?",
      answer: "Our refurbished phones are pre-owned devices that have been thoroughly tested, cleaned, and restored to working condition. All phones go through a comprehensive quality check and come with our 30-day warranty."
    },
    {
      question: "Do I need a credit check to purchase?",
      answer: "No! We don't require Social Security numbers or credit checks. Simply add items to your cart and checkout with any major credit card or PayPal."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy for all purchases. If you're not satisfied with your phone, return it in its original condition for a full refund."
    },
    {
      question: "Are the phones unlocked?",
      answer: "Most of our phones are unlocked and can be used with any carrier. Product descriptions will specify if a phone is locked to a specific carrier."
    },
    {
      question: "What's included with each phone?",
      answer: "Each phone comes with a charging cable and wall adapter. Original boxes and accessories may vary by product."
    },
    {
      question: "How do you grade phone conditions?",
      answer: "Excellent: Like new with minimal signs of use. Very Good: Minor cosmetic wear, fully functional. Good: Noticeable wear but excellent performance."
    },
    {
      question: "Do you offer warranties?",
      answer: "Yes! All phones come with a 30-day warranty covering defects and functionality issues. Extended warranties are available for purchase."
    },
    {
      question: "How fast is shipping?",
      answer: "We offer free standard shipping (3-5 business days) on orders over $50. Express shipping options are available at checkout."
    },
    {
      question: "Can I trade in my old phone?",
      answer: "While we don't currently offer trade-ins online, contact us directly to discuss trade-in options for your current device."
    },
    {
      question: "Are your payment methods secure?",
      answer: "Absolutely! We use 256-bit SSL encryption and accept Visa, MasterCard, and PayPal. Your payment information is never stored on our servers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-accent/30 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about buying refurbished phones from Lowcountry Resale Solutions
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 py-2"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-4">
            Our customer support team is here to help you find the perfect refurbished phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-hover transition-colors"
            >
              Contact Support
            </a>
            <a
              href="tel:+1-843-555-0123"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Call (843) 555-0123
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;