import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const bio = [
  'Я практикую более 35 лет.',
  'Мой дар ясновидения проявился ещё в молодости, и я решила не скрывать его, а развивать — осознанно, ответственно и с пониманием того, насколько важно бережно относиться к чужим судьбам.',
  'За годы практики ко мне обращались люди с самыми разными вопросами: отношения и расставания, сложный выбор, повторяющиеся неудачи, тревожные ощущения, непонятные перемены и желание узнать, к чему ведёт ситуация.',
  'В работе я использую потомственное ясновидение, карты Таро и традиционные практики гадания. Но главным инструментом остаётся мой дар — способность видеть причины происходящего, скрытые обстоятельства и возможное развитие событий.',
  'Особое место в моей жизни занимает Иерусалим. Я регулярно бываю у Стены Плача и провожу там молитвенную практику за клиентов и их ситуации. Для меня это не красивый образ для сайта, а живая часть моего духовного пути.',
  'Я консультирую онлайн и работаю с русскоязычными клиентами из Германии, Израиля, Австрии, Чехии, США, Нидерландов и других стран. Расстояние не мешает внимательно рассмотреть ситуацию, услышать человека и дать понятный, честный ответ.',
  'Мой принцип прост: не запугивать, не обещать невозможного и не навязывать ненужную работу. Если вижу проблему — говорю прямо, но бережно. Если вижу перспективу — объясняю, на что можно опереться. Если не могу помочь — честно скажу об этом.',
  'Напишите мне, чтобы получить личный разбор ситуации и понять, что происходит на самом деле.',
];

const principles = [
  'Сначала смотрю ситуацию — потом предлагаю работу. Никогда наоборот.',
  'Говорю честно, даже если это не то, что хочется услышать.',
  'Не запугиваю и не создаю зависимость от консультаций.',
  'Соблюдаю полную конфиденциальность — ваша ситуация не становится историей для других.',
  'Работаю с уважением к каждому человеку, независимо от его ситуации.',
];

