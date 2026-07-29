import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Star, Layers, Zap, Heart, Wifi, X } from 'lucide-react';
import ServiceCardPremium from './ServiceCardPremium';

const steps = [
  { num: '01', title: 'Вы пишете',        text: 'Опишите что тревожит и о чём хотите узнать.' },
  { num: '02', title: 'Вера смотрит',      text: 'Видит картину ситуации через ясновидение или карты.' },
  { num: '03', title: 'Выбираете формат',  text: 'Разовая консультация, расклад или глубокая работа.' },
  { num: '04', title: 'Договариваетесь',   text: 'Обсуждаете условия и шаги. Всё прозрачно.' },
];

const services = [
  { icon: <Eye size={22} />,    title: 'Ясновидение',         text: 'Вера видит ситуацию — прошлое, настоящее и к чему ведёт происходящее.' },
  { icon: <Star size={22} />,   title: 'Таро',                text: 'Глубокий расклад на конкретный вопрос — отношения, работа, выбор.' },
  { icon: <Layers size={22} />, title: 'Гадание',             text: 'Традиционные практики для чёткого ответа — будет ли, как лучше поступить.' },
  { icon: <Zap size={22} />,    title: 'Снятие негатива',     text: 'Диагностика и работа по снятию негативных влияний. Без запугивания.' },
  { icon: <Heart size={22} />,  title: 'Любовная магия',      text: 'Работа с ситуацией в паре — гармонизация, помощь при расставании.' },
  { icon: <Wifi size={22} />,   title: 'Онлайн-консультация', text: 'Вся работа онлайн — Telegram или WhatsApp. Полная конфиденциальность.' },
];

const TG = 'https://t.me/Vera_vladimerovna';
const WA = 'https://wa.me/995558314030';
const VB = 'viber://chat?number=%2B995558314030';

