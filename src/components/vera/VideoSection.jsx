import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="relative py-20 md:py-28 px-4"
      style={{ background: 'var(--bg-deep)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(169,67,14,0.2) 0%, transparent 65%)',
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-bebas leading-none mb-3"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '0.05em' }}
          >
            РАБОТА У СТЕНЫ ПЛАЧА — ИЕРУСАЛИМ
          </h2>
          <p
            className="font-lato text-sm"
            style={{ color: 'var(--text-beige)', fontWeight: 300 }}
          >
            Молитвы и послания, переданные к Стене Плача.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-xl overflow-hidden cursor-pointer group"
          style={{
            border: '1px solid rgba(232,102,23,0.3)',
            aspectRatio: '16/9',
            background: 'var(--bg-dark)',
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onClick={() => setPlaying(true)}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(185,74,15,0.3) 0%, rgba(26,14,7,0.9) 70%)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
            <div
              className="font-lobster opacity-20 text-center"
              style={{ color: 'var(--accent)', fontSize: 'clamp(40px, 8vw, 80px)' }}
            >
              Иерусалим
            </div>
            <button
              className="relative flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 group-hover:scale-110"
              style={{ background: 'rgba(232,102,23,0.9)' }}
              aria-label="Смотреть видео"
            >
              <Play size={28} fill="white" style={{ color: 'white', marginLeft: '3px' }} />
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: 'rgba(232,102,23,0.4)' }}
              />
            </button>
            <p
              className="font-montserrat font-semibold text-xs uppercase mt-2"
              style={{ color: 'var(--text-beige)', letterSpacing: '0.2em' }}
            >
              Смотреть видео
            </p>
          </div>
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l" style={{ borderColor: 'rgba(232,102,23,0.5)' }} />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r" style={{ borderColor: 'rgba(232,102,23,0.5)' }} />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l" style={{ borderColor: 'rgba(232,102,23,0.5)' }} />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r" style={{ borderColor: 'rgba(232,102,23,0.5)' }} />
        </motion.div>
      </div>
    </section>
  );
}