const faqs = [
  {
    q: 'Вы работаете только с женщинами?',
    a: 'Нет. Большинство клиентов — женщины, но я работаю со всеми, кто обращается. Вопросы и ситуации бывают разные, и это не зависит от пола.',
  },
  {
    q: 'Как долго вы практикуете?',
    a: '35 лет. За это время работа не стала рутиной — каждая ситуация уникальна, и именно это держит практику живой.',
  },
  {
    q: 'Есть ли у вас сертификаты или дипломы?',
    a: 'Мой главный документ — это годы практики и результаты работы с клиентами. Уточняющая информация о подтверждениях — по запросу.',
  },
  {
    q: 'Почему вы работаете именно онлайн?',
    a: 'Потому что большинство моих клиентов живут в других странах. Онлайн-формат позволяет работать с людьми из любой точки мира без потери качества. Расстояние не влияет на то, что я вижу.',
  },
  {
    q: 'Как понять, что вам можно доверять?',
    a: 'Написать — и увидеть сами. Я не прошу доверять авансом. Первый разговор ни к чему не обязывает. Вы зададите вопросы, я отвечу — и вы сами решите, хотите ли продолжить.',
  },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function OMne() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>О Вере Владимировне — ясновидящей</title>
        <meta
          name="description"
          content="Вера Владимировна — ясновидящая, таролог, 35 лет практики. Работает у Стены Плача в Иерусалиме. Онлайн-консультации для русскоязычных по всему миру."
        />
        <link rel="canonical" href="https://veravladimirovna.com/o-mne" />
        <meta property="og:title" content="О Вере Владимировне — Ясновидящая с 35-летним опытом" />
        <meta property="og:description" content="Потомственная ясновидящая. 35 лет практики. Работает у Стены Плача в Иерусалиме. Онлайн для русскоязычных по всему миру." />
        <meta property="og:url" content="https://veravladimirovna.com/o-mne" />
        <meta property="og:image" content="https://veravladimirovna.com/images/og-vera.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="О Вере Владимировне — Ясновидящая с 35-летним опытом" />
        <meta name="twitter:description" content="Потомственная ясновидящая. 35 лет практики. Работает у Стены Плача в Иерусалиме. Онлайн для русскоязычных по всему миру." />
      </Helmet>

      <noscript>
        Вера Владимировна — ясновидящая, таролог и экстрасенс с 35-летним опытом. Работает онлайн с русскоязычными клиентами из Европы, СНГ и других стран мира. Особенность практики — молитвенная работа у Стены Плача в Иерусалиме. Консультирует по вопросам отношений, жизненных решений, диагностики негативных влияний. Без запугивания, без пустых обещаний, с уважением к каждому клиенту.
      </noscript>

      <Navbar />

      {/* H1 */}
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
              ★ О ЯСНОВИДЯЩЕЙ
            </p>
            <h1
              className="font-bebas leading-none"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ВЕРА ВЛАДИМИРОВНА —<br />
              КТО Я И КАК РАБОТАЮ
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Биография */}
      <section id="bio" className="py-16 md:py-20 px-4 relative overflow-hidden" style={{ background: 'var(--text-white)' }}>
        {/* Glow 1 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 130% 90% at 88% 100%,
            rgba(195,72,8,0.55) 0%, rgba(215,88,12,0.35) 20%,
            rgba(230,100,20,0.15) 42%, rgba(232,102,23,0.06) 62%, transparent 78%)`,
          zIndex: 0,
        }} />
        {/* Glow 2 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 80% 70% at 5% 5%,
            rgba(210,85,10,0.18) 0%, rgba(225,100,18,0.08) 40%, transparent 65%)`,
          zIndex: 0,
        }} />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12" style={{ alignItems: 'stretch' }}>

            {/* Текст в рамке — 70% */}
            <motion.div
              style={{ flex: '0 0 70%', maxWidth: '70%', display: 'flex' }}
              className="w-full max-lg:!flex-none max-lg:!max-w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{
                width: '100%',
                border: '2.5px solid var(--accent)',
                borderRadius: '18px',
                padding: '40px 44px',
                background: 'var(--bg-deep)',
                boxShadow: '0 8px 40px rgba(168,67,14,0.25), 0 2px 8px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Оранжевое свечение сверху */}
                <div style={{
                  position: 'absolute',
                  top: '-60px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%', height: '260px',
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(232,102,23,0.38) 0%, rgba(200,70,10,0.18) 40%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }} />
                {/* Оранжевое свечение снизу */}
                <div style={{
                  position: 'absolute',
                  bottom: '-60px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%', height: '260px',
                  background: 'radial-gradient(ellipse at 50% 100%, rgba(232,102,23,0.38) 0%, rgba(200,70,10,0.18) 40%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }} />

                {bio.map((para, i) => {
                  const isFirst = i === 0;
                  const isLast = i === bio.length - 1;
                  if (isFirst || isLast) {
                    return (
                      <p
                        key={i}
                        className="font-lobster"
                        style={{
                          fontSize: 'clamp(20px, 1.8vw, 28px)',
                          color: 'var(--accent)',
                          lineHeight: 1.35,
                          marginBottom: isFirst ? '0.5rem' : 0,
                          marginTop: isLast ? '0.8rem' : 0,
                          position: 'relative', zIndex: 1,
                        }}
                      >
                        {para}
                      </p>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="font-lato leading-relaxed"
                      style={{
                        fontSize: '17px',
                        color: 'var(--text-white)',
                        fontWeight: 300,
                        marginBottom: i < bio.length - 2 ? '1.2rem' : 0,
                        position: 'relative', zIndex: 1,
                      }}
                    >
                      {para}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            {/* Видео 9:16 — 30%, высота определяется своим aspect-ratio */}
            <motion.div
              style={{ flex: '0 0 30%', maxWidth: '30%' }}
              className="w-full max-lg:!flex-none max-lg:!max-w-[280px] max-lg:mx-auto"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '2.5px solid var(--accent)',
                  boxShadow: '0 24px 60px rgba(168,67,14,0.35), 0 8px 24px rgba(0,0,0,0.2)',
                  background: '#000',
                  width: '100%',
                  aspectRatio: '9 / 16',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                  zIndex: 2,
                }} />
                <video
                  src="/images/video/vera-vladimirovna-o-sebe.mp4"
                  controls
                  playsInline
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[1400px] mx-auto">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
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
            style={{ color: 'var(--text-white)', fontSize: 'clamp(36px, 6vw, 60px)' }}
          >
            ХОТИТЕ ПОЗНАКОМИТЬСЯ БЛИЖЕ?
          </h2>
          <p
            className="font-lobster mb-10"
            style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.3 }}
          >
            Напишите — и сами почувствуете разницу.
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
