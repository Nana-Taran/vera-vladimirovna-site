import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const faqs = [
  {
    q: 'Как проходит онлайн-консультация?',
    a: 'Вы пишете Вере в Telegram или WhatsApp — в свободной форме, описываете что происходит или задаёте конкретный вопрос. Она читает, задаёт уточняющие вопросы если нужно, смотрит ситуацию через ясновидение или карты и даёт развёрнутый ответ. Никуда ехать не нужно. Всё конфиденциально.',
  },
  {
    q: 'Сколько стоит консультация?',
    a: 'Стоимость зависит от формата и глубины работы. Вера не публикует прайс — потому что каждая ситуация индивидуальна. Напишите, опишите запрос — и она предложит подходящий вариант с чёткой ценой. Никаких скрытых платежей.',
  },
  {
    q: 'Нужно ли готовиться к консультации заранее?',
    a: 'Нет. Просто напишите своими словами. Не нужно ничего заучивать, готовить фото или специальные данные. Если Вере понадобится дополнительная информация — она спросит сама.',
  },
  {
    q: 'Вы работаете с клиентами из других стран?',
    a: 'Да, большинство клиентов живут за рубежом — в Германии, Израиле, Австрии, Чехии, США, Нидерландах и других странах. Онлайн-формат работает с любой точкой мира.',
  },
  {
    q: 'Насколько точны ясновидение и расклады Таро?',
    a: 'Вера работает честно и говорит то, что видит — без приукрашивания и без нагнетания. Точность зависит от ситуации и от чёткости запроса. Чем конкретнее вопрос — тем более конкретный ответ. Общих обещаний она не даёт.',
  },
  {
    q: 'Как долго ждать результата после работы?',
    a: 'Ответ на вопрос — в рамках одной консультации. Изменения после более глубокой работы (снятие влияний, работа в отношениях) — от нескольких дней до нескольких недель. Вера всегда честно говорит о реалистичных ожиданиях.',
  },
  {
    q: 'Это конфиденциально?',
    a: 'Абсолютно. Всё, что вы рассказываете, остаётся строго между вами и Верой Владимировной. Никаких публикаций без вашего согласия, никаких третьих лиц.',
  },
  {
    q: 'Вы гарантируете результат?',
    a: 'Вера не даёт обещаний определённого результата — потому что работает честно. Она говорит что видит, предлагает работу там, где это уместно, и честно обозначает чего реально ожидать. Это честнее красивых слов.',
  },
  {
    q: 'Что такое духовная практика Веры — и как это связано с консультацией?',
    a: 'Вера ведёт духовную практику, которая стала живой частью её работы. Клиенты могут попросить включить их ситуацию в эту практику. Это доступно всем — независимо от убеждений.',
  },
  {
    q: 'Можно ли обратиться анонимно?',
    a: 'Да. Документы и личные данные не требуются. Вера работает с ситуацией.',
  },
  {
    q: 'Я боюсь, что мне скажут что-то страшное. Стоит ли обращаться?',
    a: 'Вера работает с уважением и заботой. Она не пугает и не создаёт тревогу там, где её нет. Если есть что-то тревожное — она скажет об этом мягко и с объяснением что делать. Правда даёт возможность действовать — это важнее чем незнание.',
  },
  {
    q: 'С чего начать, если я никогда не обращалась к экстрасенсу?',
    a: 'Просто напишите в Telegram или WhatsApp. В свободной форме, своими словами. Расскажите что беспокоит. Вера ответит — без давления и без обязательств с вашей стороны. Первый разговор ни к чему не обязывает.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function FaqPage() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Вопросы и ответы — Вера Владимировна</title>
        <meta
          name="description"
          content="Как проходит консультация, сколько стоит, насколько точно — честные ответы на частые вопросы о работе Веры Владимировны."
        />
        <link rel="canonical" href="https://veravladimirovna.com/faq" />
        <meta property="og:title" content="Вопросы и ответы — Вера Владимировна" />
        <meta property="og:description" content="Честные ответы о работе Веры Владимировны. Как проходит консультация, сколько стоит, насколько точно." />
        <meta property="og:url" content="https://veravladimirovna.com/faq" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Вопросы и ответы — Вера Владимировна" />
        <meta name="twitter:description" content="Честные ответы о работе Веры Владимировны. Как проходит консультация, сколько стоит, насколько точно." />
      </Helmet>

      <noscript>
        Ответы на самые частые вопросы о работе Веры Владимировны — ясновидящей с 35-летним опытом. Как проходит онлайн-консультация, сколько стоит, насколько точно, что делать если страшно — честно и без общих слов. Работает с клиентами из 12+ стран, только через мессенджеры, полная конфиденциальность.
      </noscript>

      <Navbar />

      {/* H1 + AI-резюме */}
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
              ★ ВОПРОСЫ И ОТВЕТЫ
            </p>
            <h1
              className="font-bebas leading-none mb-8"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ВОПРОСЫ О РАБОТЕ<br />ВЕРЫ ВЛАДИМИРОВНЫ
            </h1>
            <p
              className="font-lato text-base leading-relaxed max-w-[700px]"
              style={{ color: 'var(--text-beige)', fontWeight: 300 }}
            >
              Ответы на самые частые вопросы о работе Веры Владимировны — ясновидящей с 35-летним опытом. Как проходит онлайн-консультация, сколько стоит, насколько точно, что делать если страшно — честно и без общих слов. Работает с клиентами из 12+ стран, только через мессенджеры, полная конфиденциальность.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 12 вопросов */}
      <section id="questions" className="py-16 md:py-24 px-4 relative overflow-hidden" style={{ background: 'var(--text-white)' }}>
        {/* Glow 1 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 130% 90% at 88% 100%,
            rgba(195,72,8,0.55) 0%, rgba(215,88,12,0.35) 20%,
            rgba(230,100,20,0.15) 42%, rgba(232,102,23,0.06) 62%, transparent 78%)`,
          zIndex: 0,
        }} />
        {/* Glow 2 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 95% 80% at 8% 5%,
            rgba(210,85,10,0.22) 0%, rgba(225,100,18,0.10) 35%,
            transparent 65%)`,
          zIndex: 0,
        }} />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="py-1"
                style={{ borderBottom: '1px solid rgba(168,67,14,0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span
                    className="font-lato text-base leading-snug flex-1"
                    style={{ color: '#2d1507', fontWeight: 500 }}
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
                        style={{ color: '#5a3520', fontWeight: 400 }}
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
            ОСТАЛИСЬ ВОПРОСЫ?
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.3 }}
          >
            Напишите — и получите ответ напрямую.
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
