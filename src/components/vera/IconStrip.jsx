import { motion } from 'framer-motion';
import { Eye, Star, Shield } from 'lucide-react';

const items = [
  {
    icon: <Eye size={32} />,
    title: 'ЯСНОВИДЕНИЕ',
    text: 'Прямой взгляд на ситуацию изнутри',
  },
  {
    icon: <Star size={32} />,
    title: 'ТАРО',
    text: 'Прямой взгляд на ситуацию',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'ГАДАНИЕ',
    text: 'Расклад на вопрос и будущее',
  },
  {
    icon: <Shield size={32} />,
    title: 'ЗАЩИТА',
    text: 'Ответ на конкретный вопрос',
  },
];

export default function IconStrip() {
  return (
    <section className="relative z-20 px-4" style={{ marginTop: '-60px' }}>
      <motion.div
        className="max-w-4xl mx-auto rounded-xl px-6 py-6 md:py-8"
        style={{ background: 'var(--bg-dark)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="flex">
              {i > 0 && (
                <div
                  className="hidden md:block w-px flex-shrink-0 mx-0"
                  style={{ background: 'rgba(232,102,23,0.2)' }}
                />
              )}
              <div className="flex flex-col items-center text-center px-4 md:px-6 py-4 flex-1">
                <div className="mb-3" style={{ color: 'var(--accent)' }}>
                  {item.icon}
                </div>
                <p
                  className="font-montserrat font-semibold text-xs uppercase mb-2"
                  style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}
                >
                  {item.title}
                </p>
                <p
                  className="font-lato text-xs leading-relaxed"
                  style={{ color: 'var(--text-beige)', fontWeight: 300 }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
