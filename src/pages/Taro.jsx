import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const mainText = [
  'Таро — это не игра в случайность. Это язык, в котором каждая карта несёт смысл. Но смысл этот раскрывается только тогда, когда его читает человек с настоящим опытом и даром — а не просто знающий значения карт по книге.',
  'Вера Владимировна работает с картами Таро 35 лет. За это время она провела тысячи раскладов — на отношения, карьеру, переезды, здоровье, семейные ситуации и жизненные выборы, которые невозможно отложить. Каждый расклад — это не шаблонный ответ, а живая работа с вашей конкретной ситуацией.',
  'Расклад проходит онлайн: вы задаёте вопрос, Вера раскладывает карты и объясняет, что они говорят о вашей ситуации — подробно, с разбором каждой позиции. Никаких общих слов. Только то, что касается именно вас.',
  'Карты Таро особенно точны, когда есть конкретный вопрос: "Стоит ли мне принять это предложение?", "Как он ко мне относится на самом деле?", "Что мешает мне двигаться вперёд?" — чем точнее запрос, тем глубже картина.',
  'Если у вас есть вопрос, который давно требует ответа — это хороший момент написать.',
];

const points = [
  'Отношения — как обстоит ситуация в паре, каковы намерения партнёра, что будет дальше',
  'Карьера и бизнес — стоит ли менять работу, браться за проект, как разрешится конфликт',
  'Жизненный выбор — переезд, решение, которое страшно принять в одиночку',
  'Здоровье — общий взгляд на ситуацию, что стоит проверить, на что обратить внимание',
  'Скрытые влияния — что или кто мешает идти вперёд, откуда берётся ощущение «хожу по кругу»',
];

const faqs = [
  {
    q: 'Нужно ли мне знать карты Таро, чтобы понять расклад?',
    a: 'Нет. Вера объясняет всё доступно — без терминологии, на понятном языке. Вы получите чёткий ответ, что говорят карты применительно к вашей ситуации.',
  },
  {
    q: 'Сколько вопросов можно задать в одном раскладе?',
    a: 'Лучше сосредоточиться на одном чётком вопросе или теме — это даёт самый точный результат. Если тем несколько, Вера подскажет как лучше выстроить работу.',
  },
  {
    q: 'Как быстро я получу результат расклада?',
    a: 'Обычно в рамках одной консультации. Точные сроки зависят от сложности запроса и договорённости при записи.',
  },
  {
    q: 'Карты Таро и ясновидение — это одно и то же?',
    a: 'Разные инструменты, но одна цель — дать вам ясность. Иногда Вера использует карты как основной инструмент, иногда подкрепляет расклад ясновидением. Это зависит от вашей ситуации.',
  },
  {
    q: 'Можно ли делать расклад на другого человека?',
    a: 'Да, это возможно. Вера может сделать расклад на ситуацию с конкретным человеком — партнёром, близким, коллегой — и рассказать, что показывают карты.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function Taro() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Расклад Таро онлайн — Вера Владимировна</title>
        <meta
          name="description"
          content="Глубокий расклад карт Таро на ваш вопрос. Отношения, карьера, жизненный выбор. Онлайн для клиентов из любой страны. 35 лет практики."
        />
        <link rel="canonical" href="https://veravladimirovna.com/taro" />
      </Helmet>

      <noscript>
        Вера Владимировна проводит онлайн-расклады карт Таро для русскоязычных клиентов по всему миру. 35 лет практики, точный индивидуальный разбор каждой карты применительно к вашей ситуации. Расклады на отношения, карьеру, жизненный выбор, здоровье и скрытые влияния. Консультации через Telegram и WhatsApp, полная конфиденциальность. Работает онлайн из любой страны.
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
              ★ РАСКЛАДЫ ТАРО
            </p>
            <h1
              className="font-bebas leading-none mb-4"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              РАСКЛАД ТАРО<br />НА ВАШИ ВОПРОСЫ
            </h1>
            <p
              className="font-lobster mb-8"
              style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}
            >
              Карты показывают картину. Вера объясняет, что она значит именно для вас.
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
            Вера Владимировна проводит онлайн-расклады карт Таро для русскоязычных клиентов по всему миру. 35 лет практики, точный индивидуальный разбор каждой карты применительно к вашей ситуации. Расклады на отношения, карьеру, жизненный выбор, здоровье и скрытые влияния. Консультации через Telegram и WhatsApp, полная конфиденциальность.
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
              ★ НА ЧТО ДЕЛАЮТ РАСКЛАДЫ
            </p>
            <h2
              className="font-bebas leading-none mb-10"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              ЛЮБОЙ ВОПРОС — КОНКРЕТНЫЙ ОТВЕТ.
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
              ★ ВОПРОСЫ О ТАРО
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
            ЕСТЬ ВОПРОС, КОТОРЫЙ ЖДЁТ ОТВЕТА?
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.3 }}
          >
            Напишите — Вера предложит подходящий расклад.
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
