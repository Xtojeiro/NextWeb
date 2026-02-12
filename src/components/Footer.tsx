import React from 'react';
import { Mail, Github, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-[#334155] relative">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] to-[#0f172a] opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para elevar a tua equipa?</h2>
             <p className="text-[#94a3b8] text-lg max-w-xl">
               Junta-te ao NextApp e transforma a gestão da tua equipa de futebol com ferramentas profissionais.
             </p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer">
             Começar Agora <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">N</div>
                <span className="text-xl font-bold text-[#f1f5f9]">NextApp</span>
             </div>
             <p className="text-[#94a3b8] text-sm max-w-xs">
               Plataforma de gestão de futebol multiplataforma para atletas, treinadores e olheiros.
             </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 md:gap-16 text-sm">
             <div className="flex flex-col gap-3">
                <h4 className="font-bold text-white mb-1">Produto</h4>
                <a href="#features" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Funcionalidades</a>
                <a href="#users" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Utilizadores</a>
                <a href="#showcase" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Screenshots</a>
             </div>
             <div className="flex flex-col gap-3">
                <h4 className="font-bold text-white mb-1">Suporte</h4>
                <a href="#faq" className="text-[#94a3b8] hover:text-blue-400 transition-colors">FAQ</a>
                <a href="mailto:nextapp@email.com" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Contacto</a>
                <a href="/privacidade" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Privacidade</a>
             </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
             <a href="https://github.com/nextapp" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-blue-500 transition-all">
                <Mail size={18} />
             </a>
             <a href="https://github.com/nextapp" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-blue-500 transition-all">
                <Github size={18} />
             </a>
             <a href="https://twitter.com/nextapp" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-blue-500 transition-all">
                <Twitter size={18} />
             </a>
             <a href="https://instagram.com/nextapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-blue-500 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
             </a>
          </div>
        </div>

        <div className="border-t border-[#334155] mt-12 pt-8 text-center text-xs text-[#64748b]">
           <p>© 2026 NextApp — Projeto PAP por Tomás. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
