import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function RusskieVAnglii() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для русских в Англии — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для русскоязычных в Англии. 35 лет практики. Таро, ясновидение, помощь в отношениях. Конфиденциально." />
        <link rel="canonical" href="https://veravladimirovna.com/russkie-v-anglii" />
        <meta property="og:title" content="Ясновидящая для русских в Англии — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных в Англии. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/russkie-v-anglii" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для русских в Англии — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных в Англии. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для русскоязычных в Англии. 35 лет практики, потомственный дар. Таро, ясновидение, помощь в отношениях, снятие негативных влияний. Работает дистанционно с клиентами по всей Великобритании. Конфиденциально, без давления.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ АНГЛИЯ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ РУССКИХ В АНГЛИИ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Вера Владимировна работает с вами — из Лондона, Манчестера или любого другого города.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Лондон, Манчестер, Бирмингем — где бы вы ни жили в Англии, жизнь вдали от дома часто ставит вопросы, на которые сложно найти ответ в одиночку. Новая страна, другой ритм, привычные разговоры с близкими остались в прошлом часовом поясе. Вера Владимировна работает онлайн именно с такими ситуациями — когда рядом нет человека, которому можно всё рассказать и получить честный, спокойный взгляд со стороны.</p>
          <p>35 лет практики, потомственный дар ясновидения и работа с картами Таро — Вера смотрит ситуацию так же внимательно, как если бы вы сидели напротив неё, а не писали из Лондона в Telegram. Отношения на расстоянии, сложный выбор, ощущение, что что-то идёт не так — она разбирает каждую ситуацию отдельно, без шаблонных ответов и без запугивания.</p>
          <p>Расстояние между Англией и остальным миром для неё не имеет значения — работа идёт полностью онлайн, в удобном для вас темпе. Напишите, опишите что происходит — и получите честный ответ.</p>
          <div className="pt-6">
            <a href={TG} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm px-6 py-3 rounded-xl transition-all hover:opacity-90"
              style={{ background: 'var(--accent)', color: 'var(--bg-deep)', letterSpacing: '0.08em' }}>
              Написать в Telegram →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
