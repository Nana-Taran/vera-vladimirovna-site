import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Как проходит консультация онлайн?',
    a: 'Вы пишете Вере в Telegram или WhatsApp — описываете своими словами что происходит или задаёте конкретный вопрос. Она смотрит ситуацию через ясновидение или карты и даёт развёрнутый ответ. Всё удалённо, никуда ехать не нужно. Общение полностью конфиденциально.',
  },
  {
    q: 'Сколько стоит консультация?',
    a: 'Стоимость зависит от формата и глубины работы. Напишите — Вера сначала посмотрит вашу ситуацию, а затем предложит подходящий вариант с чёткой ценой. Никаких скрытых платежей и "ещё немного для завершения работы".',
  },
  {
    q: 'Вы работаете с клиентами из других стран?',
    a: 'Да, это основная аудитория. Вера работает с клиентами из 12+ стран — Германия, Израиль, Австрия, Чехия, Нидерланды, США и другие. Расстояние не имеет значения, всё проходит онлайн.',
  },
  {
    q: 'Как долго ждать результата?',
    a: 'Ответ на конкретный вопрос — в рамках одной консультации. Более глубокая работа — от нескольких дней до нескольких недель, в зависимости от ситуации. Вера всегда честно говорит, чего и когда реально ожидать.',
  },
  {
    q: 'Это конфиденциально?',
    a: 'Абсолютно. Всё, о чём вы рассказываете, остаётся между вами и Верой. Никаких публикаций без вашего согласия, никаких третьих лиц. Это один из главных принципов работы.',
  },
  {
    q: 'С чего начать, если я никогда раньше не обращалась к экстрасенсу?',
    a: 'Просто напишите в Telegram или WhatsApp — в свободной форме, своими словами. Опишите что вас беспокоит. Вера ответит, задаст уточняющие вопросы если нужно, и предложит первый шаг. Никакого давления и обязательств.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 lg:py-36 px-4"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-bebas leading-none"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(36px, 6vw, 54px)', letterSpacing: '0.05em' }}
          >
            ЧАСТЫЕ ВОПРОСЫ
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
  );
}