export default function HowAndServices() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  // Блокировка прокрутки при открытом попапе
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSent(false), 400);
  };

  return (
    <>
      <section
        id="how"
        className="relative overflow-hidden py-20 md:py-28 lg:py-32 px-4"
        style={{ background: 'var(--bg-deep)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(169,67,14,0.2) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* ① Заголовок — по центру */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-4"
              style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
            >
              ★ КАК МЫ РАБОТАЕМ
            </p>
            <h2
              className="font-bebas leading-none mb-3"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(38px, 6vw, 64px)' }}
            >
              СНАЧАЛА ВЕРА ВИДИТ.
            </h2>
            <p
              className="font-lobster"
              style={{ color: 'var(--accent)', fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.2 }}
            >
              потом вы понимаете что делать.
            </p>
          </motion.div>

          {/* ② Шаги */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* МОБИЛЬНЫЙ: вертикальный список */}
            <div className="sm:hidden flex flex-col gap-5 py-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
                    border: '1.5px solid rgba(232,102,23,0.65)',
                    background: 'rgba(232,102,23,0.09)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="font-bebas" style={{ color: 'var(--accent)', fontSize: '22px' }}>{step.num}</span>
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-sm mb-1" style={{ color: 'var(--text-white)', letterSpacing: '0.03em' }}>{step.title}</div>
                    <div className="font-lato text-xs leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>{step.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* ДЕСКТОП: горизонтальная линия */}
            <div
              className="hidden sm:flex w-full"
              style={{ alignItems: 'center', paddingTop: '44px', paddingBottom: '56px' }}
            >
              {steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <div style={{
                    width: '90px', height: '90px', borderRadius: '50%',
                    border: '1.5px solid rgba(232,102,23,0.65)',
                    background: 'rgba(232,102,23,0.09)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, zIndex: 1,
                  }}>
                    <span className="font-bebas" style={{ color: 'var(--accent)', fontSize: '30px', letterSpacing: '0.05em' }}>{step.num}</span>
                  </div>
                  <div style={{ flex: 1, position: 'relative', minWidth: '40px' }}>
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', textAlign: 'center', pointerEvents: 'none' }}>
                      <span className="font-montserrat font-semibold" style={{ color: 'var(--text-white)', fontSize: 'clamp(13px, 1.4vw, 19px)', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>{step.title}</span>
                    </div>
                    <div style={{ height: '1px', background: 'rgba(232,102,23,0.38)' }} />
                    <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', pointerEvents: 'none' }}>
                      <span className="font-lato" style={{ color: 'var(--text-beige)', fontSize: 'clamp(10px, 1vw, 13px)', fontWeight: 300, lineHeight: 1.55, display: 'block' }}>{step.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ③ Заголовок "Направления работы" — по центру, без лишнего отступа */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-3"
              style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
            >
              ★ НАПРАВЛЕНИЯ РАБОТЫ
            </p>
            <h2
              className="font-bebas leading-none"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(36px, 5.5vw, 54px)' }}
            >
              ЧЕМ Я МОГУ ПОМОЧЬ.
            </h2>
          </motion.div>

          {/* ④ Левый блок (35%) + Карточки (65%) */}
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 items-stretch">

            {/* Левая — компактный блок-кнопка (высота = карточки) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex h-full"
            >
              <div
                className="rounded-xl p-8 flex flex-col justify-between w-full h-full"
                style={{
                  background: 'var(--bg-dark)',
                  border: '1px solid rgba(232,102,23,0.22)',
                }}
              >
                <div>
                  <h3
                    className="font-bebas leading-none mb-4"
                    style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.04em' }}
                  >
                    ОСТАВИТЬ ЗАЯВКУ
                  </h3>
                  <p
                    className="font-lobster"
                    style={{ color: 'var(--accent)', fontSize: 'clamp(20px, 2.5vw, 30px)', lineHeight: 1.3 }}
                  >
                    Первичный разбор ситуации.
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-4 rounded-lg font-montserrat font-bold text-sm transition-all hover:opacity-90 mb-5"
                    style={{
                      background: 'var(--accent)',
                      color: 'var(--bg-deep)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    ЗАПОЛНИТЬ ФОРМУ →
                  </button>
                  <p
                    className="font-montserrat text-xs text-center mb-3"
                    style={{ color: 'rgba(217,150,112,0.45)', letterSpacing: '0.08em' }}
                  >
                    или напишите напрямую
                  </p>
                  <MessengerButtons />
                </div>
              </div>
            </motion.div>

            {/* Правая — карточки услуг 3×2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="h-full"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                {/* ✦ КАРТОЧКА 1 — Ясновидение (ПРЕМИУМ) */}
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <ServiceCardPremium
                    imageSrc="/images/services/yasnovidenie.png"
                    imagePosition="72% center"
                    eyebrow="ДУХОВНАЯ ПРАКТИКА"
                    titleLine1="ВИДЕНИЕ"
                    ribbon="ПРЯМОЙ ВЗГЛЯД НА СИТУАЦИЮ"
                    description="Вера видит ситуацию — прошлое, настоящее и к чему ведёт происходящее."
                    points={[
                      'Узнаю причины происходящего и скрытые факторы',
                      'Покажу возможное развитие и лучший путь для вас',
                    ]}
                  />
                </motion.div>

                {/* ✦ КАРТОЧКА 2 — Таро (ПРЕМИУМ) */}
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                >
                  <ServiceCardPremium
                    imageSrc="/images/services/taro.png"
                    imagePosition="60% center"
                    eyebrow="ТОЧНЫЙ РАСКЛАД"
                    eyebrowIcon="star"
                    titleLine1="ТАРО"
                    ribbon="ОТВЕТ НА ВАШ ВОПРОС"
                    description="Глубокий расклад на картах Таро — отношения, работа, выбор и будущее."
                    points={[
                      'Расклад на любой конкретный вопрос',
                      'Чёткие ответы и рекомендации по ситуации',
                    ]}
                    pointIcons={['card', 'check']}
                  />
                </motion.div>

                {/* ✦ КАРТОЧКА 3 — Гадание (ПРЕМИУМ) */}
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                >
                  <ServiceCardPremium
                    imageSrc="/images/services/gadanie.png"
                    imagePosition="55% center"
                    eyebrow="ТРАДИЦИОННАЯ ПРАКТИКА"
                    eyebrowIcon="moon"
                    titleLine1="ГАДАНИЕ"
                    ribbon="ЧЁТКИЙ ОТВЕТ НА ВАШ ВОПРОС"
                    description="Традиционные практики гадания помогают увидеть истину и понять, как лучше поступить."
                    points={[
                      'Гадание разными проверенными методами',
                      'Правдивые ответы и ясные подсказки',
                    ]}
                    pointIcons={['compass', 'check']}
                  />
                </motion.div>

                {/* ✦ КАРТОЧКА 4 — Снятие негатива (ПРЕМИУМ) */}
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                >
                  <ServiceCardPremium
                    imageSrc="/images/services/snyatie-negativa.png"
                    imagePosition="60% center"
                    eyebrow="ОЧИЩЕНИЕ И ЗАЩИТА"
                    eyebrowIcon="zap"
                    titleLine1="СНЯТИЕ"
                    titleLine2="НЕГАТИВА"
                    ribbon="ОЧИЩЕНИЕ · ЗАЩИТА · СПОКОЙСТВИЕ"
                    description="Диагностика и работа по снятию негативных влияний. Без запугивания."
                    points={[
                      'Выявляю негативные программы и воздействия',
                      'Очищение и защита на долгосрочный результат',
                    ]}
                    pointIcons={['shield', 'compass']}
                  />
                </motion.div>

                {/* ✦ КАРТОЧКА 5 — Любовная магия (ПРЕМИУМ) */}
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                >
                  <ServiceCardPremium
                    imageSrc="/images/services/lyubovnaya-magiya.png"
                    imagePosition="65% center"
                    eyebrow="ОТНОШЕНИЯ И ЧУВСТВА"
                    eyebrowIcon="heart"
                    titleLine1="ЛЮБОВНАЯ"
                    titleLine2="МАГИЯ"
                    ribbon="ГАРМОНИЯ В ОТНОШЕНИЯХ"
                    description="Работа с ситуацией в паре — гармонизация, восстановление связи, помощь при расставании."
                    points={[
                      'Гармонизация отношений и восстановление чувств',
                      'Работа с причинами конфликтов и отдаления',
                    ]}
                    pointIcons={['heart', 'check']}
                  />
                </motion.div>

                {/* ✦ КАРТОЧКА 6 — Онлайн-консультация (ПРЕМИУМ) */}
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.24 }}
                >
                  <ServiceCardPremium
                    imageSrc="/images/services/onlayn-konsultaciya.png"
                    imagePosition="60% center"
                    eyebrow="ДИСТАНЦИОННАЯ ПОМОЩЬ"
                    eyebrowIcon="wifi"
                    titleLine1="ОНЛАЙН-"
                    titleLine2="КОНСУЛЬТАЦИЯ"
                    ribbon="ПОМОЩЬ, ГДЕ БЫ ВЫ НИ БЫЛИ"
                    description="Вся работа онлайн — Telegram или WhatsApp. Полная конфиденциальность."
                    points={[
                      'Удобный формат в подходящее для вас время',
                      'Конфиденциальность и индивидуальный подход',
                    ]}
                    pointIcons={['wifi', 'shield']}
                  />
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ⑤ Попап-форма */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(9,6,4,0.88)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(4px)',
            }}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-dark)',
                border: '1px solid rgba(232,102,23,0.3)',
                borderRadius: '20px',
                padding: '36px',
                width: '100%',
                maxWidth: '480px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              {/* Кнопка закрытия */}
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(232,102,23,0.2)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-beige)',
                  cursor: 'pointer',
                }}
              >
                <X size={14} />
              </button>

              {sent ? (
                <div className="text-center py-6">
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>🙏</div>
                  <h3
                    className="font-bebas mb-2"
                    style={{ color: 'var(--text-white)', fontSize: '28px' }}
                  >
                    Заявка принята
                  </h3>
                  <p
                    className="font-lato text-sm mb-6"
                    style={{ color: 'var(--text-beige)', fontWeight: 300 }}
                  >
                    Вера Владимировна свяжется с вами в ближайшее время.
                  </p>
                  <MessengerButtons />
                </div>
              ) : (
                <>
                  <h3
                    className="font-bebas leading-none mb-1"
                    style={{ color: 'var(--text-white)', fontSize: 'clamp(28px, 4vw, 36px)', letterSpacing: '0.04em', paddingRight: '40px' }}
                  >
                    ОСТАВИТЬ ЗАЯВКУ
                  </h3>
                  <p
                    className="font-lobster mb-6"
                    style={{ color: 'var(--accent)', fontSize: '18px' }}
                  >
                    Первичный разбор ситуации.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label
                        className="font-montserrat text-xs uppercase block mb-1.5"
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
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(232,102,23,0.7)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(232,102,23,0.25)')}
                      />
                    </div>
                    <div>
                      <label
                        className="font-montserrat text-xs uppercase block mb-1.5"
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
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(232,102,23,0.7)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(232,102,23,0.25)')}
                      />
                    </div>
                    <div>
                      <label
                        className="font-montserrat text-xs uppercase block mb-1.5"
                        style={{ color: 'var(--text-beige)', letterSpacing: '0.1em' }}
                      >
                        Ваш вопрос
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Опишите коротко вашу ситуацию..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm font-lato outline-none transition-all resize-none"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(232,102,23,0.25)',
                          color: 'var(--text-white)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(232,102,23,0.7)')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(232,102,23,0.25)')}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg font-montserrat font-bold text-sm transition-all hover:opacity-90"
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
                      style={{ color: 'rgba(217,150,112,0.4)', fontWeight: 300 }}
                    >
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-px" style={{ background: 'rgba(232,102,23,0.15)' }} />
                      <span
                        className="font-montserrat text-xs"
                        style={{ color: 'rgba(217,150,112,0.4)', letterSpacing: '0.08em' }}
                      >
                        или напишите сами
                      </span>
                      <div className="flex-1 h-px" style={{ background: 'rgba(232,102,23,0.15)' }} />
                    </div>
                    <MessengerButtons />
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessengerButtons() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <a
        href={TG}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-montserrat font-semibold text-xs transition-all hover:opacity-90"
        style={{ background: '#229ED9', color: '#fff', letterSpacing: '0.05em' }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.942z"/></svg>
        Telegram
      </a>
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-montserrat font-semibold text-xs transition-all hover:opacity-90"
        style={{ background: '#25D366', color: '#fff', letterSpacing: '0.05em' }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 14.24c-.23.64-1.35 1.22-1.84 1.27-.48.05-.93.22-3.13-.65-2.64-1.04-4.34-3.74-4.47-3.91-.13-.17-1.08-1.44-1.08-2.75s.68-1.95.92-2.21c.24-.27.53-.33.7-.33h.51c.16 0 .38-.06.59.45.22.53.74 1.83.81 1.96.07.13.11.29.02.46-.09.17-.13.28-.26.43-.13.16-.27.35-.39.47-.13.13-.26.27-.11.53.15.26.66 1.09 1.42 1.76.97.87 1.79 1.14 2.05 1.27.26.13.41.11.56-.07.15-.18.64-.74.81-.99.17-.26.34-.21.57-.13.23.09 1.47.69 1.72.82.26.13.43.19.49.3.07.11.07.64-.16 1.28z"/></svg>
        WhatsApp
      </a>
      <a
        href={VB}
        className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-montserrat font-semibold text-xs transition-all hover:opacity-90"
        style={{ background: '#7360F2', color: '#fff', letterSpacing: '0.05em' }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 0C6.15.3 1.35 4.2.15 9.3c-.6 2.55-.45 5.25.45 7.65.9 2.25 2.55 4.2 4.65 5.55l.75 4.5 4.2-2.1c1.05.3 2.1.45 3.15.45 5.7 0 10.5-4.35 10.65-10.05C24.15 9.3 23.1 4.5 19.5 2.1 17.1.45 14.25-.15 11.4 0zm.3 2.1c2.4-.15 4.95.45 6.9 1.8 3.15 2.1 4.05 6 3.9 9.45-.15 4.65-4.2 8.4-8.85 8.4-1.05 0-2.1-.15-3-.45l-2.55 1.2-.45-2.7c-1.8-1.05-3.3-2.7-4.05-4.65-.75-2.1-.9-4.5-.3-6.75C4.05 5.4 7.8 2.4 11.7 2.1z"/></svg>
        Viber
      </a>
    </div>
  );
}
