
import React, { useState, useEffect, useMemo } from 'react';
import Comments from './components/Comments';

const App: React.FC = () => {
  const [showCta, setShowCta] = useState(false);
  const hotmartLink = "https://pay.hotmart.com/T103730566D?off=4bld1foi";

  // Configuração de delay para o botão (simulando timing de VSL)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCta(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  // useMemo garante que a URL só mude se a localização mudar, evitando que o iframe pisque no re-render
  const vturbSrc = useMemo(() => {
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const href = typeof window !== 'undefined' ? window.location.href : '';
    return `https://scripts.converteai.net/26a317e0-5a7e-41ca-8fd5-55920e62b92d/players/6960de16e9321dd80f6392a4/v4/embed.html${search || '?'}&vl=${encodeURIComponent(href)}`;
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col items-center overflow-x-hidden">
      
      {/* 1. TOPO DA PÁGINA (CABEÇALHO) */}
      <header className="w-full bg-white border-b-4 border-red-600 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-font text-3xl md:text-5xl font-black leading-tight">
            <span className="text-red-600">REVELADO:</span><br />
            <span className="text-black">Este es el Nuevo Truco que las Celebridades y Famosas están Usando para </span>
            <span className="text-red-600 underline decoration-2 underline-offset-4">Perder 10 Kilos en Solo 2 Semanas!</span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-lg mt-6 font-medium italic">
            ( ¡No comas más de una porción al día! )
          </p>
        </div>
      </header>

      {/* 2. ÁREA DO VÍDEO (VSL) - FUNDO AZUL MARINHO */}
      <section className="w-full bg-[#001f3f] py-16 px-4 flex flex-col items-center shadow-inner">
        <div className="w-full max-w-4xl">
          {/* Container VTurb Estabilizado */}
          <div id="ifr_6960de16e9321dd80f6392a4_wrapper" className="w-full mx-auto shadow-2xl rounded-xl overflow-hidden border border-white/20 bg-black">
            <div style={{ position: 'relative', padding: '56.25% 0 0 0' }}>
              <iframe 
                id="ifr_6960de16e9321dd80f6392a4" 
                src={vturbSrc}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                frameBorder="0" 
                allowFullScreen 
                referrerPolicy="origin"
                title="VTurb Player"
              ></iframe>
            </div>
          </div>

          <div className="mt-8 text-center text-white/80 text-sm md:text-base font-bold flex items-center justify-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            539 PERSONAS ESTÁN VIENDO ESTE VIDEO AHORA.
          </div>
        </div>
      </section>

      {/* 3. BOTÃO CTA (AMARELO) */}
      <section className="w-full py-16 px-4 flex flex-col items-center bg-white">
        {showCta ? (
          <div className="w-full max-w-xl text-center">
            <a 
              href={hotmartLink}
              id="begin_checkout"
              className="inline-block w-full py-6 px-4 md:px-10 bg-[#ffcc00] hover:bg-[#ffd633] text-black rounded-2xl font-black text-2xl md:text-3xl shadow-2xl shadow-yellow-500/40 transition-all transform hover:scale-105 animate-pulse-cta uppercase tracking-tight"
            >
              ACCEDER A MI PROTOCOLO
            </a>
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Pago 100% Seguro</p>
              <div className="flex justify-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" className="h-5" />
                <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo.png" alt="Pix" className="h-5" />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-zinc-400 font-medium italic">
            Esperando el momento oportuno para liberar su acceso...
          </div>
        )}
      </section>

      {/* 5. COMENTÁRIOS ESTILO FACEBOOK */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="heading-font text-2xl font-black text-center mb-10 text-zinc-800 uppercase tracking-widest">Comentarios Relevantes</h3>
          <Comments />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-black text-white py-16 px-4 text-center border-t border-zinc-900">
        <p className="font-black text-lg mb-6 tracking-tight">Copyright © Truco de la Gelatina 2024</p>
        <div className="flex justify-center flex-wrap gap-8 text-xs text-zinc-500 font-bold uppercase tracking-widest mb-10">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <div className="max-w-4xl mx-auto opacity-30">
          <p className="text-[10px] leading-relaxed">
            AVISO LEGAL: ESTE SITIO NO ES PARTE DEL SITIO WEB DE FACEBOOK O FACEBOOK INC. ADEMÁS, ESTE SITIO NO ESTÁ RESPALDADO POR FACEBOOK DE NINGUNA MANERA. FACEBOOK ES UNA MARCA COMERCIAL DE FACEBOOK, INC. LOS RESULTADOS PUEDEN VARIAR SEGÚN EL METABOLISMO DE CADA INDIVIDUO.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;
