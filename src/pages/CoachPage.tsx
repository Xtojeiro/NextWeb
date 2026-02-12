import { motion } from 'motion/react';
import { ClipboardList, Users, BarChart, Calendar, Bell, FileText } from 'lucide-react';
import { Link } from 'react-router';

const CoachPage = () => {
  const features = [
    {
      icon: <ClipboardList className="text-emerald-400" size={32} />,
      title: "Gestão de Plantel",
      description: "Centraliza toda a informação dos teus jogadores. Dados biométricos, posições, contratos e notas pessoais num só lugar."
    },
    {
      icon: <FileText className="text-emerald-400" size={32} />,
      title: "Planeamento de Treinos",
      description: "Cria sessões de treino detalhadas com biblioteca de exercícios. Partilha o plano com o staff técnico e jogadores antecipadamente."
    },
    {
      icon: <BarChart className="text-emerald-400" size={32} />,
      title: "Análise Tática e Estatística",
      description: "Toma decisões baseadas em dados. Acede a relatórios pós-jogo, mapas de calor e estatísticas coletivas e individuais."
    },
    {
      icon: <Users className="text-emerald-400" size={32} />,
      title: "Convocatórias Digitais",
      description: "Lança convocatórias com um clique. Os jogadores são notificados instantaneamente e confirmam a presença na app."
    },
    {
      icon: <Calendar className="text-emerald-400" size={32} />,
      title: "Calendário da Época",
      description: "Visão global de micro e macrociclos. Gere cargas de treino, dias de descanso e datas de jogos importantes."
    },
    {
      icon: <Bell className="text-emerald-400" size={32} />,
      title: "Comunicação Eficiente",
      description: "Envia mensagens para grupos específicos (ex: defesas, capitães) ou individuais. Mantém o registo de todas as conversas."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 -z-10" />
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-sm mb-6 border border-emerald-500/20">
              Para Treinadores
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Liderança inteligente, <span className="text-emerald-500">resultados reais</span>
            </h1>
            <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed">
              Otimiza o teu tempo e foca-te na tática. O NextApp oferece-te todas as ferramentas para gerir a tua equipa técnica e jogadores com eficiência profissional.
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-emerald-500/25">
                Começar Grátis
              </button>
              <Link to="/" className="px-8 py-3 border border-[#334155] text-white font-bold rounded-xl hover:bg-[#1e293b] transition-all flex items-center justify-center">
                Voltar
              </Link>
            </div>
          </motion.div>
          
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1517137879134-48acfbe3be13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                alt="Treinador a dar instruções usando a app NextApp"
                width="540"
                height="720"
                loading="lazy"
                className="rounded-3xl shadow-2xl border-4 border-[#1e293b] transform -rotate-2 hover:rotate-0 transition-all duration-500"
              />
            <div className="absolute -top-6 -right-6 bg-[#1e293b] p-6 rounded-2xl border border-[#334155] shadow-xl">
              <div className="flex -space-x-3 mb-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1e293b] bg-gray-600"></div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-[#1e293b] bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">+24</div>
              </div>
              <p className="text-white font-bold text-center">Plantel Completo</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">O teu adjunto digital</h2>
            <p className="text-[#94a3b8]">Funcionalidades desenhadas para treinadores modernos</p>
          </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-emerald-500/50 transition-all group"
                >
                  <div className="mb-6 bg-[#0f172a] w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default CoachPage;
