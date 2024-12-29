import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const FAQSection = ({
  faqs = [
    {
      question:
        "Preciso de conhecimento prévio em IA para participar das capacitações?",
      answer:
        "Não. Os treinamentos podem ser moldados de acordo com o nível de conhecimento da sua equipe.",
    },
    {
      question: "Quanto tempo dura uma palestra?",
      answer:
        "Geralmente, uma hora e meia, mas pode ser ajustado de acordo com a necessidade do evento.",
    },
    {
      question:
        "Posso contratar a consultoria mesmo se minha empresa for de pequeno porte?",
      answer:
        "Com certeza. Adaptamos a abordagem para organizações de todos os tamanhos, sempre visando o melhor retorno sobre investimento.",
    },
    {
      question: "Quais os formatos das capacitações?",
      answer:
        "Podem ser online ou presenciais, envolvendo workshops, dinâmicas e consultorias individuais conforme a demanda.",
    },
  ],
}: FAQSectionProps) => {
  return (
    <section className="w-full min-h-[500px] bg-[#0B0F16] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left hover:text-[#DAA520]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
