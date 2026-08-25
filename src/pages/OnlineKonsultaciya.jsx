import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const mainText = [
  'Онлайн-консультация у Веры Владимировны — это не звонок по видео и не сухая переписка с шаблонными ответами. Это живая работа в мессенджере: вы описываете ситуацию, Вера смотрит и даёт развёрнутый, конкретный ответ.',
  'За 35 лет практики через неё прошли сотни ситуаций — отношения, важные решения, переезды, семейные конфликты, вопросы, которые невозможно обсудить с близкими. Вера умеет слушать и умеет видеть то, что не лежит на поверхности.',
  'Консультация проходит в удобном для вас формате и темпе. Вы пишете тогда, когда готовы. Вера отвечает обстоятельно — без спешки, без давления, без навязывания дополнительных услуг.',
  'Работать с Верой можно из любой страны. Большинство её клиентов живут в Германии, Израиле, Австрии, Чехии, США, Нидерландах. Расстояние не влияет на глубину и точность работы.',
  'Если вы долго думаете, стоит ли написать — это уже знак. Первый разговор ни к чему не обязывает.',
];

const points = [
  'Пишете в Telegram или WhatsApp — своими словами, как умеете, без правил',
  'Вера читает, при необходимости задаёт уточняющие вопросы — чтобы увидеть точнее',
  'Смотрит вашу ситуацию через ясновидение, карты или другой подходящий инструмент',
  'Даёт развёрнутый ответ — честно, конкретно, с объяснением что происходит и что с этим делать',
  'Если нужна дополнительная работа — предлагает её с чёткими условиями, без давления',
];

