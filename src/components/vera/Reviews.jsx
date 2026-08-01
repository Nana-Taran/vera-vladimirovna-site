import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const reviews = [
  {
    id: 'anna',
    name: 'Анна',
    location: 'Германия, Дюссельдорф',
    images: ['/images/otzivi/anna-germany-1.webp', '/images/otzivi/anna-germany-2.webp'],
  },
  {
    id: 'vera',
    name: 'Вера',
    location: 'Италия, Рим',
    images: ['/images/otzivi/vera-italy.webp'],
  },
  {
    id: 'maria',
    name: 'Мария',
    location: 'Россия, Краснодар',
    images: ['/images/otzivi/maria-russia.webp'],
  },
  {
    id: 'sergey',
    name: 'Сергей',
    location: 'Россия, Краснодар',
    images: ['/images/otzivi/sergey-russia.webp'],
  },
  // Следующие 2 отзыва добавить позже:
  { id: 'soon1', name: '', location: '', images: [] },
  { id: 'soon2', name: '', location: '', images: [] },
];

const VISIBLE = 5; // телефонов в ряд на десктопе

export default function Reviews() {
  const [start, setStart] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const total = reviews.length;

  const prev = () => setStart((s) => (s - 1 + total) % total);
  const next = () => setStart((s) => (s + 1) % total);

  const visibleItems = Array.from({ length: VISIBLE }, (_, i) => reviews[(start + i) % total]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-20 md:py-28 px-4"
      style={{ background: 'var(--text-white)' }}
    >
      {/* Лёгкое оранжевое свечение справа — как в About */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', right: '5%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(232,102,23,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-montserrat font-semibold text-xs uppercase mb-4"
            style={{ color: 'var(--accent-glow)', letterSpacing: '0.2em' }}
          >
            ★ ЧТО ГОВОРЯТ КЛИЕНТЫ
          </p>
          <h2
            className="font-bebas leading-none mb-1"
            style={{ color: 'var(--bg-deep)', fontSize: 'clamp(38px, 6vw, 58px)' }}
          >
            РЕАЛЬНЫЕ КЛИЕНТЫ.
          </h2>
          <p
            className="font-lobster"
            style={{ color: 'var(--accent)', fontSize: 'clamp(24px, 4vw, 40px)' }}
          >
            реальные результаты.
          </p>
        </motion.div>

        {/* Desktop: 5 телефонов в ряд */}
        <div className="hidden md:grid grid-cols-5 gap-3">
          {visibleItems.map((review, pos) => (
            <PhoneMockup key={review.id + pos} review={review} isCenter={pos === 1 || pos === 2} onZoom={setLightbox} />
          ))}
        </div>

        {/* Mobile: 2 телефона рядом */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {[reviews[start % total], reviews[(start + 1) % total]].map((review, i) => (
            <PhoneMockup key={review.id + i} review={review} isCenter={true} onZoom={setLightbox} />
          ))}
        </div>

        {/* Навигация */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-80"
            style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
            aria-label="Назад"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setStart(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background: i >= start && i < start + VISIBLE
                    ? 'var(--accent)'
                    : 'rgba(232,102,23,0.3)',
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-80"
            style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
            aria-label="Вперёд"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(0,0,0,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px',
            }}
          >
            <motion.img
              src={lightbox}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxHeight: '90vh',
                maxWidth: '90vw',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
              }}
              alt="Отзыв"
            />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'fixed', top: '20px', right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: '40px', height: '40px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PhoneMockup({ review, isCenter, onZoom }) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = review.images.length > 1;
  const isEmpty = review.images.length === 0;

  return (
    <motion.div
      className="flex flex-col items-center w-full"
      style={{
        opacity: isCenter ? 1 : 0.7,
        transform: isCenter ? 'scale(1)' : 'scale(0.96)',
        transition: 'all 0.3s',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: isCenter ? 1 : 0.7, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Корпус телефона */}
      <div style={{
        width: 'min(180px, 100%)',
        background: '#1c1c1e',
        borderRadius: '32px',
        padding: '8px',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 16px 40px rgba(0,0,0,0.55)',
        position: 'relative',
      }}>
        {/* Кнопки слева */}
        {[60, 92, 130].map((top, i) => (
          <div key={i} style={{
            position: 'absolute', left: '-2.5px', top,
            width: '2.5px', height: i === 0 ? 22 : 34,
            background: '#3a3a3c', borderRadius: '2px 0 0 2px',
          }} />
        ))}
        {/* Кнопка справа */}
        <div style={{
          position: 'absolute', right: '-2.5px', top: 90,
          width: '2.5px', height: 50,
          background: '#3a3a3c', borderRadius: '0 2px 2px 0',
        }} />

        {/* Экран */}
        <div style={{
          background: '#000',
          borderRadius: '26px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Dynamic Island */}
          <div style={{
            position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)',
            width: '60px', height: '18px',
            background: '#1c1c1e', borderRadius: '10px', zIndex: 10,
          }} />

          {/* Контент экрана */}
          {isEmpty ? (
            <div style={{
              height: '360px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: '#111',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px', opacity: 0.3 }}>💬</div>
              <div style={{
                color: 'rgba(255,255,255,0.2)',
                fontSize: '11px', fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.1em', textAlign: 'center',
              }}>
                СКОРО
              </div>
            </div>
          ) : (
            <img
              src={review.images[imgIndex]}
              alt={`Отзыв — ${review.name}`}
              onClick={() => !isEmpty && onZoom && onZoom(review.images[imgIndex])}
              style={{
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
                cursor: 'zoom-in',
              }}
            />
          )}

          {/* Точки для Анны */}
          {hasMultiple && (
            <div style={{
              position: 'absolute', bottom: '22px',
              left: 0, right: 0,
              display: 'flex', justifyContent: 'center', gap: '5px',
            }}>
              {review.images.map((_, i) => (
                <button key={i} onClick={() => setImgIndex(i)} style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: i === imgIndex ? 'var(--accent)' : 'rgba(255,255,255,0.35)',
                  border: 'none', cursor: 'pointer', padding: 0,
                }} />
              ))}
            </div>
          )}

          {/* Home bar */}
          <div style={{
            height: '22px', background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '70px', height: '3px',
              background: 'rgba(255,255,255,0.2)', borderRadius: '2px',
            }} />
          </div>
        </div>
      </div>

      {/* Подпись */}
      {!isEmpty && (
        <div className="mt-3 text-center">
          <div className="font-montserrat font-semibold text-xs" style={{ color: 'var(--text-white)' }}>
            {review.name}
          </div>
          <div className="font-lato text-xs mt-0.5" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
            {review.location}
          </div>
        </div>
      )}
    </motion.div>
  );
}
