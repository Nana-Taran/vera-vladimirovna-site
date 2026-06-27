import { motion } from 'framer-motion';
import { Send, Phone, MessageSquare } from 'lucide-react';

const messengers = [
  {
    label: 'Telegram',
    icon: <Send size={20} />,
    href: 'https://t.me/Vera_vladimerovna',
    color: '#229ED9',
  },
  {
    label: 'WhatsApp',
    icon: <Phone size={20} />,
    href: 'https://wa.me/995558314030',
    color: '#25D366',
  },
  {
    label: 'Viber',
    icon: <MessageSquare size={20} />,
    href: 'viber://chat?number=%2B995558314030',
    color: '#7360F2',
  },
];

export default function FinalCTA() {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden py-24 md:py-36 px-4"
      style={{ background: 'var(--bg-deep)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(169,67,14,0.45) 0%, rgba(58,27,10,0.2) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
        style={{ background: 'var(--accent)' }}
      />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-bebas leading-none mb-3"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(44px, 8vw, 72px)' }}
          >
            ГОТОВЫ ПОЛУЧИТЬ ЯСНОСТЬ?
          </h2>
          <p
            className="font-lobster mb-12"
            style={{ color: 'var(--accent)', fontSize: 'clamp(28px, 5vw, 52px)', lineHeight: 1.2 }}
          >
            Напишите прямо сейчас.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {messengers.map((m, i) => (
            <motion.a
              key={i}
              href={m.href}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-montserrat font-semibold text-sm transition-all duration-300"
              style={{
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                minWidth: '180px',
                letterSpacing: '0.1em',
              }}
              whileHover={{
                backgroundColor: 'var(--accent)',
                color: 'var(--bg-deep)',
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
            >
              <span>{m.icon}</span>
              {m.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="font-montserrat text-xs"
          style={{ color: 'var(--text-beige)', letterSpacing: '0.2em' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          ОНЛАЙН · КОНФИДЕНЦИАЛЬНО · ИЗ ЛЮБОЙ СТРАНЫ
        </motion.p>
      </div>
    </section>
  );
}
