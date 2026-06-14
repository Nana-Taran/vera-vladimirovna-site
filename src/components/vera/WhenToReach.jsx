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
      className="relative overflow-hidden py-20 md:py-28 lg:py-36 px-4"
      style={{ background: 'var(--text-white)' }}
    >
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
