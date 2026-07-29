import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const certs = [
  { src: '/images/certificates/vera-vladimirovna-dyplom-1.jpg', alt: 'Сертификат 1' },
  { src: '/images/certificates/vera-vladimirovna-dyplom-2.jpg', alt: 'Сертификат 2' },
  { src: '/images/certificates/vera-vladimirovna-dyplom-3.jpg', alt: 'Сертификат 3' },
  { src: '/images/certificates/vera-vladimirovna-dyplom-4.jpg', alt: 'Сертификат 4' },
];

export default function Certificates() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className="relative py-20 md:py-28 px-4"
        style={{ background: 'var(--bg-dark)' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-4"
              style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
            >
              ★ ПОДТВЕРЖДЕНИЯ
            </p>
            <h2
              className="font-bebas leading-none"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '0.05em' }}
            >
              ДОКУМЕНТЫ И СЕРТИФИКАТЫ
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                className="rounded-xl overflow-hidden cursor-zoom-in"
                style={{
                  border: '1px solid rgba(232,102,23,0.2)',
                  background: 'var(--bg-dark)',
                }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  borderColor: 'rgba(232,102,23,0.55)',
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                onClick={() => setLightbox(cert.src)}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-auto block"
                  style={{ display: 'block' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Лайтбокс */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lb-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(9,6,4,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(6px)',
              cursor: 'zoom-out',
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(232,102,23,0.3)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-beige)',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
            <motion.img
              key="lb-img"
              src={lightbox}
              alt="Сертификат"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '12px',
                boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
                border: '1px solid rgba(232,102,23,0.25)',
                cursor: 'default',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
