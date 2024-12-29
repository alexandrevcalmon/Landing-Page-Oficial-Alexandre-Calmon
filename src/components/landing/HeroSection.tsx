import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Briefcase } from "lucide-react";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  onTrainClick?: () => void;
  onBookClick?: () => void;
}

const HeroSection = ({
  headline = "Eleve o Potencial da Sua Equipe e do Seu Negócio com IA Generativa",
  subheadline = "Descubra com o cientista de dados e especialista Alexandre Calmon, como a Inteligência Artificial Generativa pode revolucionar sua empresa e inspirar o seu público a conquistar novos patamares de inovação.",
  onTrainClick = () =>
    window.open("https://minhaagendavirtual.com.br/agenda/calmon/ia", "_blank"),
  onBookClick = () =>
    window.open("https://minhaagendavirtual.com.br/agenda/calmon/ia", "_blank"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1735415819354-fd734693f4a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0B0F16] bg-opacity-60" />

      {/* Particle animation overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute w-2 h-2 bg-[#DAA520] rounded-full animate-float"
          style={{ top: "10%", left: "20%" }}
        />
        <div
          className="absolute w-2 h-2 bg-[#DAA520] rounded-full animate-float"
          style={{ top: "30%", left: "70%" }}
        />
        <div
          className="absolute w-2 h-2 bg-[#DAA520] rounded-full animate-float"
          style={{ top: "60%", left: "40%" }}
        />
        <div
          className="absolute w-2 h-2 bg-[#DAA520] rounded-full animate-float"
          style={{ top: "80%", left: "80%" }}
        />
      </div>

      {/* Content container */}
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={onTrainClick}
            className="bg-[#DAA520] hover:bg-[#B8860B] text-white px-8"
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Quero Capacitar Minha Empresa
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={onBookClick}
            className="border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white px-8"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Quero Uma Palestra Inovadora
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
