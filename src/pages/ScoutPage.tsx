import { motion } from 'motion/react';
import { Search, Map, FileText, Database, Star, Eye } from 'lucide-react';
import { Link } from 'react-router';

const ScoutPage = () => {
  const features = [
    {
      icon: <Database className="text-purple-400" size={32} />,
      title: "Base de Dados Global",
      description: "Acede a uma base de dados extensa de jogadores de vários escalões e ligas. Filtra por idade, posição, pé preferido e atributos físicos."
    },
    {
      icon: <FileText className="text-purple-400" size={32} />,
      title: "Relatórios Detalhados",
      description: "Cria e armazena relatórios de observação padronizados. Avalia aspetos técnicos, táticos, físicos e psicológicos de forma estruturada."
    },
    {
      icon: <Star className="text-purple-400" size={32} />,
      title: "Shadow Team",
      description: "Constrói equipas sombra para planear o futuro do plantel. Compara potenciais contratações com os jogadores atuais da equipa."
    },
    {
      icon: <Map className="text-purple-400" size={32} />,
      title: "Gestão de Observações",
      description: "Planeia a tua agenda de jogos a observar. Regista deslocações e organiza o calendário da equipa de scouting."
    },
    {
      icon: <Search className="text-purple-400" size={32} />,
      title: "Talent ID",
      description: "Usa algoritmos de identificação de talento para descobrir jogadores subvalorizados ou que correspondem ao perfil do clube."
    },
    {
      icon: <Eye className="text-purple-400" size={32} />,
      title: "Modo Espião",
      description: "Acompanha o desempenho dos adversários diretos. Regista bolas paradas, padrões táticos e jogadores chave."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-500/5 -z-10" />
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-bold text-sm mb-6 border border-purple-500/20">
              Para Olheiros (Scouts)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Descobre o próximo <span className="text-purple-500">craque mundial</span>
            </h1>
            <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed">
              O futebol decide-se nos detalhes. Organiza a tua rede de scouting, gera relatórios profissionais e não deixes escapar nenhum talento com o NextApp.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-purple-500/25">
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
                src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" 
                alt="Olheiro a tirar notas durante um jogo usando a app NextApp"
                width="540"
                height="720"
                loading="lazy"
                className="rounded-3xl shadow-2xl border-4 border-[#1e293b] transform rotate-1 hover:rotate-0 transition-all duration-500"
              />
            
            {/* Floating Card */}
            <div className="absolute bottom-10 -right-6 bg-[#1e293b]/90 backdrop-blur-md p-4 rounded-2xl border border-[#334155] shadow-xl w-64">
               <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80)'}}></div>
                  <div>
                     <p className="text-white font-bold text-sm">Novo Relatório</p>
                     <p className="text-[#94a3b8] text-xs">João Neves (MD)</p>
                     <div className="flex gap-1 mt-1">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Scouting Profissional</h2>
            <p className="text-[#94a3b8]">Da observação à contratação</p>
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
                  className="bg-[#1e293b] p-8 rounded-2xl border border-[#334155] hover:border-purple-500/50 transition-all group"
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

export default ScoutPage;
