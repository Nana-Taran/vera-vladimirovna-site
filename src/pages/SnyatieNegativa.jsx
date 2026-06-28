import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const mainText = [
  'Бывает, что в жизни что-то не так — но непонятно что именно. Всё усиливается и ничего не меняется к лучшему. Отношения разрушаются без видимой причины. Работа буксует. Здоровье подводит. Появляется ощущение, что вокруг что-то невидимое, что тянет назад.',
  'Не каждая такая ситуация связана с внешним влиянием — иногда причина в накопившемся стрессе, неправильных решениях или просто сложном жизненном периоде. Поэтому работа с негативом у Веры всегда начинается с честной диагностики: она смотрит ситуацию и говорит, что есть на самом деле. Без нагнетания, без запугивания, без "у вас точно есть и срочно надо снимать".',
  'Если диагностика показывает, что есть что-то, что мешает — Вера объяснит что именно и предложит работу. Если нет — так и скажет. Это и есть подход человека, которому можно доверять.',
  'Практику Веры усиливает духовная работа, которая стала живой частью её пути много лет назад.',
  'Всё проходит онлайн. Клиенты из Германии, Израиля, Австрии, США — расстояние не имеет значения.',
];

const points = [
  'Ощущение «хожу по кругу» — всё повторяется и не меняется',
  'Неожиданные потери, несчастные случаи, цепочки неудач без объяснений',
  'Резкое изменение в отношениях или самочувствии после контакта с определённым человеком',
  'Ощущение тяжести, усталости, апатии которая не проходит',
  'Интуитивное ощущение, что что-то или кто-то мешает — и это не просто мнительность',
];

const faqs = [
  {
    q: 'Как понять, что у меня негативное влияние, а не просто чёрная полоса?',
    a: 'Именно для этого и нужна диагностика. Вера смотрит ситуацию и говорит честно — есть ли что-то или нет. Самостоятельно это определить сложно, потому что симптомы могут быть похожи. Лучше спросить у того, кто умеет видеть.',
  },
  {
    q: 'Вы сразу говорите, что «есть порча» и нужно срочно лечить?',
    a: 'Нет. Вера никогда не делает таких заявлений без реальной диагностики. Если она видит, что есть влияние — объясняет что именно и предлагает работу. Если нет — говорит об этом прямо. Запугивание — не её метод.',
  },
  {
    q: 'Как проходит снятие негатива онлайн?',
    a: 'Работа проходит без вашего физического присутствия. Вере нужна информация о ситуации — она работает с этим. Часть работы включает духовную практику.',
  },
  {
    q: 'Сколько сессий нужно?',
    a: 'Зависит от ситуации. Иногда достаточно одной глубокой работы, иногда нужно несколько этапов. Вера объяснит что конкретно потребуется после диагностики.',
  },
  {
    q: 'Можно ли снять влияние с другого человека — мужа, ребёнка?',
    a: 'Да, это возможно. Работа проводится через вас. Расскажите о ситуации — Вера посмотрит и скажет, что можно сделать.',
  },
  {
    q: 'Как понять, что работа помогла?',
    a: 'Изменения могут проявляться постепенно — в самочувствии, в ситуации, в отношениях. Вера честно говорит о реалистичных ожиданиях и не обещает мгновенного результата.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function SnyatieNegativa() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Снятие негатива онлайн — Вера Владимировна</title>
        <meta
          name="description"
          content="Диагностика негативных влияний и работа по их устранению. Без запугивания — сначала честный разбор ситуации. Вера Владимировна, онлайн."
        />
        <link rel="canonical" href="https://veravladimirovna.com/snyatie-negativa" />
      </Helmet>

      <noscript>
        Вера Владимировна — ясновидящая с 35-летним опытом, проводит диагностику негативных влияний и работу по их устранению онлайн. Помогает клиентам из Европы и всего мира, когда в жизни появляется ощущение блока, повторяющихся неудач или чужого вмешательства. Без запугивания, без навязывания — сначала диагностика, затем честный разговор о том, что есть и что можно сделать.
      </noscript>

      <Navbar />

      {/* H1 + подзаголовок + CTA */}
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-montserrat font-semibold text-xs uppercase mb-4"
              style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
            >
              ★ СНЯТИЕ НЕГАТИВА
            </p>
            <h1
              className="font-bebas leading-none mb-4"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ДИАГНОСТИКА И СНЯТИЕ<br />НЕГАТИВНЫХ ВЛИЯНИЙ
            </h1>
            <p
              className="font-lobster mb-8"
              style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}
            >
              Сначала Вера смотрит — есть ли что-то. И только потом говорит честно что делать.
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
        <div className="max-w-3xl mx-auto">
          <p
            className="font-lato text-base leading-relaxed"
            style={{ color: 'var(--text-beige)', fontWeight: 300 }}
          >
            Вера Владимировна — ясновидящая с 35-летним опытом, проводит диагностику негативных влияний и работу по их устранению онлайн. Помогает клиентам из Европы и всего мира, когда в жизни появляется ощущение блока, повторяющихся неудач или чужого вмешательства. Без запугивания, без навязывания — сначала диагностика, затем честный разговор о том, что есть и что можно сделать.
          </p>
        </div>
      </section>

      {/* Основной текст */}
      <section className="py-16 md:py-20 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-3xl mx-auto">
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
        <div className="max-w-4xl mx-auto">
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
              ★ ПРИЗНАКИ, С КОТОРЫМИ ОБРАЩАЮТСЯ
            </p>
            <h2
              className="font-bebas leading-none mb-10"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              УЗНАЁТЕ СЕБЯ?
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
        <div className="max-w-3xl mx-auto">
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
              ★ ВОПРОСЫ О РАБОТЕ
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
          className="max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-bebas leading-none mb-3"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(36px, 6vw, 60px)' }}
          >
            ЧУВСТВУЕТЕ, ЧТО ЧТО-ТО МЕШАЕТ?
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.3 }}
          >
            Сначала диагностика, потом честный разговор.
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
