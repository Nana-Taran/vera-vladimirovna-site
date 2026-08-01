import { useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // здесь будет интеграция с бэкендом
    setSent(true);
  };

  return (
    <section
      id="ierusalim"
      className="relative py-20 md:py-28 px-4"
      style={{ background: 'var(--bg-deep)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(169,67,14,0.15) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Заголовок */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-montserrat font-semibold text-xs uppercase mb-3"
            style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
          >
            ★ ИЕРУСАЛИМ — СТЕНА ПЛАЧА
          </p>
          <h2
            className="font-bebas leading-none"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            РАБОТА У СТЕНЫ ПЛАЧА
          </h2>
          <p
            className="font-lato text-sm mt-2"
            style={{ color: 'var(--text-beige)', fontWeight: 300, maxWidth: '520px' }}
          >
            Молитвы и послания, переданные к Стене Плача. Оставьте заявку — и Вера Владимировна свяжется с вами.
          </p>
        </motion.div>

        {/* Два блока: видео + форма */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Левая — видео */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid rgba(232,102,23,0.3)',
                background: '#000',
                maxWidth: '360px',
                margin: '0 auto',
                height: '100%',
                display: 'flex',
                alignItems: 'stretch',
              }}
            >
              <video
                src="/images/video/vera-ierusalim-compressed.mp4"
                preload="none"
                controls
                playsInline
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  background: '#000',
                  flex: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Правая — форма */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div
              className="rounded-xl p-5"
              style={{
                background: 'var(--bg-dark)',
                border: '1px solid rgba(232,102,23,0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {sent ? (
                <div className="text-center py-10">
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🙏</div>
                  <h3
                    className="font-bebas mb-2"
                    style={{ color: 'var(--text-white)', fontSize: '28px' }}
                  >
                    Заявка принята
                  </h3>
                  <p
                    className="font-lato text-sm"
                    style={{ color: 'var(--text-beige)', fontWeight: 300 }}
                  >
                    Вера Владимировна свяжется с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-bebas mb-2"
                    style={{ color: 'var(--text-white)', fontSize: 'clamp(24px, 3vw, 32px)', letterSpacing: '0.04em' }}
                  >
                    ОСТАВИТЬ ЗАЯВКУ
                  </h3>
                  <p
                    className="font-lato text-sm mb-3"
                    style={{ color: 'var(--text-beige)', fontWeight: 300 }}
                  >
                    Первичный разбор ситуации — бесплатно.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                    <div>
                      <label
                        className="font-montserrat text-xs uppercase block mb-1"
                        style={{ color: 'var(--text-beige)', letterSpacing: '0.1em' }}
                      >
                        Имя
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ваше имя"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm font-lato outline-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(232,102,23,0.25)',
                          color: 'var(--text-white)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(232,102,23,0.7)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(232,102,23,0.25)'}
                      />
                    </div>
                    <div>
                      <label
                        className="font-montserrat text-xs uppercase block mb-1"
                        style={{ color: 'var(--text-beige)', letterSpacing: '0.1em' }}
                      >
                        Телефон / Telegram
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+7 или @username"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm font-lato outline-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(232,102,23,0.25)',
                          color: 'var(--text-white)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(232,102,23,0.7)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(232,102,23,0.25)'}
                      />
                    </div>
                    <div>
                      <label
                        className="font-montserrat text-xs uppercase block mb-1"
                        style={{ color: 'var(--text-beige)', letterSpacing: '0.1em' }}
                      >
                        Ваш вопрос
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Опишите коротко вашу ситуацию..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm font-lato outline-none transition-all resize-none"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(232,102,23,0.25)',
                          color: 'var(--text-white)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(232,102,23,0.7)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(232,102,23,0.25)'}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg font-montserrat font-bold text-sm transition-all hover:opacity-90"
                      style={{
                        background: 'var(--accent)',
                        color: 'var(--bg-deep)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      ОТПРАВИТЬ ЗАЯВКУ →
                    </button>
                    <p
                      className="font-lato text-xs text-center"
                      style={{ color: 'rgba(217,150,112,0.5)', fontWeight: 300 }}
                    >
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>

                    {/* Или написать напрямую */}
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-px" style={{ background: 'rgba(232,102,23,0.15)' }} />
                      <span className="font-montserrat text-xs" style={{ color: 'rgba(217,150,112,0.4)', letterSpacing: '0.08em' }}>
                        или напишите сами
                      </span>
                      <div className="flex-1 h-px" style={{ background: 'rgba(232,102,23,0.15)' }} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <a
                        href="https://t.me/Vera_vladimerovna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-montserrat font-semibold text-xs transition-all hover:opacity-90"
                        style={{ background: '#229ED9', color: '#fff', letterSpacing: '0.05em' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.942z"/></svg>
                        Telegram
                      </a>
                      <a
                        href="https://wa.me/995558314030"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-montserrat font-semibold text-xs transition-all hover:opacity-90"
                        style={{ background: '#25D366', color: '#fff', letterSpacing: '0.05em' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 14.24c-.23.64-1.35 1.22-1.84 1.27-.48.05-.93.22-3.13-.65-2.64-1.04-4.34-3.74-4.47-3.91-.13-.17-1.08-1.44-1.08-2.75s.68-1.95.92-2.21c.24-.27.53-.33.7-.33h.51c.16 0 .38-.06.59.45.22.53.74 1.83.81 1.96.07.13.11.29.02.46-.09.17-.13.28-.26.43-.13.16-.27.35-.39.47-.13.13-.26.27-.11.53.15.26.66 1.09 1.42 1.76.97.87 1.79 1.14 2.05 1.27.26.13.41.11.56-.07.15-.18.64-.74.81-.99.17-.26.34-.21.57-.13.23.09 1.47.69 1.72.82.26.13.43.19.49.3.07.11.07.64-.16 1.28z"/></svg>
                        WhatsApp
                      </a>
                      <a
                        href="viber://chat?number=%2B995558314030"
                        className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-montserrat font-semibold text-xs transition-all hover:opacity-90"
                        style={{ background: '#7360F2', color: '#fff', letterSpacing: '0.05em' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 0C6.15.3 1.35 4.2.15 9.3c-.6 2.55-.45 5.25.45 7.65.9 2.25 2.55 4.2 4.65 5.55l.75 4.5 4.2-2.1c1.05.3 2.1.45 3.15.45 5.7 0 10.5-4.35 10.65-10.05C24.15 9.3 23.1 4.5 19.5 2.1 17.1.45 14.25-.15 11.4 0zm.3 2.1c2.4-.15 4.95.45 6.9 1.8 3.15 2.1 4.05 6 3.9 9.45-.15 4.65-4.2 8.4-8.85 8.4-1.05 0-2.1-.15-3-.45l-2.55 1.2-.45-2.7c-1.8-1.05-3.3-2.7-4.05-4.65-.75-2.1-.9-4.5-.3-6.75C4.05 5.4 7.8 2.4 11.7 2.1z"/></svg>
                        Viber
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
