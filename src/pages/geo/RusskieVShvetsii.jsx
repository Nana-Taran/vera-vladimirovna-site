import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function RusskieVShvetsii() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для русских в Швеции — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для русскоязычных в Швеции. 35 лет практики. Таро, ясновидение, честный разбор ситуации." />
        <link rel="canonical" href="https://veravladimirovna.com/russkie-v-shvetsii" />
        <meta property="og:title" content="Ясновидящая для русских в Швеции — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных в Швеции. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/russkie-v-shvetsii" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для русских в Швеции — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных в Швеции. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для русскоязычных в Швеции. 35 лет практики, потомственный дар. Таро, ясновидение, помощь в отношениях, снятие негативных влияний. Работает дистанционно с клиентами по всей Европе. Конфиденциально, без давления.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ ШВЕЦИЯ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ РУССКИХ В ШВЕЦИИ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Стокгольм и короткие зимние дни — время задать себе честные вопросы.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Швеция известна порядком, спокойствием и короткими зимними днями, которые располагают к раздумьям. Стокгольм полон новых возможностей, но именно долгими тёмными вечерами чаще всего всплывают вопросы об отношениях, о важных решениях, о том, что на самом деле происходит в жизни.</p>
          <p>Вера Владимировна работает онлайн с русскоязычными клиентами по всей Европе уже 35 лет. Через потомственное ясновидение и карты Таро она смотрит вашу ситуацию честно — без общих слов и без давления — и помогает увидеть, что стоит за происходящим.</p>
          <p>Напишите в Telegram или WhatsApp — расскажите, что беспокоит, и получите развёрнутый, честный ответ.</p>
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
