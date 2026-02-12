import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Database, Globe, Layers, Zap, Code } from 'lucide-react';

const Technologies = () => {
  const techs = [
    { name: 'React Native', icon: <Smartphone size={32} />, desc: 'Interface nativa' },
    { name: 'Expo', icon: <Layers size={32} />, desc: 'Development Framework' },
    { name: 'TypeScript', icon: <Code size={32} />, desc: 'Type Safety' },
    { name: 'Convex', icon: <Database size={32} />, desc: 'Realtime Backend' },
    { name: 'i18next', icon: <Globe size={32} />, desc: 'Internationalization' },
    { name: 'React Navigation', icon: <Zap size={32} />, desc: 'Smooth Routing' },
  ];

  return (
    <section id="tech" className="py-24 bg-[#0f172a] border-t border-[#1e293b]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
            Construído com tecnologia de ponta
          </h2>
          <p className="text-lg text-[#94a3b8]">
            Stack moderno para uma experiência fluida
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-[#1e293b]/50 border border-[#334155] rounded-xl text-center hover:bg-[#1e293b] transition-colors"
            >
              <div className="mb-4 text-[#60a5fa]">{tech.icon}</div>
              <h3 className="text-[#f1f5f9] font-bold mb-1">{tech.name}</h3>
              <p className="text-xs text-[#94a3b8]">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
