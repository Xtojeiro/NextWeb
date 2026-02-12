
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AppShowcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  };

  // Generating mock slides using CSS/HTML since we don't have actual screenshots
  const slides = [
    { title: 'Login', color: 'from-blue-600 to-indigo-900', content: 'Bem-vindo de volta' },
    { title: 'Dashboard', color: 'from-slate-800 to-slate-900', content: 'Estatísticas' },
    { title: 'Treinos', color: 'from-emerald-800 to-emerald-950', content: 'Plano Semanal' },
    { title: 'Jogos', color: 'from-amber-800 to-amber-950', content: 'Calendário' },
    { title: 'Chat', color: 'from-purple-800 to-purple-950', content: 'Mensagens' },
    { title: 'Perfil', color: 'from-pink-800 to-pink-950', content: 'Configurações' },
  ];

  return (
    <section id="showcase" className="py-24 bg-[#0f172a] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#f1f5f9] mb-4">
          Vê a app em ação
        </h2>
        <p className="text-lg text-[#94a3b8]">
          Design moderno e intuitivo em modo escuro
        </p>
      </div>

      <div className="showcase-slider pb-12">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4 py-8 focus:outline-none">
              <div className="relative mx-auto w-[280px] h-[580px] bg-[#0f172a] rounded-[40px] border-[8px] border-[#334155] shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
                {/* Screen Content */}
                <div className={`w-full h-full bg-gradient-to-br ${slide.color} relative p-6 flex flex-col`}>
                  {/* Mock Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 flex justify-between px-6 items-center">
                     <div className="text-[10px] text-white">9:41</div>
                     <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                     </div>
                  </div>
                  
                  <div className="mt-8 mb-4">
                    <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
                    <p className="text-white/60 text-sm">{slide.content}</p>
                  </div>

                  {/* Mock Content Blocks */}
                  <div className="flex-1 space-y-3">
                     <div className="h-24 bg-white/10 rounded-xl backdrop-blur-sm border border-white/5 p-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 mb-2"></div>
                        <div className="h-2 w-2/3 bg-white/20 rounded"></div>
                     </div>
                     <div className="h-24 bg-white/10 rounded-xl backdrop-blur-sm border border-white/5 p-3">
                        <div className="flex justify-between mb-2">
                           <div className="h-2 w-1/3 bg-white/20 rounded"></div>
                           <div className="h-2 w-4 bg-white/20 rounded"></div>
                        </div>
                        <div className="h-10 bg-white/5 rounded mt-2"></div>
                     </div>
                       <div className="h-40 bg-white/10 rounded-xl backdrop-blur-sm border border-white/5 p-3 flex items-end gap-2">
                          {[40, 65, 45, 75, 55].map((height, i) => (
                             <div key={i} className="flex-1 bg-white/20 rounded-t" style={{height: `${height}%`}}></div>
                          ))}
                       </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AppShowcase;
