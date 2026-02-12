import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 10, suffix: '+', label: 'Ecrãs e Funcionalidades' },
    { number: 3, suffix: '', label: 'Tipos de Utilizador' },
    { number: 3, suffix: '', label: 'Idiomas Suportados' },
    { number: 42, suffix: '+', label: 'Funções de Backend' },
  ];

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#f1f5f9]">NextApp em números</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-600 mb-2">
                {inView ? <CountUp end={stat.number} duration={2.5} /> : '0'}
                {stat.suffix}
              </div>
              <div className="text-[#94a3b8] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
