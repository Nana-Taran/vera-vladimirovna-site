import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function RusskieVFrantsii() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для русских во Франции — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для русскоязычных во Франции. 35 лет практики. Таро, ясновидение, честный разбор ситуации." />
        <link rel="canonical" href="https://veravladimirovna.com/russkie-v-frantsii" />
        <meta property="og:title" content="Ясновидящая для русских во Франции — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных во Франции. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/russkie-v-frantsii" />
        <meta property="og:image" content="https://veravladimirovna.com/images/og-vera.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для русских во Франции — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных во Франции. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для русскоязычных во Франции. 35 лет практики, потомственный дар. Таро, ясновидение, помощь в отношениях, снятие негативных влияний. Работает дистанционно с клиентами по всей Европе. Конфиденциально, без давления.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ ФРАНЦИЯ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ РУССКИХ ВО ФРАНЦИИ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Париж, Лазурный берег или тихий французский городок — Вера на связи в Telegram.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Франция давно стала домом для нескольких поколений русскоязычных эмигрантов — Париж, Ницца, Лазурный берег помнят многих, кто когда-то приехал сюда в поисках нового начала. Но время меняется, а вопросы остаются похожими: отношения, важные решения, ощущение, что нужно с кем-то честно поговорить о происходящем.</p>
          <p>Вера Владимировна работает онлайн с клиентами из Франции и других стран Европы — через ясновидение и карты Таро она видит ситуацию без прикрас и без запугивания. 35 лет практики и потомственный дар позволяют ей говорить прямо там, где это нужно, и бережно — там, где важна поддержка.</p>
          <p>Напишите в Telegram или WhatsApp — расскажите, что происходит, и получите честный, развёрнутый ответ.</p>
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
