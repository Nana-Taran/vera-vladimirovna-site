import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const reasons = [
  'Чувствуешь, что жизнь остановилась, и не понимаешь почему',
  'Стоишь перед важным решением и боишься ошибиться',
  'В отношениях что-то надломилось — и не знаешь, восстановить или отпустить',
  'Преследуют повторяющиеся неудачи или странные совпадения',
  'Хочешь знать, что ждёт — в работе, семье, здоровье',
  'Нужна ясность и поддержка от человека, которому можно доверять',
];

const includes = [
  'Ясновидение',
  'Расклады Таро',
  'Гадание на вопрос',
  'Снятие негативных влияний',
  'Вопросы любви и отношений',
  'Онлайн-консультация',
  'Молитвенная работа в Иерусалиме',
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
      {/* Glow layer 1 — wide warm field, right half bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 130% 90% at 88% 100%,
            rgba(195,72,8,0.75) 0%,
            rgba(215,88,12,0.52) 20%,
            rgba(230,100,20,0.28) 42%,
            rgba(232,102,23,0.10) 62%,
            transparent 78%)`,
          zIndex: 0,
        }}
      />
      {/* Glow layer 2 — additional warmth spreading up */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 95% 80% at 78% 85%,
            rgba(210,85,10,0.48) 0%,
            rgba(225,100,18,0.28) 30%,
            rgba(232,102,23,0.10) 58%,
            transparent 75%)`,
          zIndex: 0,
        }}
      />

      {/* Swirls — large diagonal calligraphic strokes like reference */}
      <svg
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: '5%',
          right: '-2%',
          width: '45%',
          height: '92%',
          zIndex: 0,
        }}
        viewBox="0 0 420 560" preserveAspectRatio="xMaxYMid meet" fill="none"
      >
        {/* Main thick stroke */}
        <path
          d="M380 10 C430 80 370 160 330 250 C290 340 330 420 360 530"
          stroke="#C8520A"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.48"
        />
        {/* Second stroke, offset */}
        <path
          d="M400 5 C450 75 390 155 350 245 C310 335 350 415 380 525"
          stroke="#D4620C"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.32"
        />
        {/* Third stroke, lighter */}
        <path
          d="M360 15 C410 85 350 165 310 255 C270 345 310 425 340 535"
          stroke="#A9430E"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.20"
        />
        {/* Thin accent */}
        <path
          d="M415 20 C465 90 405 170 365 260 C325 350 365 430 395 540"
          stroke="#E86617"
          strokeWidth="1.2"
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
              РАБОТАЮ С:
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
