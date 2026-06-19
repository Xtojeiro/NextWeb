import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Apple, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
            NextApp conecta jogadores, treinadores e olheiros numa única plataforma inteligente focada no futebol. Gere treinos táticos, acompanha estatísticas de jogo e comunica com a tua equipa - tudo na palma da mão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">


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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[660px] flex items-center justify-center"
        >
          <div className="relative w-[300px] max-w-[78vw] aspect-[423/917] bg-[#0f172a] rounded-[40px] border-[8px] border-[#334155] shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-all duration-500">
            <img
              src="/img/dashboard-screenshot.png"
              alt="Dashboard da aplicação NextApp"
              width="423"
              height="917"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-blue-500/20 rounded-[50px] blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
