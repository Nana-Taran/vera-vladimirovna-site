import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Вы пишете',
    text: 'Опишите своими словами что происходит — что тревожит, что непонятно, о чём хотите узнать.',
  },
  {
    num: '02',
    title: 'Вера смотрит',
    text: 'Через ясновидение или карты Таро она видит картину вашей ситуации — без прикрас, честно.',
  },
  {
    num: '03',
    title: 'Выбираете формат',
    text: 'Вместе выбираете подходящий формат работы — разовая консультация, расклад или более глубокая работа.',
  },
  {
    num: '04',
    title: 'Договариваетесь',
    text: 'Обсуждаете условия, время и следующие шаги. Всё прозрачно, без давления.',
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how"
      className="relative overflow-hidden py-20 md:py-28 lg:py-36 px-4"
      style={{ background: 'var(--bg-deep)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(169,67,14,0.28) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-montserrat font-semibold text-xs uppercase mb-4"
            style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
          >
            ★ КАК МЫ РАБОТАЕМ
          </p>
          <h2
            className="font-bebas leading-none mb-2"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(38px, 6vw, 58px)' }}
          >
            СНАЧАЛА ВЕРА ВИДИТ.
          </h2>
          <p
            className="font-lobster"
            style={{ color: 'var(--accent)', fontSize: 'clamp(26px, 4vw, 40px)' }}
          >
            потом вы понимаете что делать.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-6 md:p-8 relative overflow-hidden"
              style={{
                background: 'var(--bg-dark)',
                border: '1px solid rgba(232,102,23,0.15)',
              }}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ borderColor: 'rgba(232,102,23,0.5)', transition: { duration: 0.2 } }}
            >
              <div
                className="font-bebas leading-none mb-4"
                style={{ color: 'var(--accent)', fontSize: '56px', opacity: 0.3, lineHeight: 1 }}
              >
                {step.num}
              </div>
              <h3
                className="font-montserrat font-semibold text-sm mb-3"
                style={{ color: 'var(--text-white)' }}
              >
                {step.title}
              </h3>
              <p
                className="font-lato text-sm leading-relaxed"
                style={{ color: 'var(--text-beige)', fontWeight: 300 }}
              >
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
