import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const mainText = [
  'Вопросы сердца — одни из самых болезненных. Когда любимый человек отдаляется. Когда отношения разрушаются непонятно почему. Когда не знаешь — ждать или отпустить. Когда сделала всё правильно, а результат не тот, что ожидала.',
  'В такие моменты хочется поговорить с кем-то, кто не просто посочувствует, а действительно увидит — что происходит с этим человеком, с этой парой, с этой ситуацией. Именно это и делает Вера Владимировна.',
  'Она начинает с диагностики: смотрит ситуацию через ясновидение, разбирает что есть на самом деле — как партнёр думает и чувствует, есть ли внешние влияния, каков вероятный исход если ничего не менять. Только после этого — честный разговор о том, что можно сделать и что реально ожидать.',
  'Вера не даёт пустых обещаний — разбирает ситуацию честно и говорит что реально возможно. Это честнее красивых слов без основания.',
  'Если вы переживаете сложный период в отношениях — это достаточная причина написать. Разобраться в ситуации уже само по себе ценно.',
];

const points = [
  'Партнёр отдаляется или охладел — хочу понять почему и есть ли шанс',
  'Расставание — не могу принять и хочу понять, возможно ли воссоединение',
  'Измена или подозрение — хочу знать правду о том, что происходит',
  'Конфликты в паре — хочу понять корень проблемы и как из этого выйти',
  'Одиночество — хочу понять, когда и как придут новые отношения',
];

const faqs = [
  {
    q: 'Вы можете вернуть человека?',
    a: 'Вера не даёт конкретных обещаний по результату — потому что работает честно. Она смотрит ситуацию, оценивает что реально возможно, и предлагает работу там, где она может дать результат. Иногда это воссоединение. Иногда — помочь человеку отпустить и двигаться дальше.',
  },
  {
    q: 'Можно ли узнать, что думает бывший партнёр?',
    a: 'Да. Через ясновидение Вера может посмотреть, как человек думает и чувствует, есть ли у него намерение вернуться или нет. Это помогает принять решение — ждать или отпускать.',
  },
  {
    q: 'Любовная магия — это не манипуляция?',
    a: 'Вера работает с ситуацией, а не с насилием над волей человека. Она помогает восстановить то, что было, или гармонизировать то, что есть. Детали подхода обсуждаются индивидуально — в каждой ситуации своя история.',
  },
  {
    q: 'Я уже обращалась к другим, ничего не помогло. Имеет ли смысл снова?',
    a: 'Это зависит от ситуации. Вера сначала посмотрит — и честно скажет, видит ли она потенциал для работы. Если нет — так и скажет. Это честнее, чем брать деньги за то, что нереально.',
  },
  {
    q: 'Как долго длится работа в вопросах отношений?',
    a: 'По-разному. Иногда достаточно разового разбора ситуации и понимания что происходит. Иногда нужна более глубокая работа в несколько этапов. Вера обозначает это после диагностики.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function LyubovnayaMagiya() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Любовная магия онлайн — Вера Владимировна</title>
        <meta
          name="description"
          content="Сложная ситуация в любви? Вера посмотрит что происходит и скажет честно, что можно сделать. Онлайн, конфиденциально, без пустых обещаний."
        />
        <link rel="canonical" href="https://veravladimirovna.com/lyubovnaya-magiya" />
        <meta property="og:title" content="Помощь в отношениях и любовная магия — Вера Владимировна" />
        <meta property="og:description" content="Сложная ситуация в любви? Вера посмотрит что происходит и скажет честно, что можно сделать." />
        <meta property="og:url" content="https://veravladimirovna.com/lyubovnaya-magiya" />
        <meta property="og:image" content="https://veravladimirovna.com/images/og-vera.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Помощь в отношениях и любовная магия — Вера Владимировна" />
        <meta name="twitter:description" content="Сложная ситуация в любви? Вера посмотрит что происходит и скажет честно, что можно сделать." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org","@type":"Service",
          "name":"Любовная магия онлайн",
          "provider":{"@type":"Person","name":"Вера Владимировна","url":"https://veravladimirovna.com"},
          "url":"https://veravladimirovna.com/lyubovnaya-magiya",
          "description":"Работа с отношениями онлайн от Веры Владимировны. Гармонизация, помощь при расставании.",
          "areaServed":"Worldwide","inLanguage":"ru",
          "availableChannel":{"@type":"ServiceChannel","serviceUrl":"https://t.me/Vera_vladimerovna"}
        })}</script>
      </Helmet>

      <noscript>
        Вера Владимировна — ясновидящая с 35-летним опытом, помогает в сложных ситуациях в отношениях: расставания, охлаждение чувств, конфликты в паре, вопрос воссоединения. Работает онлайн с русскоязычными клиентами по всему миру. Каждая ситуация разбирается индивидуально — сначала смотрит что происходит, потом предлагает, что можно сделать. С уважением к ситуации и без громких обещаний.
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
              ★ ЛЮБОВЬ И ОТНОШЕНИЯ
            </p>
            <h1
              className="font-bebas leading-none mb-4"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ПОМОЩЬ В ВОПРОСАХ<br />ЛЮБВИ И ОТНОШЕНИЙ
            </h1>
            <p
              className="font-lobster mb-8"
              style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}
            >
              Вера не обещает невозможного. Она смотрит ситуацию — и говорит, что реально сделать.
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
            Вера Владимировна — ясновидящая с 35-летним опытом, помогает в сложных ситуациях в отношениях: расставания, охлаждение чувств, конфликты в паре, вопрос воссоединения. Работает онлайн с русскоязычными клиентами по всему миру. Каждая ситуация разбирается индивидуально — сначала смотрит что происходит, потом предлагает, что можно сделать. С уважением к ситуации и без громких обещаний.
          </p>
        </div>
      </section>

      {/* Основной текст */}
      <section className="py-16 md:py-20 px-4" style={{ background: 'var(--bg-dark)' }}>
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
              ★ С ЧЕМ ОБРАЩАЮТСЯ
            </p>
            <h2
              className="font-bebas leading-none mb-10"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              КАЖДАЯ СИТУАЦИЯ ИНДИВИДУАЛЬНА.
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
              ★ ВОПРОСЫ ОБ ОТНОШЕНИЯХ
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
            СЛОЖНО В ОТНОШЕНИЯХ?<br />ДАВАЙТЕ РАЗБЕРЁМСЯ.
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.3 }}
          >
            Вера посмотрит и честно скажет, что можно сделать.
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
