import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const mainText = [
  'Гадание — один из старейших способов получить ответ на вопрос, который не решается логически. Когда нет достаточно информации, когда ситуация слишком запутана, когда нужно понять не "что делать", а "что происходит на самом деле" — именно тогда обращаются к человеку, который умеет видеть иначе.',
  'Вера Владимировна практикует 35 лет. Она работает с разными традиционными техниками и умеет выбрать ту, которая даст наиболее точный ответ для конкретной ситуации. При этом она не ограничивается только инструментом — её собственный дар ясновидения углубляет и уточняет то, что открывается в работе.',
  'Гадание у Веры — это не развлечение и не шоу. Это рабочий инструмент для людей, которым нужна реальная информация: будет ли, стоит ли, как лучше поступить, что на самом деле думает этот человек.',
  'Всё проходит онлайн — через Telegram или WhatsApp. Вы задаёте вопрос, Вера работает и даёт ответ. Чётко, без общих слов, с объяснением того, что открылось.',
  'Если вопрос уже давно крутится в голове — время его задать.',
];

const points = [
  'Будет ли у нас будущее с этим человеком?',
  'Стоит ли мне соглашаться на это предложение?',
  'Почему всё идёт не так, как должно — в чём причина?',
  'Как разрешится эта ситуация — и когда?',
  'Есть ли что-то, о чём я не знаю, но должна знать?',
];

const faqs = [
  {
    q: 'Чем гадание отличается от ясновидения и Таро?',
    a: 'Все три инструмента направлены на одно — дать вам ясность. Ясновидение — прямое видение ситуации. Таро — работа с картами как системой образов. Гадание — традиционные техники получения ответа на конкретный вопрос. Вера выбирает инструмент под запрос и человека.',
  },
  {
    q: 'Насколько это точно?',
    a: 'Вера работает честно: она говорит то, что видит и что открывается в работе. Точность зависит от ситуации и от чёткости вашего вопроса. Чем конкретнее запрос — тем более конкретный ответ.',
  },
  {
    q: 'Можно гадать на прошлое?',
    a: 'Да. Иногда важно понять не будущее, а то что уже произошло — почему так сложилось, что стояло за тем или иным событием. Это тоже рабочий запрос.',
  },
  {
    q: 'Я боюсь узнать что-то плохое. Стоит ли обращаться?',
    a: 'Вера работает с уважением к человеку. Она не сгущает краски и не пугает. Но она говорит правду — потому что правда даёт возможность действовать. Незнание не защищает, а ясность — помогает.',
  },
  {
    q: 'Как написать, чтобы сформулировать вопрос правильно?',
    a: 'Не нужно формулировать идеально. Просто напишите что вас беспокоит своими словами. Вера поможет сформулировать вопрос, если нужно.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function Gadanie() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Гадание онлайн — Вера Владимировна</title>
        <meta
          name="description"
          content="Гадание на конкретный вопрос онлайн. Честный ответ без общих слов. Ясновидящая Вера Владимировна, 35 лет практики, работает из любой страны."
        />
        <link rel="canonical" href="https://veravladimirovna.com/gadanie" />
        <meta property="og:title" content="Гадание онлайн — Вера Владимировна" />
        <meta property="og:description" content="Все виды гадания онлайн. Ответ на конкретный вопрос — быстро, честно, конфиденциально." />
        <meta property="og:url" content="https://veravladimirovna.com/gadanie" />
        <meta property="og:image" content="https://veravladimirovna.com/images/og-vera.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Гадание онлайн — Вера Владимировна" />
        <meta name="twitter:description" content="Все виды гадания онлайн. Ответ на конкретный вопрос — быстро, честно, конфиденциально." />
      </Helmet>

      <noscript>
        Вера Владимировна — ясновидящая и практикующий экстрасенс с 35-летним опытом. Проводит онлайн-гадание на конкретный вопрос для русскоязычных клиентов из Европы и всего мира. Разбирает ситуации в отношениях, карьере, здоровье и жизненных решениях — будет ли, стоит ли, как разрешится. Традиционные практики в сочетании с личным даром ясновидения. Конфиденциально, через Telegram и WhatsApp.
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
              ★ ГАДАНИЕ ОНЛАЙН
            </p>
            <h1
              className="font-bebas leading-none mb-4"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ГАДАНИЕ НА ВАШИ ВОПРОСЫ ОНЛАЙН
            </h1>
            <p
              className="font-lobster mb-8"
              style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}
            >
              Конкретный ответ — без общих слов и уклончивых формулировок.
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
            Вера Владимировна — ясновидящая и практикующий экстрасенс с 35-летним опытом. Проводит онлайн-гадание на конкретный вопрос для русскоязычных клиентов из Европы и всего мира. Разбирает ситуации в отношениях, карьере, здоровье и жизненных решениях — будет ли, стоит ли, как разрешится. Традиционные практики в сочетании с личным даром ясновидения. Конфиденциально, через Telegram и WhatsApp.
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
              ★ С КАКИМИ ВОПРОСАМИ ОБРАЩАЮТСЯ
            </p>
            <h2
              className="font-bebas leading-none mb-10"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              ЗАДАЙТЕ СВОЙ ВОПРОС.
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
              ★ ВОПРОСЫ О ГАДАНИИ
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
            ЕСТЬ ВОПРОС, НА КОТОРЫЙ ДАВНО НЕТ ОТВЕТА?
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.3 }}
          >
            Напишите — Вера посмотрит вашу ситуацию.
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
