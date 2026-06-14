import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    platform: 'Telegram',
    headerColor: '#229ED9',
    name: 'Анастасия К.',
    text: 'Вера Владимировна увидела ситуацию так точно, как будто знала меня всю жизнь. После сеанса всё встало на своё место. Отношения наладились, а страхи ушли. Безмерно благодарна.',
    date: '15 марта 2026',
    stars: 5,
  },
  {
    platform: 'WhatsApp',
    headerColor: '#25D366',
    name: 'Марина В.',
    text: 'Обратилась по вопросу работы — не могла понять, почему всё рушится. Вера увидела причину и дала чёткие рекомендации. Через месяц ситуация изменилась кардинально.',
    date: '2 апреля 2026',
    stars: 5,
  },
  {
    platform: 'Viber',
    headerColor: '#7360F2',
    name: 'Елена М.',
    text: 'Скептически относилась к подобным вещам, но попробовала. Была поражена точностью. Описала события из прошлого, которые я никому не рассказывала. Рекомендую всем.',
    date: '20 февраля 2026',
    stars: 5,
  },
  {
    platform: 'Telegram',
    headerColor: '#229ED9',
    name: 'Дмитрий С.',
    text: 'Обращался по сложной ситуации в семье. Вера Владимировна дала очень точный взгляд и помогла найти путь. Работает аккуратно, без запугивания. Настоящий профессионал.',
    date: '10 мая 2026',
    stars: 5,
  },
  {
    platform: 'WhatsApp',
    headerColor: '#25D366',
    name: 'Ольга Ф.',
    text: 'Стена Плача — это особенное место, и то что Вера работает там, придаёт особый вес её работе. Ощутила результат в течение двух недель. Очень рекомендую.',
    date: '1 июня 2026',
    stars: 5,
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getVisible = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + total) % total);
    }
    return indices;
  };

  return (
    <section
      id="reviews"
      className="relative py-20 md:py-28 lg:py-36 px-4"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-montserrat font-semibold text-xs uppercase mb-4"
            style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
          >
            ★ ЧТО ГОВОРЯТ КЛИЕНТЫ
          </p>
          <h2
            className="font-bebas leading-none mb-1"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(38px, 6vw, 58px)' }}
          >
            РЕАЛЬНЫЕ КЛИЕНТЫ.
          </h2>
          <p
            className="font-lobster"
            style={{ color: 'var(--accent)', fontSize: 'clamp(24px, 4vw, 40px)' }}
          >
            реальные результаты.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:grid grid-cols-3 gap-5">
            {getVisible().map((idx, pos) => (
              <ReviewCard key={idx} review={reviews[idx]} isCenter={pos === 1} />
            ))}
          </div>
          <div className="md:hidden">
            <ReviewCard review={reviews[current]} isCenter={true} />
          </div>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-80"
              style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
              aria-label="Назад"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: i === current ? 'var(--accent)' : 'rgba(232,102,23,0.3)',
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-80"
              style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
              aria-label="Вперёд"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, isCenter }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid ${isCenter ? 'rgba(232,102,23,0.5)' : 'rgba(232,102,23,0.15)'}`,
        opacity: isCenter ? 1 : 0.65,
        transform: isCenter ? 'scale(1)' : 'scale(0.97)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: isCenter ? 1 : 0.65, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="px-4 py-3 flex items-center gap-3"
        style={{ background: review.headerColor }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ background: 'rgba(255,255,255,0.2)' }}
        >
          {review.name[0]}
        </div>
        <div>
          <div className="text-white font-semibold text-sm font-montserrat">{review.name}</div>
          <div className="text-white text-xs opacity-80">{review.platform}</div>
        </div>
      </div>
      <div className="p-5" style={{ background: 'var(--bg-dark)' }}>
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: review.stars }).map((_, i) => (
            <span key={i} style={{ color: 'var(--accent)', fontSize: '14px' }}>★</span>
          ))}
        </div>
        <p
          className="font-lato text-sm leading-relaxed mb-4"
          style={{ color: 'var(--text-beige)', fontWeight: 300 }}
        >
          {review.text}
        </p>
        <p
          className="font-montserrat text-xs"
          style={{ color: 'rgba(217,150,112,0.5)', letterSpacing: '0.05em' }}
        >
          {review.date}
        </p>
      </div>
    </motion.div>
  );
}
