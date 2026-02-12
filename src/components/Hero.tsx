import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Apple, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            <span>⚽</span> Plataforma de Gestão de Futebol
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-[#f1f5f9] leading-[1.1] mb-6 tracking-tight">
            A tua equipa. <br />
            Os teus treinos. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Os teus resultados.
            </span>
          </h1>
          
          <p className="text-lg text-[#94a3b8] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            NextApp conecta jogadores, treinadores e olheiros numa única plataforma inteligente focada no futebol. Gere treinos táticos, acompanha estatísticas de jogo e comunica com a tua equipa — tudo na palma da mão.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
              Começar Agora <ArrowRight size={20} />
            </button>
            
            <button
              onClick={() => {
                const element = document.querySelector('#features');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#334155] hover:bg-[#1e293b] text-[#f1f5f9] font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Ver Funcionalidades
            </button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-6 text-[#94a3b8] text-sm font-medium">
            <div className="flex items-center gap-2">
              <Apple size={18} /> iOS
            </div>
            <div className="flex items-center gap-2">
              <Play size={18} /> Android
            </div>
            <div className="flex items-center gap-2">
              <Smartphone size={18} /> Web
            </div>
          </div>
        </motion.div>

        {/* Mockup Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
            <div className="relative w-[300px] h-[600px] bg-[#0f172a] rounded-[40px] border-[8px] border-[#334155] shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-all duration-500">
                {/* Mockup Screen Content */}
                <div className="w-full h-full bg-[#1e293b] relative overflow-hidden flex flex-col">
                    {/* Status Bar Mock */}
                    <div className="h-6 w-full bg-[#0f172a] flex justify-between items-center px-4">
                        <span className="text-[10px] text-white">9:41</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="p-4 flex justify-between items-center">
                        <div>
                            <p className="text-xs text-slate-400">Bem-vindo,</p>
                            <h3 className="text-white font-bold text-lg">Tomás</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400">
                           T
                        </div>
                    </div>

                    {/* Dashboard Content Mock */}
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar">
                        {/* Stat Card */}
                        <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-700">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Desempenho</span>
                                <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded">+12%</span>
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">8.4 <span className="text-sm text-slate-500 font-normal">/ 10</span></div>
                            <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[84%]"></div>
                            </div>
                        </div>

                         {/* Training Card */}
                         <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-700">
                             <div className="flex justify-between items-center mb-3">
                                <h4 className="text-white font-bold">Próximo Treino</h4>
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                             </div>
                             <div className="flex items-center gap-3 mb-3">
                                 <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                                     16
                                 </div>
                                 <div>
                                     <p className="text-white font-medium">Treino Tático</p>
                                     <p className="text-xs text-slate-400">18:30 • Campo Principal</p>
                                 </div>
                             </div>
                             <div className="flex gap-2 mt-2">
                                 <div className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">Físico</div>
                                 <div className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300">Tático</div>
                             </div>
                         </div>

                        {/* Chart Area Mock */}
                         <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-700 h-32 flex items-end justify-between px-2 pb-2">
                            {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                                <div key={i} className="w-6 bg-slate-800 rounded-t-sm relative group">
                                    <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors rounded-t-sm"></div>
                                </div>
                            ))}
                         </div>
                    </div>
                    
                    {/* Bottom Nav Mock */}
                    <div className="h-16 bg-[#0f172a] border-t border-slate-800 flex justify-around items-center px-2">
                        {[1,2,3,4,5].map((i) => (
                            <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 1 ? 'text-blue-400 bg-blue-400/10' : 'text-slate-600'}`}>
                                <div className="w-5 h-5 bg-current rounded-sm opacity-50"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Decorative Elements around phone */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-blue-500/20 rounded-[50px] blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
