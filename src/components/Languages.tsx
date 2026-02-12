import React from 'react';

const Languages = () => {
  const languages = [
    { flag: '🇵🇹', name: 'Português', status: 'Completo' },
    { flag: '🇬🇧', name: 'English', status: 'Completo' },
    { flag: '🇪🇸', name: 'Español', status: 'Completo' },
  ];

  return (
    <section className="py-20 bg-[#1e293b]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-[#f1f5f9] mb-4">
              Fala a tua língua
            </h2>
            <p className="text-[#94a3b8]">
              Suporte multilingue completo para equipas internacionais. A aplicação adapta-se automaticamente à região do dispositivo.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {languages.map((lang, index) => (
              <div key={index} className="bg-[#0f172a] border border-[#334155] p-6 rounded-xl flex flex-col items-center justify-center gap-3">
                <span className="text-4xl">{lang.flag}</span>
                <h3 className="text-white font-bold">{lang.name}</h3>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                   ✅ {lang.status}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Languages;
