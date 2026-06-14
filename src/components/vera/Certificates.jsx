import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certs = [
  'Свидетельство о профессиональной деятельности',
  'Сертификат международной ассоциации',
  'Подтверждение работы у Стены Плача',
  'Документы об образовании',
];

export default function Certificates() {
  return (
    <section
      className="relative py-20 md:py-28 px-4"
      style={{ background: 'var(--bg-deep)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-bebas leading-none"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '0.05em' }}
          >
            ДОКУМЕНТЫ И ПОДТВЕРЖДЕНИЯ
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="aspect-[3/4] rounded-xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
              style={{
                background: 'var(--bg-dark)',
                border: '1px solid rgba(232,102,23,0.2)',
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(232,102,23,0.6)' }}
            >
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l" style={{ borderColor: 'rgba(232,102,23,0.4)' }} />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r" style={{ borderColor: 'rgba(232,102,23,0.4)' }} />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l" style={{ borderColor: 'rgba(232,102,23,0.4)' }} />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r" style={{ borderColor: 'rgba(232,102,23,0.4)' }} />
              <Award size={36} className="mb-4" style={{ color: 'rgba(232,102,23,0.5)' }} />
              <p
                className="font-montserrat text-xs leading-relaxed"
                style={{ color: 'var(--text-beige)', fontWeight: 400 }}
              >
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
