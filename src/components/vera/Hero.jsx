import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 640 : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh' }}
    >
      <style>{`
        .hero-h1 { }
        @media (max-width: 640px) {
          .hero-h1 {
            font-size: clamp(26px, 7vw, 38.5px) !important;
            letter-spacing: 0.05em !important;
            line-height: 1.05 !important;
            margin-bottom: 4px !important;
          }
          .hero-subtitle {
            font-size: clamp(15px, 4.5vw, 25px) !important;
            line-height: 1.35 !important;
            letter-spacing: 0.06em !important;
            margin-bottom: 12px !important;
          }
          .hero-body {
            font-size: clamp(12px, 3.2vw, 13px) !important;
            line-height: 1.85 !important;
            letter-spacing: 0.04em !important;
            max-width: none !important;
            margin-bottom: 16px !important;
          }
          .hero-buttons { gap: 12px !important; margin-bottom: 16px !important; }
          .hero-buttons a { padding: 10px 20px !important; letter-spacing: 0.1em !important; }
          .hero-stats { letter-spacing: 0.18em !important; font-size: 10px !important; }
        }
      `}</style>

      {/* Background — desktop via CSS class, mobile via JS inline style */}
      <div
        className="absolute inset-0 hero-bg"
        style={isMobile ? {
          backgroundImage: "url('/images/hero/vera-hero-banner-mobile.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#090604',
        } : undefined}
      />

      {/* Gradient — Desktop (index.css controls visibility) */}
      <div
        id="hero-gradient-desktop"
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(9,6,4,1) 0%, rgba(9,6,4,0.3) 15%, transparent 40%)',
        }}
      />

      {/* Gradient — Mobile (index.css controls visibility) */}
      <div
        id="hero-gradient-mobile"
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(9,6,4,1) 0%, rgba(9,6,4,0.9) 20%, rgba(9,6,4,0.5) 38%, transparent 55%)',
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 75% 40%, rgba(185,74,15,0.15) 0%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-start sm:justify-end px-5 sm:px-10 lg:px-20 pt-[110vw] sm:pt-0 pb-4 sm:pb-0"
        style={{ height: '100svh' }}
      >
        <div className="w-full sm:max-w-lg">
          <motion.h1
            className="font-bebas leading-none mb-0 hero-h1"
            style={{
              color: 'var(--text-white)',
              fontSize: 'clamp(22px, 5.5vw, 38.5px)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Ясновидящая Вера Владимировна — 35 лет практики.
          </motion.h1>

          <motion.p
            className="font-lobster mb-1 hero-subtitle"
            style={{
              color: 'var(--accent)',
              fontSize: 'clamp(14px, 3.8vw, 25px)',
              lineHeight: 1.2,
              letterSpacing: '0.04em',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ответы, которые возвращают ясность.
          </motion.p>

          <motion.p
            className="font-lato mb-2 leading-relaxed hero-body"
            style={{
              color: 'var(--text-beige)',
              fontSize: 'clamp(11px, 2.8vw, 12px)',
              fontWeight: 300,
              maxWidth: '400px',
              letterSpacing: '0.025em',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Когда не понимаешь что происходит и не знаешь куда двигаться —
            важен не совет, а настоящий взгляд на ситуацию.
            Ясновидение, подкреплённое глубокой духовной практикой.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mb-2 hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="#contacts"
              className="font-montserrat font-bold px-4 py-2 rounded text-xs transition-all hover:opacity-90"
              style={{
                background: 'var(--accent)',
                color: 'var(--bg-deep)',
                letterSpacing: '0.08em',
              }}
            >
              Написать в Telegram →
            </a>
            <a
              href="#contacts"
              className="font-montserrat font-semibold px-4 py-2 rounded text-xs transition-all hover:opacity-80"
              style={{
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                letterSpacing: '0.08em',
              }}
            >
              Оставить заявку
            </a>
          </motion.div>

          <motion.div
            className="font-montserrat hero-stats"
            style={{
              color: 'var(--text-beige)',
              letterSpacing: '0.15em',
              fontSize: '9px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            ★ 500+ КЛИЕНТОВ &nbsp;·&nbsp; 35 ЛЕТ ПРАКТИКИ &nbsp;·&nbsp; 12 СТРАН
          </motion.div>

          <motion.p
            className="font-lato"
            style={{
              color: 'var(--text-beige)',
              fontSize: '9px',
              fontWeight: 300,
              letterSpacing: '0.04em',
              marginTop: '6px',
              opacity: 0.7,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Первичный разбор ситуации — бесплатно. Стоимость обсуждается индивидуально после диагностики.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
