import React from "react";
import { Card } from "@/components/ui/card";
import { Rocket, Brain, Target, Users } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({
  icon = <Rocket />,
  title = "Benefício Padrão",
  description = "Descrição do benefício aqui",
}: BenefitCardProps) => {
  return (
    <Card className="p-6 bg-[#1A1F2B] border-[#2A2F3B] hover:border-[#DAA520] transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-[#DAA520] w-12 h-12">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Card>
  );
};

interface BenefitsSectionProps {
  benefits?: BenefitCardProps[];
}

const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  const defaultBenefits = [
    {
      icon: <Brain className="w-full h-full" />,
      title: "Capacitação em IA Generativa",
      description:
        "Treinamentos práticos e personalizados para sua equipe dominar as ferramentas de IA mais avançadas do mercado.",
    },
    {
      icon: <Users className="w-full h-full" />,
      title: "Consultoria Especializada",
      description:
        "Acompanhamento individual para implementar soluções de IA que realmente impactem seus resultados.",
    },
    {
      icon: <Rocket className="w-full h-full" />,
      title: "Palestras Inspiradoras",
      description:
        "Apresentações dinâmicas sobre IA para eventos corporativos, com cases reais e tendências do mercado.",
    },
    {
      icon: <Target className="w-full h-full" />,
      title: "Resultados Tangíveis",
      description:
        "Metodologia focada em aplicações práticas e mensuração de resultados para sua empresa.",
    },
  ];

  const displayBenefits = benefits || defaultBenefits;

  return (
    <section className="w-full min-h-[600px] bg-[#0B0F16] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Soluções Completas em IA Generativa
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desenvolvemos um ecossistema completo para impulsionar sua empresa
            através da IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayBenefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
