import { Github } from 'lucide-react';

const Footer = () => {
   return (
      <footer className="bg-[#0f172a] border-t border-[#334155] relative">
         <div className="max-w-[1200px] mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

               <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">N</div>
                     <span className="text-xl font-bold text-[#f1f5f9]">NextApp</span>
                  </div>
                  <p className="text-[#94a3b8] text-sm max-w-xs">
                     Plataforma de gestão de futebol multiplataforma para atletas, treinadores e olheiros.
                  </p>
               </div>

               <div className="flex gap-8 md:gap-16 text-sm">
                  <div className="flex flex-col gap-3">
                     <h4 className="font-bold text-white mb-1">Produto</h4>
                     <a href="#features" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Funcionalidades</a>
                     <a href="#users" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Utilizadores</a>
                  </div>
                  <div className="flex flex-col gap-3">
                     <h4 className="font-bold text-white mb-1">Suporte</h4>
                     <a href="#faq" className="text-[#94a3b8] hover:text-blue-400 transition-colors">FAQ</a>
                     <a href="mailto:nextapp@email.com" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Contacto</a>
                  </div>
               </div>

               <div className="flex gap-4">
                  <a href="https://github.com/Xtojeiro/nextweb" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-blue-500 transition-all">
                     <Github size={18} />
                  </a>
               </div>
            </div>

            <div className="border-t border-[#334155] mt-12 pt-8 text-center text-xs text-[#64748b]">
               <p>© 2026 NextApp - Projeto PAP por Tomás. Todos os direitos reservados.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
