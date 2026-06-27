import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const bio = [
  'Я начала практиковать более 35 лет назад — в то время, когда это не было ни модно, ни понятно большинству людей вокруг. Дар видения проявился у меня рано, и я выбрала не спрятать его, а развивать — осознанно, ответственно, с пониманием того, что это накладывает обязательства перед людьми.',
  'За эти годы через меня прошли сотни ситуаций. Женщины, которые не знали, уходить из отношений или оставаться. Люди на перекрёстке — сменить жизнь или держаться за то, что есть. Те, кто чувствовал, что что-то мешает, но не мог понять что. И те, кто просто хотел знать: как всё сложится.',
  'Я работаю с ясновидением, картами Таро и традиционными практиками гадания. Но главный инструмент — это дар, который я несу в себе и который с годами становится точнее, а не тупее.',
  'Особое место в моей жизни занимает Иерусалим. Я регулярно бываю у Стены Плача и веду там молитвенную практику — за своих клиентов, за их ситуации. Для меня это не красивая история для сайта. Это живая часть моего пути, которая началась много лет назад и продолжается до сих пор.',
  'Я работаю онлайн — из любой точки мира. Мои клиенты живут в Германии, Израиле, Австрии, Чехии, США, Нидерландах и других странах. Русскоязычная диаспора — это люди, которые часто оказываются один на один со своими ситуациями: рядом нет привычного окружения, нет человека, которому можно полностью довериться. Я понимаю это — и именно поэтому работаю так, чтобы каждый уходил с ощущением, что его услышали и увидели.',
  'Я не пугаю. Не обещаю невозможного. Не навязываю работу, которая не нужна. Если вижу что-то тревожное — говорю об этом прямо, но с уважением. Если вижу потенциал — говорю о нём. Если ситуация требует того, чего я не могу дать — честно об этом скажу.',
  'Вот и весь принцип. Напишите — и увидите сами.',
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
      </Helmet>

      <noscript>
        Вера Владимировна — ясновидящая, таролог и экстрасенс с 35-летним опытом. Работает онлайн с русскоязычными клиентами из Европы, СНГ и других стран мира. Особенность практики — молитвенная работа у Стены Плача в Иерусалиме. Консультирует по вопросам отношений, жизненных решений, диагностики негативных влияний. Без запугивания, без пустых обещаний, с уважением к каждому клиенту.
      </noscript>

      <Navbar />

      {/* H1 */}
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
              ★ О ЯСНОВИДЯЩЕЙ
            </p>
            <h1
              className="font-bebas leading-none"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              ВЕРА ВЛАДИМИРОВНА — ЯСНОВИДЯЩАЯ:<br />
              КТО Я И КАК РАБОТАЮ
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Биография */}
      <section className="py-16 md:py-20 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {bio.map((para, i) => (
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

      {/* Принципы работы */}
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
              ★ МОИ ПРИНЦИПЫ РАБОТЫ
            </p>
            <h2
              className="font-bebas leading-none mb-10"
              style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              КАК Я РАБОТАЮ.
            </h2>
            <ul className="space-y-5">
              {principles.map((principle, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span
                    className="flex-shrink-0 mt-1 text-base"
                    style={{ color: 'var(--accent)' }}
                  >
                    ✦
                  </span>
                  <span
                    className="font-lato text-base leading-relaxed"
                    style={{ color: 'var(--text-beige)', fontWeight: 300 }}
                  >
                    {principle}
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
