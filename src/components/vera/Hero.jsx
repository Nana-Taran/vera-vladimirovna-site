import { motion } from 'framer-motion';

const HERO_IMAGE = '/images/hero/vera-hero-banner.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Left gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(9,6,4,0.85) 0%, rgba(9,6,4,0.6) 40%, rgba(9,6,4,0.2) 70%, transparent 100%)',
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(9,6,4,1) 0%, rgba(9,6,4,0.3) 15%, transparent 40%)',
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 75% 40%, rgba(185,74,15,0.15) 0%, transparent 55%)',
        }}
      />

      {/* Decorative swirl top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '5%',
          right: '2%',
          width: '300px',
          height: '300px',
          zIndex: 2,
          opacity: 0.25,
        }}
      >
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M280 20 C260 60, 200 40, 180 80 C160 120, 220 140, 200 180 C180 220, 120 200, 100 240"
            stroke="#E86617"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M260 10 C240 50, 180 30, 160 70 C140 110, 200 130, 180 170 C160 210, 100 190, 80 230"
            stroke="#E86617"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Decorative swirl bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          left: '0%',
          width: '200px',
          height: '200px',
          zIndex: 2,
          opacity: 0.15,
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 180 C40 140, 100 160, 120 120 C140 80, 80 60, 100 20"
            stroke="#E86617"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Content — внизу страницы */}
      <div
        className="relative z-10 flex flex-col justify-end px-6 sm:px-10 lg:px-20"
        style={{ minHeight: '100vh', paddingBottom: '80px' }}
      >
        <div className="max-w-lg">
          <motion.p
            className="font-montserrat text-xs uppercase mb-3"
            style={{ color: 'var(--text-beige)', letterSpacing: '0.2em', fontSize: '11px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ★ Ясновидящая · Таролог · Экстрасенс
          </motion.p>

          <motion.h1
            className="font-bebas leading-none mb-1"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            35 ЛЕТ ПРАКТИКИ.
          </motion.h1>

          <motion.p
            className="font-lobster mb-3"
            style={{ color: 'var(--accent)', fontSize: 'clamp(20px, 3.5vw, 34px)', lineHeight: 1.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ответы, которые меняют судьбу.
          </motion.p>

          <motion.p
            className="font-lato mb-5 leading-relaxed"
            style={{ color: 'var(--text-beige)', fontSize: '13px', fontWeight: 300, maxWidth: '420px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Когда нужен не совет — а настоящий взгляд на ситуацию.
            Ясновидение, подкреплённое молитвами у Стены Плача в Иерусалиме.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="#contacts"
              className="font-montserrat font-bold px-5 py-2.5 rounded text-xs transition-all hover:opacity-90"
              style={{
                background: 'var(--accent)',
                color: 'var(--bg-deep)',
                letterSpacing: '0.08em',
              }}
            >
              Написать →
            </a>
            <a
              href="#contacts"
              className="font-montserrat font-semibold px-5 py-2.5 rounded text-xs transition-all hover:opacity-80"
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
            className="font-montserrat"
            style={{ color: 'var(--text-beige)', letterSpacing: '0.2em', fontSize: '10px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            ★ 500+ КЛИЕНТОВ &nbsp;·&nbsp; 35 ЛЕТ ПРАКТИКИ &nbsp;·&nbsp; 12 СТРАН
          </motion.div>
        </div>
      </div>
    </section>
  );
}
