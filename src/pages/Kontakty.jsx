import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, MessageSquare, Plus, Minus } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

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

const faqs = [
  {
    q: 'Как написать, чтобы начать?',
    a: 'Просто напишите в Telegram или WhatsApp — в свободной форме, своими словами. Опишите что беспокоит или задайте вопрос. Не нужно ничего готовить заранее.',
  },
  {
    q: 'Как быстро Вера отвечает?',
    a: 'В рамках своего рабочего расписания. При записи она сразу обозначает ожидаемое время ответа.',
  },
  {
    q: 'Можно написать анонимно?',
    a: 'Да. Не нужно называть полное имя и раскрывать лишние детали. Вера работает с ситуацией, а не с документами.',
  },
  {
    q: 'Какой способ связи предпочтительнее?',
    a: 'Любой удобный — Telegram, WhatsApp или Viber. Разницы нет, работа одинаково глубокая в любом формате.',
  },
  {
    q: 'Первый разговор платный?',
    a: 'Нет. Первый контакт ни к чему не обязывает. Вера сначала посмотрит ситуацию, затем предложит формат работы с чёткой ценой.',
  },
];

export default function Kontakty() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Контакты — Вера Владимировна</title>
        <meta
          name="description"
          content="Напишите Вере Владимировне в Telegram или WhatsApp. Онлайн-консультации по ясновидению, Таро и диагностике из любой страны мира."
        />
        <link rel="canonical" href="https://veravladimirovna.com/kontakty" />
        <meta property="og:title" content="Контакты — Вера Владимировна" />
        <meta property="og:description" content="Написать Вере Владимировне в Telegram или WhatsApp. Онлайн-консультация из любой страны." />
        <meta property="og:url" content="https://veravladimirovna.com/kontakty" />
        <meta property="og:image" content="https://veravladimirovna.com/images/og-vera.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Контакты — Вера Владимировна" />
        <meta name="twitter:description" content="Написать Вере Владимировне в Telegram или WhatsApp. Онлайн-консультация из любой страны." />
      </Helmet>

      <noscript>
        Свяжитесь с Верой Владимировной — ясновидящей, таро-практиком и экстрасенсом с 35-летним опытом. Работает онлайн с русскоязычными клиентами из Европы, Израиля, США и других стран. Консультации через Telegram и WhatsApp по вопросам отношений, жизненных решений и диагностики ситуации. Полная конфиденциальность, без давления, первый разговор ни к чему не обязывает.
      </noscript>

      <Navbar />

      {/* H1 + текст */}
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-4"
              style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
            >
              ★ СВЯЗАТЬСЯ С ВЕРОЙ
            </p>
            <h1
              className="font-bebas leading-none mb-6"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              КОНТАКТЫ ЯСНОВИДЯЩЕЙ<br />ВЕРЫ ВЛАДИМИРОВНЫ
            </h1>
            <p
              className="font-lobster"
              style={{ color: 'var(--accent)', fontSize: 'clamp(20px, 3vw, 32px)', lineHeight: 1.3 }}
            >
              Напишите удобным способом — она ответит.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Текст + кнопки контактов */}
      <section id="form" className="py-16 md:py-20 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-lato text-base leading-relaxed mb-3"
              style={{ color: 'var(--text-beige)', fontWeight: 300 }}
            >
              Самый простой способ начать — просто написать. Опишите своими словами что происходит или что вас беспокоит. Не нужно формулировать идеально и заранее всё продумывать. Вера прочитает, задаст уточняющие вопросы если нужно, и предложит первый шаг.
            </p>
            <p
              className="font-lato text-base leading-relaxed mb-12"
              style={{ color: 'var(--text-beige)', fontWeight: 400 }}
            >
              Первый разговор ни к чему не обязывает.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {messengers.map((m, i) => (
                <motion.a
                  key={i}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-montserrat font-semibold text-sm transition-all duration-300"
                  style={{
                    border: '1px solid var(--accent)',
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                  }}
                  whileHover={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--bg-deep)',
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span>{m.icon}</span>
                  {m.label}
                </motion.a>
              ))}
            </div>

            <p
              className="font-montserrat text-xs mt-8"
              style={{ color: 'var(--text-beige)', letterSpacing: '0.2em' }}
            >
              ОНЛАЙН · КОНФИДЕНЦИАЛЬНО · ИЗ ЛЮБОЙ СТРАНЫ
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-4"
              style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
            >
              ★ ВОПРОСЫ О СВЯЗИ
            </p>
            <h2
              className="font-bebas leading-none"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '0.05em' }}
            >
              ЧАСТО СПРАШИВАЮТ.
            </h2>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="py-1"
                style={{ borderBottom: '1px solid rgba(232,102,23,0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span
                    className="font-lato text-base leading-snug flex-1"
                    style={{ color: 'var(--text-white)', fontWeight: 400 }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
                  >
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p
                        className="font-lato text-sm leading-relaxed pb-5"
                        style={{ color: 'var(--text-beige)', fontWeight: 400 }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
