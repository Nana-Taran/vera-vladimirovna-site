import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function UkraintsvAnglii() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для украинцев в Англии — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для украинцев в Англии. 35 лет практики. Таро, ясновидение, тёплая поддержка на родном языке." />
        <link rel="canonical" href="https://veravladimirovna.com/ukraintsy-v-anglii" />
        <meta property="og:title" content="Ясновидящая для украинцев в Англии — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для украинцев в Англии. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/ukraintsy-v-anglii" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для украинцев в Англии — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для украинцев в Англии. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для украинцев в Англии. 35 лет практики, потомственный дар. Таро, ясновидение, помощь в отношениях, поддержка в трудный период. Работает дистанционно, тепло и без запугивания. Конфиденциально.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ АНГЛИЯ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ УКРАИНЦЕВ В АНГЛИИ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Новый дом в Англии — а рядом человек, который выслушает и скажет честно.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Переезд в Англию редко бывает лёгким — даже когда вокруг доброжелательные люди и новая жизнь начинает налаживаться, внутри часто остаётся тревога о доме, о близких, о будущем. Лондон, Манчестер и другие города дают крышу над головой, но не всегда дают ответ на вопрос "что дальше".</p>
          <p>Вера Владимировна работает онлайн с украинцами по всей Европе уже 35 лет. Через потомственное ясновидение и карты Таро она смотрит вашу ситуацию — в отношениях, в семье, в важных решениях — и говорит честно, по-матерински, без запугивания и без лишней тревоги. Иногда достаточно просто быть услышанным на родном языке.</p>
          <p>Напишите в Telegram или WhatsApp — расскажите, что беспокоит, и получите тёплый, честный ответ.</p>
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
