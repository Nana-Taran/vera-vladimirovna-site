import { motion } from 'framer-motion';
import { Eye, Star, Layers, Zap, Heart, Wifi } from 'lucide-react';

const services = [
  {
    icon: <Eye size={32} />,
    title: 'Ясновидение',
    text: 'Прямой взгляд на вашу ситуацию. Вера видит то, что скрыто от глаз — прошлое, настоящее и вероятное будущее.',
  },
  {
    icon: <Star size={32} />,
    title: 'Таро',
    text: 'Глубокий расклад карт таро на ваш вопрос — отношения, карьера, здоровье или жизненный выбор.',
  },
  {
    icon: <Layers size={32} />,
    title: 'Гадание',
    text: 'Традиционные практики гадания для получения ответов на конкретные вопросы о прошлом и будущем.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Снятие негатива',
    text: 'Диагностика и устранение негативных программ, порчи, сглаза и блоков, мешающих вашей жизни.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Любовная магия',
    text: 'Помощь в вопросах отношений — привязки, воссоединение, гармонизация пары, защита союза.',
  },
  {
    icon: <Wifi size={32} />,
    title: 'Онлайн консультация',
    text: 'Работа через любой удобный мессенджер из любой точки мира. Полная конфиденциальность.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 lg:py-36 px-4"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="max-w-6xl mx-auto">
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
            ЧЕМУ Я ПОМОГУ.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="group p-6 md:p-8 rounded-lg transition-all duration-300"
              style={{
                background: 'var(--bg-deep)',
                border: '1px solid rgba(232,102,23,0.2)',
              }}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ borderColor: 'rgba(232,102,23,0.6)', transition: { duration: 0.2 } }}
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
