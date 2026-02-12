import { motion } from 'motion/react';
import { Activity, Calendar, MessageCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router';

const PlayerPage = () => {
  const features = [
    {
      icon: <Activity className="text-blue-400" size={32} />,
      title: "Estatísticas Pessoais",
      description: "Acede aos teus dados de performance: minutos jogados, golos, assistências, passes completados e muito mais. Visualiza a tua evolução ao longo da época."
    },
    {
      icon: <Calendar className="text-blue-400" size={32} />,
      title: "Agenda Integrada",
      description: "Nunca percas um treino ou jogo. Recebe notificações sobre alterações de horário e convocatórias diretamente no telemóvel."
    },
    {
      icon: <MessageCircle className="text-blue-400" size={32} />,
      title: "Comunicação Direta",
      description: "Fala com o teu treinador e colegas de equipa através do chat seguro. Recebe feedback individualizado após cada jogo."
    },
    {
      icon: <TrendingUp className="text-blue-400" size={32} />,
      title: "Planos de Treino",
      description: "Recebe planos de treino individuais para melhorar aspetos específicos do teu jogo, com vídeos exemplificativos."
    },
    {
      icon: <Shield className="text-blue-400" size={32} />,
      title: "Histórico de Lesões",
      description: "Regista e acompanha a recuperação de lesões. O departamento médico pode atualizar o teu estado em tempo real."
    },
    {
      icon: <Zap className="text-blue-400" size={32} />,
      title: "Highlights em Vídeo",
      description: "Cria e partilha os teus melhores momentos. Uma ferramenta essencial para a tua promoção pessoal e análise tática."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 -z-10" />
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm mb-6 border border-blue-500/20">
              Para Jogadores
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Leva o teu jogo para o <span className="text-blue-500">próximo nível</span>
            </h1>
            <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed">
              Foca-te no que fazes melhor: jogar futebol. O NextApp trata de organizar a tua carreira, desde o horário dos treinos até à análise detalhada da tua performance.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/25">
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
                src="https://images.unsplash.com/photo-1517466787929-bc90951d6428?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                alt="Jogador a utilizar app NextApp no smartphone"
                width="540"
                height="720"
                loading="lazy"
                className="rounded-3xl shadow-2xl border-4 border-[#1e293b] transform rotate-2 hover:rotate-0 transition-all duration-500"
              />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-[#1e293b] p-6 rounded-2xl border border-[#334155] shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">
                  9.2
                </div>
                <div>
                  <p className="text-white font-bold">Rating do Jogo</p>
                  <p className="text-xs text-[#94a3b8]">Última partida</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-[#334155] rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[92%]"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Funcionalidades Exclusivas</h2>
            <p className="text-[#94a3b8]">Tudo o que precisas para gerir a tua carreira desportiva</p>
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
                  className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-blue-500/50 transition-all group"
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

export default PlayerPage;
