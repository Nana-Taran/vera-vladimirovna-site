import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const reasons = [
  'Не понимаешь что происходит и куда двигаться дальше',
  'Чувствуешь негативное влияние или повторяющиеся неудачи',
  'Стоишь перед важным решением и боишься ошибиться',
  'Хочешь знать что ждёт в отношениях, работе или здоровье',
  'Пережил потерю и не можешь найти опору',
  'Нужна защита или очищение от чужого влияния',
];

const includes = [
  'Ясновидение',
  'Таро расклад',
  'Гадание',
  'Снятие негатива',
  'Любовная магия',
  'Онлайн консультация',
  'Работа у Стены Плача',
];

export default function WhenToReach() {
  return (
    <section
      className="relative overflow-hidden px-4"
      style={{
        background: 'var(--text-white)',
        marginTop: '-150px',
        paddingTop: 'calc(5rem + 150px)',
        paddingBottom: '9rem',
      }}
    >
      {/* Single background glow — bottom-right spotlight, stronger */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 88% 80% at 100% 100%,
            rgba(200,80,10,0.82) 0%,
            rgba(220,95,15,0.58) 16%,
            rgba(232,102,23,0.32) 34%,
            rgba(232,102,23,0.12) 54%,
            transparent 70%)`,
          zIndex: 0,
        }}
      />

      {/* Vertical swirls — right edge, top to bottom */}
      <svg
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: '8%',
          right: '0%',
          width: '38%',
          height: '85%',
          zIndex: 0,
        }}
        viewBox="0 0 380 520" preserveAspectRatio="xMaxYMid meet" fill="none"
      >
        <path
          d="M340 20 C390 100 310 190 270 290 C230 390 285 460 310 510"
          stroke="#E86617"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M360 15 C410 95 330 185 290 285 C250 385 305 455 330 505"
          stroke="#F0781B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M320 25 C370 105 290 195 250 295 C210 395 265 465 290 515"
          stroke="#A9430E"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />
      </svg>

      {/* Horizontal swirls — behind the card, right half */}
      <svg
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: '18%',
          right: '2%',
          width: '52%',
          height: '70%',
          zIndex: 0,
        }}
        viewBox="0 0 520 380" preserveAspectRatio="xMaxYMid meet" fill="none"
      >
        <path
          d="M0 80 C80 40 160 120 260 80 C360 40 440 120 520 80"
          stroke="#E86617"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.42"
        />
        <path
          d="M0 115 C80 75 160 155 260 115 C360 75 440 155 520 115"
          stroke="#F0781B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.28"
        />
        <path
          d="M0 148 C80 108 160 188 260 148 C360 108 440 188 520 148"
          stroke="#A9430E"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.18"
        />
        <path
          d="M30 200 C110 160 190 240 290 200 C390 160 470 240 520 205"
          stroke="#E86617"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.22"
        />
        <path
          d="M0 270 C100 230 200 310 300 270 C400 230 480 300 520 270"
          stroke="#F0781B"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.16"
        />
      </svg>
      <div
        className="absolute font-lobster pointer-events-none select-none"
        style={{
          top: '50%',
          left: '-5%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          fontSize: '200px',
          color: 'var(--accent-glow)',
          opacity: 0.04,
          lineHeight: 1,
        }}
      >
        Вера
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-4"
              style={{ color: 'var(--accent-glow)', letterSpacing: '0.2em' }}
            >
              ★ ПРИЧИНЫ БЫВАЮТ РАЗНЫМИ
            </p>
            <h2
              className="font-bebas leading-none mb-8"
              style={{ color: '#090604', fontSize: 'clamp(42px, 6vw, 62px)' }}
            >
              ВАЖНО ПРОСТО
              <br />
              НАЧАТЬ.
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span
                    className="font-lato font-bold text-lg flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--accent)' }}
                  >
                    ✓
                  </span>
                  <span
                    className="font-lato text-base leading-relaxed"
                    style={{ color: '#1A0E07', fontWeight: 400 }}
                  >
                    {reason}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-xl p-8 md:p-10"
            style={{ background: 'var(--bg-dark)' }}
            initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-6"
              style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
            >
              ВКЛЮЧАЕТ
            </p>
            <ul className="space-y-4 mb-8">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ArrowRight size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span
                    className="font-lato text-base"
                    style={{ color: 'var(--text-white)', fontWeight: 400 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm px-6 py-3 rounded transition-all hover:opacity-90"
              style={{ background: 'var(--accent)', color: 'var(--bg-deep)' }}
            >
              Написать сейчас →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
