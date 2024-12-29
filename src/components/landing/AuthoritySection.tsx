import React from "react";
import { Card } from "../ui/card";
import { Award, Users, TrendingUp, GraduationCap } from "lucide-react";

interface AuthoritySectionProps {
  consultantName?: string;
  consultantBio?: string;
  videoUrl?: string;
  achievements?: Array<{
    metric: string;
    label: string;
  }>;
}

const AuthoritySection = ({
  consultantName = "Alexandre Calmon",
  consultantBio = "Sou Alexandre Calmon, especialista em Inteligência Artificial Generativa e consultor com mais de 15 anos de experiência no mercado. Sou graduado em Ciência de Dados, Especialista em Inteligência Artificial, Pós-Graduado em Neurociência e Comportamento Humano, desde então, tenho aplicado meu conhecimento em soluções inovadoras para empresas de diversos segmentos.",
  videoUrl = "https://player.vimeo.com/video/1033826373",
  achievements = [
    { metric: "200+", label: "Empresas Capacitadas" },
    { metric: "400h+", label: "Horas de Consultoria em 2024" },
    { metric: "15+", label: "Anos de Experiência" },
    { metric: "6+", label: "Grandes Instituições Atendidas" },
  ],
}: AuthoritySectionProps) => {
  return (
    <section className="w-full min-h-screen bg-[#0B0F16] text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-6 mb-8">
              <img
                src="https://images.unsplash.com/photo-1735437310925-0e569de6341e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Alexandre Calmon"
                className="w-48 h-48 rounded-full object-cover border-4 border-[#DAA520]"
              />
              <h2 className="text-4xl font-bold">{consultantName}</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              {consultantBio}
            </p>

            <div className="space-y-4 text-gray-300">
              <p className="font-semibold">
                Ao longo da minha trajetória, tive a oportunidade de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Realizar capacitações e consultorias individuais para mais de
                  200 empresas que incorporaram a IA Generativa em seus
                  processos.
                </li>
                <li>
                  Somente em 2024 foram realizadas mais de 400 horas de
                  consultorias individuais, ajudando colaboradores a aplicarem
                  na prática IA Generativa em seus setores.
                </li>
                <li>
                  Ministrar palestras impactantes em grandes eventos de
                  tecnologia e negócios, destacando cases de sucesso e
                  tendências futuras para instituições como Governo de Minas,
                  Sebrae, FIESP, FIEMG, AMBEV, SicooB entre outras.
                </li>
              </ul>
              <p className="mt-6 italic">
                Minha missão é trazer soluções personalizadas, seja capacitando
                equipes, seja inspirando plateias, para que você e sua empresa
                sejam protagonistas na era da inovação.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Video Section */}
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Revolução da Inteligência Artificial Generativa"
              />
            </div>

            {/* Achievements Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gray-900 border-none hover:bg-gray-800 transition-colors"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    {index === 0 && (
                      <Users className="w-8 h-8 text-[#DAA520] mb-2" />
                    )}
                    {index === 1 && (
                      <Award className="w-8 h-8 text-[#DAA520] mb-2" />
                    )}
                    {index === 2 && (
                      <GraduationCap className="w-8 h-8 text-[#DAA520] mb-2" />
                    )}
                    {index === 3 && (
                      <TrendingUp className="w-8 h-8 text-[#DAA520] mb-2" />
                    )}
                    <span className="text-3xl font-bold text-[#DAA520]">
                      {achievement.metric}
                    </span>
                    <span className="text-sm text-gray-400">
                      {achievement.label}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
