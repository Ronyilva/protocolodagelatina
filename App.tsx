import React, { useMemo } from 'react';
import Comments from './components/Comments.tsx';

const App: React.FC = () => {
  const hotmartLink = "https://pay.hotmart.com/T103730566D?off=4bld1foi";

  // A URL do VTurb é memorizada para evitar recarregamentos do iframe
  const vturbSrc = useMemo(() => {
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const href = typeof window !== 'undefined' ? window.location.href : '';
    return `https://scripts.converteai.net/26a317e0-5a7e-41ca-8fd5-55920e62b92d/players/6960de16e9321dd80f6392a4/v4/embed.html${search || '?'}&vl=${encodeURIComponent(href)}`;
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      
      {/* HEADLINE */}
      <header className="w-full py-8 px-4 border-b-4 border-red-600 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-font text-3xl md:text-5xl font-black text-zinc-900 leading-tight">
            <span className="text-red-600">REVELADO:</span><br />
            Este es el Nuevo Truco que las Celebridades están Usando para 
            <span className="text-red-600 underline decoration-red-600 decoration-2 underline-offset-4 ml-2">Perder 10 Kilos en 2 Semanas!</span>
          </h1>
          <p className="mt-4 text-zinc-500 font-bold italic text-sm md:text-base">
            ( ¡Mira el video hasta el final antes de que sea eliminado! )
          </p>
        </div>
      </header>

      {/* VSL SECTION */}
      <section className="w-full bg-[#001f3f] py-12 px-4 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black aspect-video">
            <iframe 
              id="ifr_6960de16e9321dd80f6392a4" 
              src={vturbSrc}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              allowFullScreen 
              referrerPolicy="origin"
              title="VSL Player"
            ></iframe>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-3 text-white/90 font-bold text-sm uppercase tracking-wide">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span>HAY 539 PERSONAS VIENDO ESTE VIDEO AHORA.</span>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Oculto por padrão, ID 'v-turb-cta' para uso no painel do VTurb */}
      <section 
        id="v-turb-cta" 
        style={{ display: 'none' }} 
        className="w-full py-16 px-4 flex flex-col items-center"
      >
        <div className="w-full max-w-xl text-center space-y-8">
          <a 
            href={hotmartLink}
            id="begin_checkout"
            className="inline-block w-full py-6 px-4 bg-[#ffcc00] hover:bg-[#ffd633] text-black rounded-2xl font-black text-2xl md:text-3xl shadow-2xl shadow-yellow-500/40 transition-transform transform hover:scale-105 animate-pulse-cta uppercase"
          >
            ACCEDER A MI PROTOCOLO
          </a>
          
          <div className="space-y-4">
            <p className="text-zinc-400 text-xs font-black uppercase tracking-widest">Pago Seguro & Garantizado</p>
            <div className="flex justify-center items-center gap-6 opacity-60 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" className="h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* COMMENTS */}
      <section className="w-full py-20 px-4 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-font text-xl font-black text-center mb-10 text-zinc-800 uppercase tracking-widest">
            Comentarios Relevantes
          </h2>
          <Comments />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-zinc-950 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="font-bold text-lg">Copyright © Truco de la Gelatina 2026</p>
          
          <div className="flex justify-center flex-wrap gap-6 text-[10px] text-zinc-500 font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="opacity-20 max-w-3xl mx-auto">
            <p className="text-[9px] leading-relaxed uppercase">
              AVISO LEGAL: ESTE SITIO NO ES PARTE DEL SITIO WEB DE FACEBOOK O FACEBOOK INC. ADEMÁS, ESTE SITIO NO ESTÁ RESPALDADO POR FACEBOOK DE NINGUNA MANERA. FACEBOOK ES UNA MARCA COMERCIAL DE FACEBOOK, INC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;