const faqs = [
  {
    q: 'Как начать — что написать в первом сообщении?',
    a: 'Просто напишите что вас беспокоит. Не нужно ничего формулировать идеально. "Не знаю что происходит в отношениях" или "Хочу посоветоваться насчёт работы" — этого достаточно, чтобы начать разговор. Вера поможет сформулировать запрос если нужно.',
  },
  {
    q: 'Сколько стоит консультация?',
    a: 'Стоимость зависит от формата и глубины запроса. Вера не публикует фиксированный прайс — потому что каждая ситуация индивидуальна. Напишите, опишите запрос — она предложит вариант с чёткой ценой. Никаких скрытых платежей.',
  },
  {
    q: 'Можно ли обратиться анонимно?',
    a: 'Да. Никаких документов и личных данных не нужно. Вера работает с ситуацией, а не с анкетой. Всё, что вы рассказываете, остаётся строго конфиденциально.',
  },
  {
    q: 'Как быстро Вера отвечает?',
    a: 'Вера отвечает по своему рабочему расписанию. Конкретное время зависит от занятости на момент обращения, но первый контакт проходит в понятном формате через мессенджер.',
  },
  {
    q: 'Что если после консультации у меня появятся ещё вопросы?',
    a: 'Это нормально — особенно после того, как ситуация начинает проясняться. Вы можете написать снова. Вера не исчезает после первого ответа.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function OnlineKonsultaciya() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Онлайн-консультация экстрасенса — Вера Владимировна</title>
        <meta
          name="description"
          content="Консультация ясновидящей онлайн через Telegram и WhatsApp. Честный разбор ситуации без общих слов. 35 лет практики. Клиенты из Европы, Израиля, США."
        />
        <link rel="canonical" href="https://veravladimirovna.com/online-konsultaciya" />
        <meta property="og:title" content="Онлайн-консультация — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных в Европе, Израиле, США, Канаде и других странах." />
        <meta property="og:url" content="https://veravladimirovna.com/online-konsultaciya" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Онлайн-консультация — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных в Европе, Израиле, США, Канаде и других странах." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org","@type":"Service",
          "name":"Онлайн-консультация ясновидящей",
          "provider":{"@type":"Person","name":"Вера Владимировна","url":"https://veravladimirovna.com"},
          "url":"https://veravladimirovna.com/online-konsultaciya",
          "description":"Онлайн-консультация ясновидящей Веры Владимировны через Telegram или WhatsApp.",
          "areaServed":"Worldwide","inLanguage":"ru",
          "availableChannel":{"@type":"ServiceChannel","serviceUrl":"https://t.me/Vera_vladimerovna"}
        })}</script>
      </Helmet>

      <noscript>
        Вера Владимировна — ясновидящая с 35-летним опытом, проводит онлайн-консультации через Telegram и WhatsApp. Работает с русскоязычными клиентами из Европы, Израиля, США и других стран. В консультацию входит: диагностика ситуации через ясновидение, честный разбор без общих слов, ответ на конкретный вопрос или разбор всей картины. Конфиденциально, в удобном формате переписки.
      </noscript>

      <Navbar />

      {/* H1 + подзаголовок + CTA */}
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
              ★ ОНЛАЙН-КОНСУЛЬТАЦИЯ
            </p>
            <h1
              className="font-bebas leading-none mb-4"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ОНЛАЙН-КОНСУЛЬТАЦИЯ<br />ЯСНОВИДЯЩЕЙ ВЕРЫ ВЛАДИМИРОВНЫ
            </h1>
            <p
              className="font-lobster mb-8"
              style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}
            >
              Пишете в мессенджер — получаете честный разбор вашей ситуации. Спокойно и без давления.
            </p>
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm px-6 py-3 rounded-xl transition-all hover:opacity-90"
              style={{ background: 'var(--accent)', color: 'var(--bg-deep)', letterSpacing: '0.08em' }}
            >
              Написать в Telegram →
            </a>
          </motion.div>
        </div>
      </section>

      {/* AI-резюме видимый */}
      <section className="py-10 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto">
          <p
            className="font-lato text-base leading-relaxed"
            style={{ color: 'var(--text-beige)', fontWeight: 300 }}
          >
            Вера Владимировна — ясновидящая с 35-летним опытом, проводит онлайн-консультации через Telegram и WhatsApp. Работает с русскоязычными клиентами из Европы, Израиля, США и других стран. В консультацию входит: диагностика ситуации через ясновидение, честный разбор без общих слов, ответ на конкретный вопрос или разбор всей картины. Конфиденциально, в удобном формате переписки.
          </p>
        </div>
      </section>

      {/* Основной текст */}
      <section id="content" className="py-16 md:py-20 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {mainText.map((para, i) => (
              <p
                key={i}
                className="font-lato text-base leading-relaxed"
                style={{ color: 'var(--text-beige)', fontWeight: 300 }}
              >
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5 пунктов */}
      <section className="py-16 md:py-24 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-4"
              style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
            >
              ★ КАК ЭТО ПРОХОДИТ
            </p>
            <h2
              className="font-bebas leading-none mb-10"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              ПРОСТО И БЕЗ ФОРМАЛЬНОСТЕЙ.
            </h2>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <ArrowRight size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} />
                  <span
                    className="font-lato text-base leading-relaxed"
                    style={{ color: 'var(--text-beige)', fontWeight: 300 }}
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
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
              ★ ВОПРОСЫ О КОНСУЛЬТАЦИИ
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
                transition={{ duration: 0.5, delay: i * 0.06 }}
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

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-4 text-center overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(169,67,14,0.35) 0%, rgba(58,27,10,0.15) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
          style={{ background: 'var(--accent)' }}
        />
        <motion.div
          className="max-w-[700px] mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-bebas leading-none mb-3"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(36px, 6vw, 60px)' }}
          >
            ГОТОВЫ РАЗОБРАТЬСЯ В СИТУАЦИИ?
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.3 }}
          >
            Первый ответ ни к чему не обязывает.
          </p>
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-bold text-sm px-8 py-4 rounded-xl transition-all hover:opacity-90"
            style={{ background: 'var(--accent)', color: 'var(--bg-deep)', letterSpacing: '0.08em' }}
          >
            Написать в Telegram →
          </a>
          <p
            className="font-montserrat text-xs mt-6"
            style={{ color: 'var(--text-beige)', letterSpacing: '0.2em' }}
          >
            ОНЛАЙН · КОНФИДЕНЦИАЛЬНО · ИЗ ЛЮБОЙ СТРАНЫ
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
