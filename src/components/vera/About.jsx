import { motion } from 'framer-motion';

const stats = [
  { num: '35+', label: 'лет практики' },
  { num: '500+', label: 'клиентов' },
  { num: '12+', label: 'стран' },
];

const points = [
  'Работает у Стены Плача в Иерусалиме',
  'Тысячи клиентов из разных стран',
  'Без запугивания и пустых обещаний',
  'Полная конфиденциальность',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28 lg:py-36 px-4"
      style={{ background: 'var(--text-white)' }}
    >
      <div
        className="absolute font-lobster pointer-events-none select-none"
        style={{
          top: '50%',
          right: '-5%',
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
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-montserrat font-semibold text-xs uppercase mb-4"
            style={{ color: 'var(--accent-glow)', letterSpacing: '0.2em' }}
          >
            ★ ПОЧЕМУ ИМЕННО ВЕРА ВАСИЛЬЕВНА
          </p>
          <h2
            className="font-bebas leading-none mb-2"
            style={{ color: '#090604', fontSize: 'clamp(36px, 5.5vw, 58px)' }}
          >
            35 ЛЕТ — ЭТО НЕ ПРОСТО ОПЫТ.
          </h2>
          <p
            className="font-lobster"
            style={{ color: 'var(--accent)', fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            это другой уровень видения.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-14 max-w-2xl">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div
                className="font-bebas leading-none"
                style={{ color: 'var(--accent)', fontSize: 'clamp(48px, 8vw, 72px)' }}
              >
                {s.num}
              </div>
              <div
                className="font-lato text-sm"
                style={{ color: '#1A0E07', fontWeight: 300 }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.ul
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {points.map((p, i) => (
            <li key={i} className="flex items-center gap-3">
              <span style={{ color: 'var(--accent)', fontSize: '18px' }}>✦</span>
              <span className="font-lato text-base" style={{ color: '#1A0E07', fontWeight: 400 }}>
                {p}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
