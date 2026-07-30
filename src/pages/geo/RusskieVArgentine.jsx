import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function RusskieVArgentine() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для русских в Аргентине — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для русскоязычных в Аргентине. 35 лет практики. Таро, ясновидение, поддержка на расстоянии." />
        <link rel="canonical" href="https://veravladimirovna.com/russkie-v-argentine" />
        <meta property="og:title" content="Ясновидящая для русских в Аргентине — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных в Аргентине. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/russkie-v-argentine" />
        <meta property="og:image" content="https://veravladimirovna.com/images/og-vera.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для русских в Аргентине — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных в Аргентине. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для русскоязычных в Аргентине. 35 лет практики, потомственный дар. Таро, ясновидение, помощь в отношениях, снятие негативных влияний. Работает дистанционно из любой точки мира. Конфиденциально, без давления.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ АРГЕНТИНА
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ РУССКИХ В АРГЕНТИНЕ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Буэнос-Айрес далеко от дома — но не от честного ответа.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Аргентина — один из самых удалённых уголков света для тех, кто вырос в русскоязычной среде. Буэнос-Айрес встречает новым языком, новым укладом, новым часовым поясом, который переворачивает день с ночью. В такой смене декораций особенно остро чувствуется нехватка человека, который может просто выслушать и сказать правду — без осуждения и с уважением к вашей ситуации.</p>
          <p>Вера Владимировна больше 35 лет работает с людьми, которые оказались далеко от привычной жизни. Через ясновидение и карты Таро она видит ситуацию целиком — что происходит в отношениях, в делах, в семье — и говорит об этом прямо, но бережно. Испаноязычное окружение, новые знакомства, привычка держать эмоции при себе — всё это можно обсудить на родном языке, без перевода и упрощений.</p>
          <p>Консультация проходит полностью онлайн, через Telegram или WhatsApp — расстояние до Буэнос-Айреса для этого не помеха. Напишите, когда будете готовы.</p>
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
