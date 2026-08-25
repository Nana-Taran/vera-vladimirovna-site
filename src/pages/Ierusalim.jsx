import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const mainText = [
  'Иерусалим — это не точка на карте. Это место, которое люди называют сердцем мира уже тысячелетия. Стена Плача — последний остаток Храма, к которой со всего света приходят с самыми важными молитвами. Туда несут то, о чём невозможно говорить вслух. То, о чём молятся в тишине.',
  'Вера Владимировна бывает у Стены Плача регулярно. Она ведёт там молитвенную практику — за своих клиентов, за их ситуации, за тех, кто написал с болью и надеждой. Это не туристическая поездка и не элемент биографии для сайта. Это часть её пути, которая началась много лет назад и продолжается до сих пор.',
  'Многие клиенты просят Веру помолиться у Стены Плача — за конкретную ситуацию, за близкого человека, за важное решение. Это отдельная форма работы, которая доступна всем, кто обращается — независимо от религии и страны проживания. Стена Плача принимает всех.',
  'Что это даёт? Вера не формулирует это как механизм с предсказуемым итогом. Она говорит иначе: это живое намерение, вынесенное в место особой силы. Для многих её клиентов молитва у Стены Плача стала поворотным моментом — не потому что "так должно быть по правилам", а потому что что-то менялось. Мягко, но заметно.',
  'Если вы хотите, чтобы Вера помолилась у Стены Плача за вас или вашу ситуацию — напишите ей об этом напрямую.',
];

const faqs = [
  {
    q: 'Нужно ли быть религиозным, чтобы обратиться за молитвой у Стены Плача?',
    a: 'Нет. Стена Плача — место, к которому приходят люди разных вер и убеждений. Вера не требует принадлежности к определённой религии. Важно только искреннее намерение.',
  },
  {
    q: 'Как это работает — молитва за меня в другой стране?',
    a: 'Вера держит в молитве имя человека и его ситуацию. Это не заочный ритуал с формальностями — это живое намерение и присутствие в месте особой силы. Многие клиенты замечают изменения — в атмосфере ситуации, в самочувствии, в том, как начинают развиваться события.',
  },
  {
    q: 'Можно ли попросить помолиться за конкретного человека или ситуацию?',
    a: 'Да. Напишите Вере — расскажите о ком молиться, о чём просить. Она включит это в свою практику при следующем посещении Стены.',
  },
  {
    q: 'Как часто Вера бывает у Стены Плача?',
    a: 'Регулярно. Точные даты зависят от её расписания. Если вам важен конкретный срок — уточните при обращении.',
  },
  {
    q: 'Это платная услуга?',
    a: 'Условия обсуждаются индивидуально. Напишите в Telegram — Вера ответит на все вопросы.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function Ierusalim() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Вера у Стены Плача в Иерусалиме</title>
        <meta
          name="description"
          content="Молитвенная практика у Стены Плача — живая часть работы Веры Владимировны. Узнайте, как она молится за своих клиентов в Иерусалиме."
        />
        <link rel="canonical" href="https://veravladimirovna.com/ierusalim" />
        <meta property="og:title" content="Вера у Стены Плача в Иерусалиме" />
        <meta property="og:description" content="Молитвенная практика у Стены Плача — живая часть работы Веры Владимировны. Доступно для всех клиентов." />
        <meta property="og:url" content="https://veravladimirovna.com/ierusalim" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Вера у Стены Плача в Иерусалиме" />
        <meta name="twitter:description" content="Молитвенная практика у Стены Плача — живая часть работы Веры Владимировны. Доступно для всех клиентов." />
      </Helmet>

      <noscript>
        Вера Владимировна регулярно бывает у Стены Плача в Иерусалиме и ведёт там молитвенную практику за своих клиентов. Это живая часть её работы — не маркетинговый приём, а часть духовного пути, который длится уже 35 лет. Особая сила этого места усиливает работу, которую она ведёт для людей по всему миру.
      </noscript>

      <Navbar />

      {/* H1 + подзаголовок + AI-резюме */}
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
              ★ ДУХОВНАЯ ПРАКТИКА
            </p>
            <h1
              className="font-bebas leading-none mb-4"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ВЕРА У СТЕНЫ ПЛАЧА<br />В ИЕРУСАЛИМЕ
            </h1>
            <p
              className="font-lobster mb-8"
              style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}
            >
              Одно из самых сильных мест на земле — живая часть её практики.
            </p>
            <p
              className="font-lato text-base leading-relaxed max-w-[700px]"
              style={{ color: 'var(--text-beige)', fontWeight: 300 }}
            >
              Вера Владимировна регулярно бывает у Стены Плача в Иерусалиме и ведёт там молитвенную практику за своих клиентов. Это живая часть её работы — не маркетинговый приём, а часть духовного пути, который длится уже 35 лет. Особая сила этого места усиливает работу, которую она ведёт для людей по всему миру.
            </p>
          </motion.div>
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
              ★ ВОПРОСЫ О ПРАКТИКЕ
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
            style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            ХОТИТЕ, ЧТОБЫ ВЕРА ПОМОЛИЛАСЬ<br />ЗА ВАС У СТЕНЫ ПЛАЧА?
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(20px, 3.5vw, 36px)', lineHeight: 1.3 }}
          >
            Напишите — Вера ответит и объяснит как это работает.
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
