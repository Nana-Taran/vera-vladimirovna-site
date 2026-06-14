import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Phone, MessageSquare, X } from 'lucide-react';

const messengers = [
  { label: 'Telegram', icon: <Send size={18} />, href: '#', color: '#229ED9' },
  { label: 'WhatsApp', icon: <Phone size={18} />, href: '#', color: '#25D366' },
  { label: 'Viber', icon: <MessageSquare size={18} />, href: '#', color: '#7360F2' },
];

export default function FAB() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <>
            {messengers.map((m, i) => (
              <motion.a
                key={m.label}
                href={m.href}
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.7 }}
                transition={{ duration: 0.25, delay: (messengers.length - 1 - i) * 0.07 }}
                className="flex items-center gap-3 px-4 py-2.5 rounded-full font-montserrat font-semibold text-sm shadow-lg"
                style={{
                  background: m.color,
                  color: '#fff',
                  boxShadow: `0 4px 20px ${m.color}55`,
                  whiteSpace: 'nowrap',
                }}
              >
                {m.icon}
                {m.label}
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all"
        style={{
          background: 'var(--accent)',
          color: 'white',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Связаться"
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(232,102,23,0.45)' }}
          />
        )}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
