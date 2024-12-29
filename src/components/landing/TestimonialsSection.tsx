import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Carlo Rachid",
    role: "Diretor",
    company: "Lys Clínica Vascular",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlo",
    content:
      "A capacitação em IA Generativa através deste workshop ministrada pelo Alexandre Calmon transformou a gestão da Lys Clínica Vascular. Implementamos ferramentas que otimizaram agendamentos, comunicações e relatórios médicos, reduzindo custos e melhorando o atendimento. A consultoria personalizada foi essencial para adaptar as soluções às nossas necessidades. Um investimento que valeu cada centavo!",
  },
  {
    id: 2,
    name: "Frederico",
    role: "Coordenador",
    company: "Sebrae-MG",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=frederico",
    content:
      "A palestra em Itaúna no evento 'Varejo +mais' do Sebrae-MG foi um sucesso! Recebemos feedbacks incríveis dos participantes. Todos saíram inspirados e preparados para explorar a IA Generativa em seus negócios.",
  },
  {
    id: 3,
    name: "Karla Martins",
    role: "Consultora",
    company: "Consultoria de Clínicas Médicas",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=karla",
    content:
      "Esta capacitação do Calmon foi um marco para o meu trabalho como consultora de clínicas médicas. As ferramentas e estratégias aprendidas me permitiram oferecer soluções mais eficientes aos meus clientes, automatizando processos, melhorando a comunicação com pacientes e otimizando a gestão das clínicas. A consultoria personalizada foi um diferencial, garantindo resultados rápidos e alinhados às necessidades de cada cliente.",
  },
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="w-full min-h-[500px] bg-[#0B0F16] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Depoimentos de Quem Já Experimentou Nossos Serviços
        </h2>

        <div className="relative">
          <Card className="bg-[#1A1F2A] border-none p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Quote className="w-12 h-12 text-[#DAA520] mb-6" />
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full"
                />
              </div>

              <div className="text-center">
                <h4 className="text-xl font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#DAA520]">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-400">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previousTestimonial}
              className="bg-[#1A1F2A] border-[#DAA520] hover:bg-[#DAA520] hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-[#1A1F2A] border-[#DAA520] hover:bg-[#DAA520] hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#DAA520]" : "bg-gray-600"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
