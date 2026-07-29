import { motion } from 'framer-motion';
import { Eye, Star, Layers, Zap, Heart, Wifi } from 'lucide-react';

const services = [
  {
    icon: <Eye size={32} />,
    title: 'Ясновидение',
    text: 'Вера видит вашу ситуацию так, как она есть — прошлое, настоящее и то, к чему ведёт происходящее. Никаких догадок — только то, что открывается в работе.',
  },
  {
    icon: <Star size={32} />,
    title: 'Таро',
    text: 'Глубокий расклад на конкретный вопрос — отношения, работа, здоровье, жизненный выбор. Карты дают картину, Вера объясняет что она означает именно для вас.',
  },
  {
    icon: <Layers size={32} />,
    title: 'Гадание',
    text: 'Традиционные практики гадания для тех, кто хочет получить чёткий ответ — будет ли, стоит ли, как лучше поступить. Работает на конкретный запрос.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Снятие негатива',
    text: 'Если что-то мешает жизни двигаться вперёд — Вера проводит диагностику ситуации и, при необходимости, работу по снятию негативных влияний. Без запугивания, честно.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Любовная магия',
    text: 'Работа с ситуацией в паре — разбор отношений, гармонизация, помощь при расставании или возвращении близкого человека. Каждая ситуация индивидуальна.',
  },
  {
    icon: <Wifi size={32} />,
    title: 'Онлайн-консультация',
    text: 'Вся работа проходит онлайн — через Telegram или WhatsApp. Расстояние не имеет значения. Полная конфиденциальность, удобное время.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 lg:py-36 px-4"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="font-montserrat font-semibold text-xs uppercase mb-4"
            style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}
          >
            ★ НАПРАВЛЕНИЯ РАБОТЫ
          </p>
          <h2
            className="font-bebas leading-none"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(40px, 6vw, 58px)' }}
          >
            ЧЕМ Я МОГУ ПОМОЧЬ.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="group p-6 md:p-8 rounded-lg"
              style={{
                background: 'var(--bg-deep)',
                border: '1px solid rgba(232,102,23,0.2)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.6), 0 6px 16px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)',
              }}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                borderColor: 'rgba(232,102,23,0.6)',
                boxShadow: '0 32px 72px rgba(0,0,0,0.7), 0 12px 28px rgba(0,0,0,0.45)',
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ color: 'var(--accent)' }}
              >
                {s.icon}
              </div>
              <h3
                className="font-montserrat font-semibold text-base mb-3"
                style={{ color: 'var(--text-white)' }}
              >
                {s.title}
              </h3>
              <p
                className="font-lato text-sm leading-relaxed mb-5"
                style={{ color: 'var(--text-beige)', fontWeight: 300 }}
              >
                {s.text}
              </p>
              <a
                href="#contacts"
                className="font-montserrat font-semibold text-xs transition-all hover:opacity-80"
                style={{ color: 'var(--accent)', letterSpacing: '0.08em' }}
              >
                Подробнее →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
