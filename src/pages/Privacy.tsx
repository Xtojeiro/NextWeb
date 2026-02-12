import { Link } from 'react-router';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-400 hover:text-blue-500 mb-8 inline-block">
          ← Voltar ao Início
        </Link>
        <h1 className="text-4xl font-bold text-white mb-6">Política de Privacidade</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-[#94a3b8] mb-6">
            Última atualização: Fevereiro 2026
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
          <p className="text-[#94a3b8] mb-6">
            O NextApp valoriza a sua privacidade. Esta política descreve como recolhemos, 
            utilizamos e protegemos as suas informações.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">2. Dados Recolhidos</h2>
          <p className="text-[#94a3b8] mb-4">
            Podemos recolher os seguintes dados:
          </p>
          <ul className="list-disc list-inside text-[#94a3b8] mb-6 space-y-2">
            <li>Informações de conta (nome, email)</li>
            <li>Dados de utilização da aplicação</li>
            <li>Informações do dispositivo</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mb-4">3. Contacto</h2>
          <p className="text-[#94a3b8]">
            Para questões sobre esta política, contacte-nos através de{' '}
            <a href="mailto:nextapp@email.com" className="text-blue-400 hover:text-blue-500">
              nextapp@email.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
