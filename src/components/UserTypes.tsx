import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { User, ClipboardList, Search } from 'lucide-react';

const UserTypes = () => {
  const [activeTab, setActiveTab] = useState<'player' | 'coach' | 'scout'>('player');

  const tabs = [
    { id: 'player', label: 'Jogador / Atleta', icon: <User size={20} />, color: 'blue' },
    { id: 'coach', label: 'Treinador', icon: <ClipboardList size={20} />, color: 'emerald' },
    { id: 'scout', label: 'Olheiro (Scout)', icon: <Search size={20} />, color: 'purple' },
  ];

  const content = {
    player: {
      title: 'Para Jogadores',
      subtitle: 'Foca-te no teu jogo, nós tratamos dos dados.',
      features: [
        'Dashboard personalizado com estatísticas individuais',
        'Registo e acompanhamento de treinos pessoais',
        'Calendário de jogos e eventos da equipa',
        'Chat direto com treinadores',
        'Perfil público ou privado',
        'Acompanhamento de evolução com gráficos'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500',
      borderColor: 'border-blue-500',
      image: "https://images.unsplash.com/photo-1739550635585-484633b21450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjB0cmFpbmluZyUyMHBob25lJTIwYXBwfGVufDF8fHx8MTc3MDkwNjY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: '/player'
    },
    coach: {
      title: 'Para Treinadores',
      subtitle: 'Lidera a tua equipa com inteligência.',
      features: [
        'Gestão completa da equipa e atletas',
        'Criação de planos de treino e exercícios',
        'Agendamento de jogos e eventos',
        'Dashboard de estatísticas da equipa',
        'Notas privadas sobre cada atleta',
        'Rankings e comparações multi-atleta',
        'Exportação de relatórios (PDF/CSV)'
      ],
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500',
      borderColor: 'border-emerald-500',
      image: "https://images.unsplash.com/photo-1550378492-4903c3e172a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb2FjaCUyMHVzaW5nJTIwdGFibGV0fGVufDF8fHx8MTc3MDkwNjY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: '/coach'
    },
    scout: {
      title: 'Para Olheiros',
      subtitle: 'Descobre os próximos talentos.',
      features: [
        'Pesquisa avançada de jogadores',
        'Visualização de perfis e estatísticas públicas',
        'Sistema de seguir jogadores favoritos',
        'Relatórios de desempenho detalhados'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500',
      borderColor: 'border-purple-500',
      image: "https://images.unsplash.com/photo-1527842695033-709d0f9fc38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzY291dCUyMHRha2luZyUyMG5vdGVzfGVufDF8fHx8MTc3MDkwNjY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: '/scout'
    }
  };

  return (
    <section id="users" className="py-24 bg-[#0f172a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            Uma experiência única para cada papel
          </h2>
          <p className="text-lg text-[#94a3b8]">
            Três perfis, três experiências personalizadas
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                activeTab === tab.id
                  ? `bg-[#1e293b] text-white border-${tab.color}-500 shadow-lg shadow-${tab.color}-500/20`
                  : 'bg-transparent text-[#94a3b8] border-[#334155] hover:bg-[#1e293b] hover:text-white'
              }`}
            >
              <span className={activeTab === tab.id ? `text-${tab.color}-400` : ''}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px] bg-[#1e293b] border border-[#334155] rounded-3xl p-8 md:p-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Info */}
              <div>
                <div className={`inline-block px-3 py-1 rounded-lg text-sm font-bold mb-4 bg-slate-800 ${content[activeTab].color}`}>
                  {content[activeTab].title}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {content[activeTab].subtitle}
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {content[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 min-w-5 h-5 rounded-full flex items-center justify-center ${content[activeTab].bgColor} bg-opacity-20`}>
                        <div className={`w-2 h-2 rounded-full ${content[activeTab].bgColor}`}></div>
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={content[activeTab].link}>
                  <button className={`px-6 py-3 rounded-xl font-semibold text-white ${content[activeTab].bgColor} hover:opacity-90 transition-opacity`}>
                    Saber mais
                  </button>
                </Link>
              </div>

              {/* Image / Mockup Area */}
              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-[#334155]">
                <div className={`absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent z-10 opacity-60`}></div>
                <img 
                  src={content[activeTab].image} 
                  alt={content[activeTab].title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
