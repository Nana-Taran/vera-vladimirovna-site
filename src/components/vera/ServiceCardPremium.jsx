/**
 * ServiceCardPremium — компактная карточка услуги с 3D-эффектом
 * Шрифты: Cormorant Garamond + Manrope (index.css)
 */
import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// ─── Иконки eyebrow ───────────────────────────────────────────
const EyeSmall = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const StarSmall = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const MoonSmall = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const ZapSmall = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const HeartSmall = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const WifiSmall = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>
  </svg>
);

// ─── Иконки пунктов ───────────────────────────────────────────
const EyeIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const CompassIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);
const CardIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="13" y2="14"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const HeartIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const WifiIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>
  </svg>
);

// Карта иконок
const ShieldSmall = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const EYEBROW_ICONS = { eye: EyeSmall, star: StarSmall, moon: MoonSmall, zap: ZapSmall, heart: HeartSmall, wifi: WifiSmall, shield: ShieldSmall };
const POINT_ICONS   = { eye: EyeIcon, compass: CompassIcon, card: CardIcon, check: CheckIcon, shield: ShieldIcon, heart: HeartIcon, wifi: WifiIcon };

export default function ServiceCardPremium({
  imageSrc,
  imageAlt = '',
  imagePosition = '72% center',
  eyebrow,
  eyebrowIcon = 'eye',
  titleLine1,
  titleLine2,
  ribbon,
  description,
  points = [],
  pointIcons = ['eye', 'compass'],
  footer = null,
  noTopRadius = false,
  topImageSrc = null,
  showTopSlot = false,
}) {
  const EyebrowIcon = EYEBROW_ICONS[eyebrowIcon] || EyeSmall;
  const cardRef = useRef(null);
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  // 3D tilt — spring для плавности
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 180, damping: 22 };
  const rotateX = useSpring(useTransform(my, [-80, 80], [10, -10]), spring);
  const rotateY = useSpring(useTransform(mx, [-80, 80], [-10, 10]), spring);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set(e.clientX - cx);
    my.set(e.clientY - cy);
    setShine({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  // Варианты анимации для текста при появлении в viewport
  const eyebrowV = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };
  const line1V = {
    hidden: { opacity: 0, x: -22, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' } },
  };
  const line2V = {
    hidden: { opacity: 0, x: -28, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.5, delay: 0.18, ease: 'easeOut' } },
  };
  const ribbonV = {
    hidden: { opacity: 0, scaleX: 0.4, originX: 0 },
    visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4, delay: 0.28, ease: 'backOut' } },
  };
  const descV = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.36, ease: 'easeOut' } },
  };
  const pointV = (i) => ({
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.38, delay: 0.44 + i * 0.09, ease: 'easeOut' } },
  });

  return (
    <motion.article
      ref={cardRef}
      className="card-service-premium"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        background: '#120604',
        border: hovered
          ? '1px solid rgba(231,119,30,0.72)'
          : '1px solid rgba(231,119,30,0.46)',
        boxShadow: hovered
          ? '0 16px 48px rgba(0,0,0,0.55), 0 0 28px rgba(231,119,30,0.08)'
          : '0 8px 32px rgba(0,0,0,0.42)',
        isolation: 'isolate',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        perspective: '600px',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
      }}
    >
      {/* Фоновое изображение */}
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        aria-hidden="true"
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: imagePosition,
          zIndex: 0,
        }}
      />

      {/* Градиентный оверлей */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(10,3,2,0.95) 0%, rgba(18,6,4,0.88) 50%, rgba(18,6,4,0.55) 100%)',
        }}
      />

      {/* Shine / glare — следует за мышью */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,210,160,0.10) 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }}
      />

      {/* Бликовая рамка сверху (glass-эффект) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          zIndex: 3,
          background: 'linear-gradient(90deg, transparent, rgba(255,210,150,0.35), transparent)',
          opacity: hovered ? 1 : 0.3,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }}
      />

      {/* Слот для фото услуги — внутри карточки сверху */}
      {showTopSlot && (
        <div style={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          height: '160px',
          flexShrink: 0,
          borderBottom: '1px solid rgba(231,119,30,0.2)',
          overflow: 'hidden',
        }}>
          {topImageSrc ? (
            <img
              src={topImageSrc}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '6px',
              background: 'rgba(255,255,255,0.03)',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1.5px solid rgba(231,119,30,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(231,119,30,0.35)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <span style={{
                fontFamily: '"Manrope", sans-serif', fontSize: '8px',
                fontWeight: 600, letterSpacing: '0.12em',
                color: 'rgba(231,119,30,0.3)', textTransform: 'uppercase',
              }}>фото услуги</span>
            </div>
          )}
        </div>
      )}

      {/* Контент */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          gap: '6px',
          transform: hovered ? 'translateZ(12px)' : 'translateZ(0px)',
          transition: 'transform 0.35s ease',
        }}
      >
        {/* Eyebrow */}
        {eyebrow && (
          <motion.div
            variants={eyebrowV}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontFamily: '"Manrope", sans-serif',
              fontSize: '8px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#E7771E',
              transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'transform 0.3s ease',
            }}
          >
            <span style={{
              display: 'grid',
              placeItems: 'center',
              width: '14px',
              height: '14px',
              border: '1px solid rgba(231,119,30,0.7)',
              borderRadius: '50%',
              flexShrink: 0,
            }}>
              <EyebrowIcon />
            </span>
            {eyebrow}
          </motion.div>
        )}

        {/* Заголовок */}
        <h3 style={{ margin: 0, fontFamily: '"Cormorant Garamond", serif', textTransform: 'uppercase', lineHeight: 0.9 }}>
          {titleLine1 && (
            <motion.span
              variants={line1V}
              style={{
                display: 'block',
                color: '#F2E7DA',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}
            >
              {titleLine1}
            </motion.span>
          )}
          {titleLine2 && (
            <motion.span
              variants={line2V}
              style={{
                display: 'block',
                color: '#F2E7DA',
                fontSize: '26px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}
            >
              {titleLine2}
            </motion.span>
          )}
        </h3>

        {/* Красная плашка */}
        {ribbon && (
          <motion.div
            variants={ribbonV}
            style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              padding: '3px 7px',
              border: hovered
                ? '1px solid rgba(199,49,39,0.90)'
                : '1px solid rgba(199,49,39,0.74)',
              borderRadius: '3px',
              background: hovered
                ? 'linear-gradient(90deg, rgba(158,22,23,0.95), rgba(110,16,16,0.88))'
                : 'rgba(118,17,18,0.88)',
              fontFamily: '"Manrope", sans-serif',
              fontSize: '7.5px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#F2E7DA',
              boxShadow: hovered ? '0 0 14px rgba(199,49,39,0.28)' : 'none',
              transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
            }}
          >
            {ribbon}
          </motion.div>
        )}

        {/* Описание */}
        {description && (
          <motion.p
            variants={descV}
            style={{
              margin: 0,
              fontFamily: '"Manrope", sans-serif',
              fontSize: '10px',
              fontWeight: 400,
              lineHeight: 1.55,
              color: 'rgba(242,231,218,0.68)',
            }}
          >
            {description}
          </motion.p>
        )}

        {/* Пункты */}
        {points.length > 0 && (
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '5px' }}>
            {points.map((pt, i) => (
              <motion.li
                key={i}
                variants={pointV(i)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '18px 1fr',
                  alignItems: 'flex-start',
                  gap: '6px',
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: '10px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  color: '#F2E7DA',
                  transform: hovered ? 'translateX(3px)' : 'translateX(0)',
                  transition: `transform 0.3s ease ${i * 0.05}s`,
                }}
              >
                <span style={{
                  display: 'grid',
                  placeItems: 'center',
                  width: '18px',
                  height: '18px',
                  border: '1px solid rgba(231,119,30,0.7)',
                  borderRadius: '50%',
                  color: '#E7771E',
                  flexShrink: 0,
                  marginTop: '1px',
                }}>
                  {(() => { const Ic = POINT_ICONS[pointIcons[i]] || EyeIcon; return <Ic />; })()}
                </span>
                <span>{pt}</span>
              </motion.li>
            ))}
          </ul>
        )}
        {/* Footer (кнопки и т.п.) */}
        {footer && (
          <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
            {footer}
          </div>
        )}
      </div>
    </motion.article>
  );
}
