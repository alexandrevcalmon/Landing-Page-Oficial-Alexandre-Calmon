import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Timer, Users } from "lucide-react";

interface CTASectionProps {
  onTrainClick?: () => void;
  onBookClick?: () => void;
}

const CTASection = ({
  onTrainClick = () =>
    window.open("https://minhaagendavirtual.com.br/agenda/calmon/ia", "_blank"),
  onBookClick = () =>
    window.open("https://minhaagendavirtual.com.br/agenda/calmon/ia", "_blank"),
}: CTASectionProps) => {
  return (
    <section className="w-full bg-[#0B0F16] text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme Sua Empresa com IA Generativa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Não perca mais tempo. Junte-se às empresas que já estão colhendo os
            benefícios da IA Generativa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: <Users className="w-6 h-6 text-[#DAA520]" />,
                text: "Soluções Personalizadas",
              },
              {
                icon: <Timer className="w-6 h-6 text-[#DAA520]" />,
                text: "Alto Impacto em Resultados",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-[#DAA520]" />,
                text: "Palestras Inspiradoras",
              },
              {
                icon: <Briefcase className="w-6 h-6 text-[#DAA520]" />,
                text: "Suporte Contínuo",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4"
              >
                {item.icon}
                <span className="text-sm text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={onTrainClick}
              className="bg-[#DAA520] hover:bg-[#B8860B] text-white px-8 relative overflow-hidden group"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Quero Capacitar Minha Empresa
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={onBookClick}
              className="border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white px-8 relative overflow-hidden group"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Quero Contratar a Palestra
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
