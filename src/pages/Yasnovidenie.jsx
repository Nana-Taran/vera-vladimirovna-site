import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const mainText = [
  'Ясновидение — это способность видеть ситуацию такой, какая она есть, минуя догадки и предположения. Вера Владимировна работает с этим даром уже 35 лет. За это время через неё прошли сотни ситуаций — от запутанных отношений до серьёзных жизненных перекрёстков, когда человек не знает, в каком направлении двигаться.',
  'В работе Веры нет театральности и нет страхов. Она видит — и говорит, что видит. Иногда это то, что вы уже чувствовали, но не могли сформулировать. Иногда — то, что было скрыто. В обоих случаях вы уходите с ясностью, а не с новыми вопросами.',
  'Духовная практика — живая часть её пути, которая поддерживает эту работу уже 35 лет.',
  'Консультация проходит онлайн — через Telegram или WhatsApp. Вы описываете ситуацию, Вера смотрит и даёт развёрнутый ответ. Расстояние не имеет значения: клиенты из разных стран Европы получают ту же глубину работы, что и те, кто рядом.',
  'Если вы чувствуете, что вам нужна ясность — это достаточный повод написать.',
];

const points = [
  'Понять скрытые причины того, что происходит в вашей жизни прямо сейчас',
  'Увидеть ситуацию в отношениях — кто как на самом деле думает и чувствует',
  'Получить честный взгляд на вероятный исход без прикрас',
  'Разобраться в причинах повторяющихся неудач или ощущения «всё идёт не так»',
  'Найти опору, когда нет рядом человека, которому можно полностью доверять',
];

const faqs = [
  {
    q: 'Как ясновидение работает на расстоянии?',
    a: 'Расстояние не влияет на качество работы. Вере не нужно видеть вас лично — она работает с энергетической картиной ситуации. Именно поэтому большинство её клиентов находятся в других странах, и это никак не сказывается на глубине и точности работы.',
  },
  {
    q: 'Нужно ли мне что-то делать перед консультацией?',
    a: 'Нет специальной подготовки. Просто напишите — своими словами, в свободной форме. Расскажите что происходит или задайте конкретный вопрос. Вера сама задаст уточняющие вопросы если нужно.',
  },
  {
    q: 'Вера говорит только хорошее или то, что есть на самом деле?',
    a: 'Только то, что есть. Вера не подстраивает ответ под то, что хочется услышать. Если ситуация требует честного разговора — она его проведёт. Именно поэтому к ней возвращаются.',
  },
  {
    q: 'Можно ли узнать о другом человеке — партнёре, родственнике?',
    a: 'Да, это возможно. Вера может посмотреть ситуацию через вас — как другой человек думает, что чувствует, каковы его намерения. Это один из частых запросов в её практике.',
  },
  {
    q: 'Как долго длится консультация?',
    a: 'Формат гибкий — зависит от запроса. Ответ на конкретный вопрос может быть коротким и ёмким. Разбор сложной жизненной ситуации — более развёрнутым. Вера адаптирует формат под то, что вам нужно.',
  },
  {
    q: 'Что если то, что она скажет, меня расстроит?',
    a: 'Вера работает с уважением и заботой. Она не говорит жёстко ради жёсткости. Но она говорит правду — потому что только правда даёт возможность что-то изменить. После консультации вы будете знать больше, а не меньше.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function Yasnovidenie() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидение онлайн — Вера Владимировна</title>
        <meta
          name="description"
          content="Прямой взгляд на вашу ситуацию через ясновидение. 35 лет практики, онлайн-консультации для русскоязычных клиентов по всему миру."
        />
        <link rel="canonical" href="https://veravladimirovna.com/yasnovidenie" />
        <meta property="og:title" content="Ясновидение онлайн — Вера Владимировна" />
        <meta property="og:description" content="Потомственное ясновидение — 35 лет практики. Онлайн-консультация для русскоязычных в любой стране." />
        <meta property="og:url" content="https://veravladimirovna.com/yasnovidenie" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидение онлайн — Вера Владимировна" />
        <meta name="twitter:description" content="Потомственное ясновидение — 35 лет практики. Онлайн-консультация для русскоязычных в любой стране." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org","@type":"Service",
          "name":"Ясновидение онлайн",
          "provider":{"@type":"Person","name":"Вера Владимировна","url":"https://veravladimirovna.com"},
          "url":"https://veravladimirovna.com/yasnovidenie",
          "description":"Онлайн-консультация ясновидящей Веры Владимировны. Прямой взгляд на ситуацию.",
          "areaServed":"Worldwide","inLanguage":"ru",
          "availableChannel":{"@type":"ServiceChannel","serviceUrl":"https://t.me/Vera_vladimerovna"}
        })}</script>
      </Helmet>

      <noscript>
        Вера Владимировна — ясновидящая с 35-летним опытом, работает онлайн с русскоязычными клиентами по всему миру. Через ясновидение она видит ситуацию человека — прошлое, настоящее и вероятный исход — без общих слов и гаданий наугад. Помогает разобраться в отношениях, жизненных решениях, здоровье и скрытых причинах повторяющихся трудностей. Консультации через Telegram, конфиденциально.
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
              ★ ЯСНОВИДЕНИЕ
            </p>
            <h1
              className="font-bebas leading-none mb-4"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ЯСНОВИДЕНИЕ — ПРЯМОЙ ВЗГЛЯД<br />НА ВАШУ СИТУАЦИЮ
            </h1>
            <p
              className="font-lobster mb-8"
              style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}
            >
              Когда нужны не советы, а реальная картина того, что происходит.
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
            Вера Владимировна — ясновидящая с 35-летним опытом, работает онлайн с русскоязычными клиентами по всему миру. Через ясновидение она видит ситуацию человека — прошлое, настоящее и вероятный исход — без общих слов и гаданий наугад. Помогает разобраться в отношениях, жизненных решениях, здоровье и скрытых причинах повторяющихся трудностей. Консультации через Telegram, конфиденциально.
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
              ★ ЧТО ДАЁТ ЯСНОВИДЕНИЕ
            </p>
            <h2
              className="font-bebas leading-none mb-10"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              ВЫ ПОЛУЧИТЕ ЯСНОСТЬ.
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
              ★ ВОПРОСЫ О ЯСНОВИДЕНИИ
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
            ХОТИТЕ ПОСМОТРЕТЬ ВАШУ СИТУАЦИЮ?
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.3 }}
          >
            Напишите — Вера ответит и предложит первый шаг.
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
