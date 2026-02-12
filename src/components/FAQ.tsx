import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { q: "O que é o NextApp?", a: "Uma plataforma completa de gestão para equipas de futebol que conecta jogadores, treinadores e olheiros. Permite gerir treinos, acompanhar jogos e comunicar com o plantel." },
    { q: "Em que plataformas está disponível?", a: "iOS, Android e Web. Uma única app para todos os dispositivos." },
    { q: "É gratuito?", a: "O NextApp está atualmente em desenvolvimento como Projeto de Aptidão Profissional (PAP)." },
    { q: "Que desportos suporta?", a: "O NextApp é exclusivo para o futebol. Todas as estatísticas, exercícios e funcionalidades foram desenhadas especificamente para o desporto rei." },
    { q: "Como funciona o sistema de roles?", a: "Ao registar-se, escolhe o seu papel: Jogador, Treinador ou Olheiro. Cada um tem uma experiência personalizada com funcionalidades específicas." },
    { q: "Os meus dados estão seguros?", a: "Sim. Passwords encriptadas, autenticação segura e opção de perfil privado." }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0f172a]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#f1f5f9] mb-4">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#334155] rounded-xl bg-[#1e293b] overflow-hidden transition-all duration-300 hover:border-blue-500/50"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#f1f5f9]">{faq.q}</span>
                {activeIndex === index ? <ChevronUp className="text-blue-400" /> : <ChevronDown className="text-[#94a3b8]" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#94a3b8] text-sm leading-relaxed border-t border-[#334155]/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
