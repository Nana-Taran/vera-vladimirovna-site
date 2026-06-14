import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const scamSigns = [
  '"100% результат" — гарантирован',
  'Точные сроки без диагностики',
  'Запугивание порчей и сглазом',
  'Большая оплата до начала работы',
];

const veraWay = [
  'Сначала смотрит ситуацию',
  'Честные границы возможного',
  'Без давления и запугивания',
  'Полная конфиденциальность',
];

export default function HowNotToMistake() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        <motion.div
          className="py-16 md:py-24 px-8 md:px-14 lg:px-20"
          style={{ background: 'var(--bg-dark)' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-montserrat font-semibold text-xs uppercase mb-6"
            style={{ color: 'var(--accent)', letterSpacing: '0.18em' }}
          >
            ПРИЗНАКИ МОШЕННИКА
          </p>
          <ul className="space-y-4">
            {scamSigns.map((sign, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(220,50,50,0.2)', border: '1px solid rgba(220,50,50,0.4)' }}
                >
                  <X size={10} style={{ color: '#e05555' }} />
                </div>
                <span
                  className="font-lato text-sm leading-relaxed"
                  style={{ color: 'var(--text-beige)', fontWeight: 400 }}
                >
                  {sign}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="py-16 md:py-24 px-8 md:px-14 lg:px-20"
          style={{ background: 'var(--text-white)' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p
            className="font-montserrat font-semibold text-xs uppercase mb-6"
            style={{ color: 'var(--accent-glow)', letterSpacing: '0.18em' }}
          >
            КАК РАБОТАЕТ ВЕРА
          </p>
          <ul className="space-y-4">
            {veraWay.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(169,67,14,0.15)', border: '1px solid rgba(169,67,14,0.4)' }}
                >
                  <Check size={10} style={{ color: 'var(--accent-glow)' }} />
                </div>
                <span
                  className="font-lato text-sm leading-relaxed"
                  style={{ color: '#1A0E07', fontWeight: 400 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
