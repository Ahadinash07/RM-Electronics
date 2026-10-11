"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { trackFAQOpen } from "@/lib/gtm";

const faqs = [
 {
  question: "How much does TV repair cost in Hyderabad?",
  answer: "Cost depends on the issue and parts required. We provide a free diagnosis and transparent quote before starting any repair. Simple issues like remote or software problems are more affordable, while component replacements cost more.",
 },
 {
  question: "Do you provide doorstep service?",
  answer: "Yes! Our technicians visit your home in Hyderabad to diagnose and repair your TV. No need to transport your TV to a service center.",
 },
 {
  question: "How long does a typical repair take?",
  answer: "Most repairs are completed the same day. Complex issues requiring special parts may take 1-2 days, but we'll keep you informed throughout the process.",
 },
 {
  question: "Do you service all TV brands?",
  answer: "Yes, we repair all major brands including Samsung, LG, Sony, Panasonic, Xiaomi, Vu, and others. Our technicians have experience with both old and new models.",
 },
 {
  question: "What warranty do you provide?",
  answer: "All repairs come with a 90-day warranty on both parts and labor. If the same issue recurs within the warranty period, we fix it free of charge.",
 },
 {
  question: "Is diagnosis free?",
  answer: "Yes, diagnosis is free when you proceed with the repair. If you choose not to repair, a nominal diagnostic fee may apply depending on the complexity of the issue.",
 },
 {
  question: "Do you repair Smart TVs?",
  answer: "Absolutely! We repair all types of Smart TVs including software issues, WiFi problems, app crashes, and hardware failures.",
 },
 {
  question: "How do I book a service?",
  answer: "You can book by calling us at +91 7893457190 or sending a WhatsApp message. Our team will confirm the appointment and technician visit time.",
 },
];

export const FAQAccordion = () => {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggleFAQ = (index: number) => {
  const newIndex = openIndex === index ? null : index;
  setOpenIndex(newIndex);
  if (newIndex !== null) {
   trackFAQOpen(faqs[index].question);
  }
 };

 return (
  <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-surface-soft relative overflow-hidden" id="faq">
   {/* Background decoration */}
   <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl" />
   </div>

   <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 md:mb-10">
     <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-4 py-2 rounded-full mb-6">
      <HelpCircle className="h-4 w-4 text-brand-primary" />
      <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
       FAQ
      </span>
     </div>
     <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
      Frequently Asked Questions
     </h2>
     <p className="text-lg text-text-secondary">
      Find answers to common questions about our TV repair services.
     </p>
    </div>

    <div className="space-y-4">
     {faqs.map((faq, index) => (
      <div
       key={index}
       className="bg-whiteborder border-border-light rounded-2xl overflow-hidden"
      >
       <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-muted transition-colors"
        aria-expanded={openIndex === index}
       >
        <span className="font-semibold text-text-primary pr-4">
         {faq.question}
        </span>
        <ChevronDown
         className={`h-5 w-5 text-text-secondary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-brand-primary" : ""
          }`}
        />
       </button>
       <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"
         }`}
       >
        <p className="p-6 pt-0 text-text-secondary leading-relaxed">
         {faq.answer}
        </p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};