import React from 'react';
import { motion } from 'motion/react';
import { BarChart2, Dumbbell, Calendar, MessageSquare, Layout, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Layout size={32} />,
      title: 'Dashboard Inteligente',
      description: 'Visualiza estatísticas detalhadas, evolução de desempenho e métricas personalizadas num dashboard completo.',
      color: 'text-blue-400',
    },
    {
      icon: <Dumbbell size={32} />,
      title: 'Gestão de Treinos',
      description: 'Cria, agenda e acompanha treinos com exercícios técnicos e táticos. Regista cargas, repetições e intensidade.',
      color: 'text-emerald-400',
    },
    {
      icon: <Calendar size={32} />,
      title: 'Calendário de Jogos',
      description: 'Organiza convocatórias, regista resultados e acompanha o calendário da época com estatísticas de jogo ao vivo.',
      color: 'text-amber-400',
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Chat em Tempo Real',
      description: 'Comunica com treinadores, jogadores e equipa. Mensagens instantâneas com notificações.',
      color: 'text-purple-400',
    },
    {
      icon: <Calendar size={32} />,
      title: 'Planeamento Avançado',
      description: 'Calendário unificado com todos os eventos — treinos, jogos, consultas médicas e eventos especiais.',
      color: 'text-pink-400',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Análise de Desempenho',
      description: 'Rankings de golos e assistências, comparações de jogadores, mapas de calor e exportação de relatórios.',
      color: 'text-cyan-400',
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#0f172a] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4"
          >
            Tudo o que precisas, <span className="text-blue-500">numa só app</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#94a3b8]"
          >
            Ferramentas poderosas para cada tipo de utilizador
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(96, 165, 250, 0.5)' }}
              className="bg-[#1e293b] border border-[#334155] rounded-2xl p-8 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">{feature.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
