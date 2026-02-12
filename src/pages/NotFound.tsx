import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Página Não Encontrada</h2>
        <p className="text-[#94a3b8] mb-8">
          A página que procuras não existe ou foi movida.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            <Home size={20} />
            Voltar ao Início
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
