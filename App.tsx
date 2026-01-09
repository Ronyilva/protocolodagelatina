import React, { useEffect, useRef } from 'react';
import Comments from './components/Comments.tsx';

const App: React.FC = () => {
  const hotmartLink = "https://pay.hotmart.com/T103730566D?off=4bld1foi";
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Garante que o src seja definido apenas uma vez após a montagem do componente
    if (iframeRef.current && iframeRef.current.src === 'about:blank') {
      const search = window.location.search || '?';
      const href = window.location.href;
      const vturbUrl = `https://scripts.converteai.net/26a317e0-5a7e-41ca-8fd5-55920e62b92d/players/6960de16e9321dd80f6392a4/v4/embed.html${search}&vl=${encodeURIComponent(href)}`;
      
      iframeRef.current.src = vturbUrl;
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white overflow-x-hidden">
      
      {/* 1. HEADLINE SECTION - Mobile Responsive Focus */}
      <header className="w-full py-5 md:py-10 px-4 border-b-4 border-red-600 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-font text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-zinc-900 leading-[1.1] md:leading-tight">
            <span className="text-red-600">REVELADO:</span><br />
            Este es el Nuevo Truco que las Celebridades están Usando para 
            <span className="text-red-600 underline decoration-red-600 decoration-2 underline-offset-4 ml-1 md:ml-2">Perder 10 Kilos en 2 Semanas!</span>
          </h1>
          <p className="mt-3 md:mt-5 text-zinc-500 font-bold italic text-[10px] sm:text-xs md:text-base">
            ( ¡Mira el video hasta el final antes de que sea eliminado! )
          </p>
        </div>
      </header>

      {/* 2. VIDEO SECTION */}
      <section className="w-full bg-[#001f3f] py-8 md:py-16 px-4 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <div id="ifr_6960de16e9321dd80f6392a4_wrapper" style={{ margin: '0 auto', width: '100%' }}>
            <div style={{ position: 'relative', padding: '56.25% 0 0 0' }} id="ifr_6960de16e9321dd80f6392a4_aspect">
              <iframe 
                ref={iframeRef}
                frameBorder="0" 
                allowFullScreen 
                src="about:blank" 
                id="ifr_6960de16e9321dd80f6392a4" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                referrerPolicy="origin"
                title="VSL Video Player"
              ></iframe>
            </div>
          </div>
          
          {/* Social Notification */}
          <div className="mt-6 flex items-center justify-center gap-2 md:gap-3 text-white/90 font-bold text-[10px] md:text-sm uppercase tracking-wide">
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500"></span>
            </span>
            <span>HAY 539 PERSONAS VIENDO ESTE VIDEO AHORA.</span>
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION - Agora visível por padrão e centralizado no computador */}
      <section 
        id="begin_checkout" 
        className="w-full py-12 md:py-20 px-4 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-lg text-center space-y-8 flex flex-col items-center">
          <a 
            href={hotmartLink}
            className="inline-block w-full py-5 md:py-7 px-4 bg-[#ffcc00] hover:bg-[#ffd633] text-black rounded-2xl font-black text-xl md:text-3xl shadow-2xl shadow-yellow-500/40 transition-transform transform hover:scale-105 animate-pulse-cta uppercase"
          >
            ACCEDER A MI PROTOCOLO
          </a>
          
          <div className="space-y-4 w-full">
            <p className="text-zinc-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest">Pago Seguro & Garantizado</p>
            <div className="flex justify-center items-center gap-4 md:gap-8 opacity-60 grayscale scale-90 md:scale-100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-3 md:h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-3 md:h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" className="h-3 md:h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMENTS */}
      <section className="w-full py-16 md:py-24 px-4 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-font text-lg md:text-xl font-black text-center mb-8 md:mb-12 text-zinc-800 uppercase tracking-widest">
            Comentarios Relevantes
          </h2>
          <Comments />
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="w-full bg-zinc-950 text-white py-12 md:py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="font-bold text-base md:text-lg">Copyright © Truco de la Gelatina 2026</p>
          
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 text-[9px] md:text-[10px] text-zinc-500 font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="opacity-20 max-w-3xl mx-auto">
            <p className="text-[8px] md:text-[9px] leading-relaxed uppercase px-4">
              AVISO LEGAL: ESTE SITIO NO ES PARTE DEL SITIO WEB DE FACEBOOK O FACEBOOK INC. ADEMÁS, ESTE SITIO NO ESTÁ RESPALDADO POR FACEBOOK DE NINGUNA MANERA. FACEBOOK ES UNA MARCA COMERCIAL DE FACEBOOK, INC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;